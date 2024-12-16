import mongoose from 'mongoose';

const resourceSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Le nom est requis'],
    trim: true,
  },
  description: {
    type: String,
    required: [true, 'La description est requise'],
  },
  type: {
    type: String,
    required: [true, 'Le type est requis'],
    enum: ['pdf', 'video', 'audio'],
  },
  category: {
    type: String,
    required: [true, 'La catégorie est requise'],
    enum: ['meditation', 'breathwork', 'sound-healing', 'personal-development'],
  },
  url: {
    type: String,
    required: [true, 'L\'URL est requise'],
  },
  accessLevel: {
    type: String,
    enum: ['free', 'premium'],
    default: 'premium',
  },
  price: {
    type: Number,
    required: function() { return this.accessLevel === 'premium'; },
    min: [0, 'Le prix ne peut pas être négatif'],
  },
  downloads: {
    type: Number,
    default: 0,
  },
  ratings: [{
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    rating: {
      type: Number,
      required: true,
      min: 1,
      max: 5,
    },
    comment: String,
    date: {
      type: Date,
      default: Date.now,
    },
  }],
  averageRating: {
    type: Number,
    default: 0,
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

const Resource = mongoose.model('Resource', resourceSchema);
export default Resource;