import mongoose from 'mongoose';

const eventSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Le nom est requis'],
    trim: true,
  },
  description: {
    type: String,
    required: [true, 'La description est requise'],
  },
  date: {
    type: Date,
    required: [true, 'La date est requise'],
  },
  time: {
    type: String,
    required: [true, 'L\'heure est requise'],
  },
  location: {
    type: String,
    required: [true, 'Le lieu est requis'],
  },
  type: {
    type: String,
    required: [true, 'Le type est requis'],
    enum: ['deep-healing', 'sound-healing', 'breathwork', 'meditation'],
  },
  instructor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: [true, 'L\'instructeur est requis'],
  },
  maxSpots: {
    type: Number,
    required: [true, 'Le nombre maximum de places est requis'],
    min: [1, 'Le nombre minimum de places est 1'],
  },
  participants: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  }],
  price: {
    type: Number,
    required: [true, 'Le prix est requis'],
    min: [0, 'Le prix ne peut pas être négatif'],
  },
  status: {
    type: String,
    enum: ['upcoming', 'ongoing', 'completed', 'cancelled'],
    default: 'upcoming',
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

const Event = mongoose.model('Event', eventSchema);
export default Event;