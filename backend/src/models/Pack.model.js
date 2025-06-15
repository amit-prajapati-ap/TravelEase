import mongoose from 'mongoose';

const packSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Packege Title is required'],
    trim: true,
    maxlength: [100, 'Title cannot exceed 100 characters']
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

export const Pack = mongoose.model('Pack', packSchema);