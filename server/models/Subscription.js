import mongoose from 'mongoose';

const subscriptionSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: [true, 'L\'utilisateur est requis'],
  },
  plan: {
    type: String,
    enum: ['6months', '1year'],
    required: [true, 'Le plan est requis'],
  },
  status: {
    type: String,
    enum: ['active', 'cancelled', 'expired'],
    default: 'active',
  },
  startDate: {
    type: Date,
    required: [true, 'La date de début est requise'],
  },
  endDate: {
    type: Date,
    required: [true, 'La date de fin est requise'],
  },
  autoRenew: {
    type: Boolean,
    default: true,
  },
  price: {
    type: Number,
    required: [true, 'Le prix est requis'],
  },
  paymentHistory: [{
    amount: Number,
    date: Date,
    status: {
      type: String,
      enum: ['success', 'failed'],
    },
    transactionId: String,
  }],
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

const Subscription = mongoose.model('Subscription', subscriptionSchema);
export default Subscription;