import React, { useEffect, useState } from "react";

function Admin() {
  const [color, setColor] = useState("");

  const handleSetResult = async () => {
    await fetch("http://localhost:3000/set-result", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ result: color }),
    });
    setColor("");
  };

  return (
    <div>
      <h2>Admin Panel</h2>
      <input
        value={color}
        onChange={(e) => setColor(e.target.value)}
        placeholder="Set winning color"
      />
      <button onClick={handleSetResult}>Set Result</button>
    </div>
  );
}

export default Admin;