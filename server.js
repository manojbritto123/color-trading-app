const express = require('express');
const mongoose = require('mongoose');
const Trade = require('./Trade'); // Import your schema
const app = express();
const PORT = 3000;

app.use(express.json());

// MongoDB connection
mongoose.connect('mongodb+srv://manojbritto123:chinnibabu123@britto.5qu6kz7.mongodb.net/?retryWrites=true&w=majority&appName=Britto', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log("✅ Connected to MongoDB"))
.catch((err) => console.error("❌ MongoDB connection error:", err));

// Route to create a new trade
app.post('/trade', async (req, res) => {
  try {
    const trade = new Trade(req.body);
    await trade.save();
    res.status(201).json(trade);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Route to get all trades
app.get('/trades', async (req, res) => {
  try {
    const trades = await Trade.find();
    res.json(trades);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
