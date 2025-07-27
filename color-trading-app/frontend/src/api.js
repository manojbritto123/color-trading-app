const API = import.meta.env.VITE_API_URL;

export const tradeColor = async (color, amount) => {
  const res = await fetch(`${API}/trade`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ color, amount })
  });

  return await res.json();
};