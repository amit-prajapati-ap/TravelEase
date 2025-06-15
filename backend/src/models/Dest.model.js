import mongoose from 'mongoose';

const destSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Destination Title is required'],
    trim: true,
    maxlength: [100, 'Title cannot exceed 100 characters']
  },
  price: {
    type: Number,
    required: [true, 'Price is required'],
  },
  thumbnail: {
    type: String,
    required: [true, 'Thumbnail is required'],
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, {
  timestamps: true
});

export const Dest = mongoose.model('Dest', destSchema);