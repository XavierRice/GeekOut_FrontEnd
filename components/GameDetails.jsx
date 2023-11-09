import { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import ReactPlayer from "react-player/youtube";
import imgObj from "../src/assets/pictures";
import './GameDetails.css'

const API = import.meta.env.VITE_REACT_APP_API_URL;

const GameDetails = ({ setGameName }) => {
  const [game, setGame] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  const [imageUrl, setImageUrl] = useState(null);

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

      // const Base_URL = "http://localhost:8090/"
      // const fullImageUrl = Base_URL + resJson.image_id
      console.log("image:", resJson.image_id)
      setImageUrl(resJson.image_id)
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


  console.log(imageUrl)

  return (
    <div key={game.id} className="container mt-5">
      <div className="card game-card">
        <img
          className="card-img-top"
          src={imgObj[imageUrl]}
          alt="Card image cap"
        ></img>
        <div className="card-body">
          <h2 className="card-title">{game.name}</h2>
          <h4 className="card-text">{game.genre}</h4>
          <p className="card-body">{game.storyline}</p>
          <div className="list-group list-group-flush">
            <section className="list-group-item favorite-badge">
              {game.is_favorite ? (
                <span>⭐️</span>
              ) : (
                <span>&nbsp; &nbsp; &nbsp;</span>
              )}
            </section>
            <p className="list-group-item" >{game.id}</p>
            <section className="list-group-item">
              {game.video_id ? (
                <ReactPlayer className="video-player"
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
              <h3 className="btn btn-primary">Edit</h3>
            </Link>{" "}
            <div className="btn btn-danger">
              <button onClick={handleDelete}> Delete</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameDetails;
