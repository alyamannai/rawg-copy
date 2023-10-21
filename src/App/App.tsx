import { useEffect, useState } from "react";
import GameCard from "../components/GameCard/GameCard";
import axios, { CanceledError } from "axios";
import "./App.css";
import apiClients from "../services/api-clients";
import { Card } from "@chakra-ui/react";

interface Game {
  count: number;
  results: Array<any>;
  background_image: string;
  name: string;
}

function App() {
  const [games, setGames] = useState<Game>();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    apiClients
      .get<Game>("/games?page_size=40", {
        signal: controller.signal,
      })
      .then((res) => {
        setGames(res.data);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });
    return () => controller.abort();
  }, []);

  return (
    <>
      {error && <p>{error}</p>}
      {loading && <div className="spinner-border"></div>}
      <div>
        {games?.results.map((game, index) => (
          <GameCard image={game.background_image} gameName={game.name} />
        ))}
      </div>
    </>
  );
}

export default App;
