const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true
  },
  phone: {
    type: String,
    trim: true
  },
  subject: {
    type: String,
    trim: true
  },
  message: {
    type: String,
    required: true,
    trim: true
  },
  source: {
    type: String,
    required: true,
    trim: true
  },
  // Additional fields for service booking
  company: {
    type: String,
    trim: true
  },
  service: {
    type: String,
    trim: true
  },
  projectDetails: {
    type: String,
    trim: true
  },
  budget: {
    type: String,
    trim: true
  },
  timeline: {
    type: String,
    trim: true
  },
  preferredContact: {
    type: String,
    trim: true
  },
  additionalInfo: {
    type: String,
    trim: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Message', messageSchema);