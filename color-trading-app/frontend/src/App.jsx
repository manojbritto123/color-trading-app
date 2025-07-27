import React, { useState } from 'react';
import { tradeColor } from './api';

export default function App() {
  const [color, setColor] = useState('red');
  const [amount, setAmount] = useState('');

  const handleTrade = async () => {
    const res = await tradeColor(color, amount);
    alert(res.message);
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h1>🎨 Color Trading App</h1>
      <select value={color} onChange={e => setColor(e.target.value)}>
        <option value="red">Red</option>
        <option value="green">Green</option>
        <option value="blue">Blue</option>
      </select>
      <input
        type="number"
        placeholder="Enter amount"
        value={amount}
        onChange={e => setAmount(e.target.value)}
      />
      <button onClick={handleTrade}>Trade</button>
    </div>
  );
}