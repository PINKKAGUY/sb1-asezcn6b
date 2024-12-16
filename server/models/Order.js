import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: [true, 'L\'utilisateur est requis'],
  },
  items: [{
    type: {
      type: String,
      enum: ['resource', 'event'],
      required: true,
    },
    item: {
      type: mongoose.Schema.Types.ObjectId,
      refPath: 'items.type',
      required: true,
    },
    price: {
      type: Number,
      required: true,
      min: [0, 'Le prix ne peut pas être négatif'],
    },
  }],
  totalAmount: {
    type: Number,
    required: true,
    min: [0, 'Le montant total ne peut pas être négatif'],
  },
  status: {
    type: String,
    enum: ['pending', 'completed', 'failed', 'refunded'],
    default: 'pending',
  },
  paymentMethod: {
    type: String,
    enum: ['card', 'paypal', 'transfer'],
    required: true,
  },
  paymentDetails: {
    transactionId: String,
    paymentDate: Date,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

const Order = mongoose.model('Order', orderSchema);
export default Order;