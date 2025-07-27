import React, { useEffect, useState } from "react";

function Home() {
  const [color, setColor] = useState("");
  const [trades, setTrades] = useState([]);
  const [timer, setTimer] = useState(60);

  useEffect(() => {
    fetchTrades();
    const interval = setInterval(() => {
      fetchTrades();
      setTimer(60);
    }, 60000);
    const countdown = setInterval(() => setTimer((t) => t - 1), 1000);
    return () => {
      clearInterval(interval);
      clearInterval(countdown);
    };
  }, []);

  const fetchTrades = async () => {
    const res = await fetch("http://localhost:3000/trades");
    const data = await res.json();
    setTrades(data);
  };

  const handleSubmit = async () => {
    await fetch("http://localhost:3000/trade", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ color }),
    });
    setColor("");
    fetchTrades();
  };

  return (
    <div>
      <h2>Trade Color</h2>
      <input
        value={color}
        onChange={(e) => setColor(e.target.value)}
        placeholder="Enter color"
      />
      <button onClick={handleSubmit}>Trade</button>
      <p>⏱ Refreshing in: {timer}s</p>
      <ul>
        {trades.map((t) => (
          <li key={t._id}>
            {t.color} — {t.result || "Pending"}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;