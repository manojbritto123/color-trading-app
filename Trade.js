
const mongoose = require('mongoose');

const TradeSchema = new mongoose.Schema({
  color: { type: String, required: true },
  result: { type: String },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Trade', TradeSchema);
