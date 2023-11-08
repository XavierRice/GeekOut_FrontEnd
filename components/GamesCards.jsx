import { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import ReactPlayer from "react-player/youtube";
import './GamesCards.css'

const GamesCard =({ setGameName }) => {
  const API = import.meta.env.VITE_REACT_APP_API_URL;


  const [game, setGame] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  const fetchedGame = async () => {
    try {
      const res = await fetch(`${API}/games/${id}`);
      if (!res.ok) {
        console.log(res);
        throw new Error("Get id ain't getting");
      }
      const resJson = await res.json();
      console.log(resJson);
      setGame(resJson);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchedGame();
  }, [id]);

  const handleDelete = () => {
    const confirmed = window.confirm("Are you sure you wanna drop this Game!?");
    if (confirmed) {
      try {
        fetch(`${API}/games/${id}`, { method: "DELETE" }).then(() => {
          navigate("/games");
        });
      } catch (error) {
        throw error;
      }
    }
  };
  useEffect(() => {
    setGameName(game.name);
  }, [id]);

  return (
    <div className="card-vertical" >
      <div className="card-vertical-child" />
      <div className="gamegenre">{game.name}</div>
      <div className="gamename">{game.genre}</div>
      {game.video_id ? (
              <ReactPlayer
                url={`https://www.youtube.com/watch?v=${game.video_id}`}
                loop={true}
              />
            ) : (
              <span>&nbsp; &nbsp; &nbsp;</span>
            )}
      <div className="game-storyline">{game.storyline}</div>
      <div className="card-body gameNav">
        <div className="card-link">
          {" "}
          <Link to={`/games`}>
            <button>Back</button>
          </Link>
        </div>
        <div className="btn btn-secondary">
          {" "}
          <Link to={`/games/${id}/edit`}>
            <button>Edit</button>
          </Link>{" "}
          <div className="btn btn-danger">
            <button onClick={handleDelete}> Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GamesCard;
