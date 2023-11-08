import { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import ReactPlayer from "react-player/youtube";

const API = import.meta.env.VITE_REACT_APP_API_URL;

const GameDetails = ({ setGameName }) => {
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
    <div key={game.id} className="card details">
      <img className="card-img-top" src="..." alt="Card image cap"></img>{" "}
      {/* if or src tags*/}
      <div className="card-body">
        <h2 className="card-title">{game.name}</h2>
        <h4 className="card-text">{game.genre}</h4>
        <p className="card-body">{game.storyline}</p>
        <div className="list-group list-group-flush">
          <section className="list-group-item">
            {game.is_favorite ? (
              <span>⭐️</span>
            ) : (
              <span>&nbsp; &nbsp; &nbsp;</span>
            )}
          </section>
          <p className="list-group-item">{game.id}</p>
          <section className="list-group-item">
            {game.video_id ? (
              <ReactPlayer
                url={`https://www.youtube.com/watch?v=${game.video_id}`}
                loop={true}
              />
            ) : (
              <span>&nbsp; &nbsp; &nbsp;</span>
            )}
          </section>
        </div>
      </div>
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

export default GameDetails;
