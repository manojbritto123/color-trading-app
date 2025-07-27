const API_BASE = import.meta.env.VITE_API_URL;

export const placeBet = async (color, amount) => {
  const response = await fetch(`${API_BASE}/place-bet`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ color, amount })
  });
  return response.json();
};

export const getCurrentGame = async () => {
  const response = await fetch(`${API_BASE}/current-game`);
  return response.json();
};
