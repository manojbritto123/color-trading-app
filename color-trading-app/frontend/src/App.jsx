import { useEffect, useState } from 'react';
import { getCurrentGame } from './api';

function App() {
  const [gameData, setGameData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getCurrentGame();
      setGameData(data);
    };

    fetchData();
    const interval = setInterval(fetchData, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h1>Color Trading Game</h1>
      {gameData ? (
        <pre>{JSON.stringify(gameData, null, 2)}</pre>
      ) : (
        <p>Loading game data...</p>
      )}
    </div>
  );
}

export default App;
