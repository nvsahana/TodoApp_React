const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  title: { type: String, required: true },
  description: { type: String },
  reminder: { type: Date },
  status: { type: String, enum: ['completed', 'uncompleted'], default: 'uncompleted' }
}, { timestamps: true });

module.exports = mongoose.model('Task', taskSchema);
