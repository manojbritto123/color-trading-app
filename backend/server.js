const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('✅ Color Trading Backend is running!');
});

app.post('/trade', (req, res) => {
  const { color, amount } = req.body;
  res.json({ message: `Received trade for ${color} with ₹${amount}` });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
