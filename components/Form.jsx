import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./Form.css";

const API = import.meta.env.VITE_REACT_APP_API_URL;

const Form = () => {
  const navigate = useNavigate();
  const [nameError, setNameError] = useState(false);
  const [costError, setCostError] = useState(false);
  const [idError, setIdError] = useState(false);
  const [game, setGame] = useState({
    name: "",
    genre: "",
    is_favorite: false,
    storyline: "",
    video_id: "",
    image_id: "",
    cost: 0,
  });

  useEffect(() => {
    if (!game.name) {
      setNameError(true);
    } else {
      setNameError(false);
    }
    if (!game.cost) {
      setCostError(true);
    } else {
      setCostError(false);
    }
    if (game.video_id.length > 12) {
      setIdError(true);
    } else {
      setIdError(false);
    }
  }, [game.name, game.cost, game.video_id]); //ERROR FLAGS FOR NAME AND COST

  const handleTextChange = (event) => {
    setGame({ ...game, [event.target.id]: event.target.value });
  };

  const handleCheck = (event) => {
    setSong({ ...game, is_favorite: !game.is_favorite })
}

  const addGame = async () => {
    console.log("game:", game);
    axios
      .post(`${API}/games`, game)
      .then(({ data }) => {
        data.id ? navigate(`/games/${data.id}`) : navigate(`/games`);
      })
      .catch((err) => {
        console.log(err);
      });

  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addGame();
  };

  return (
    <div className="wrapper">
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="NewForm">
        <h3 className="header">New Games</h3>
        <form onSubmit={handleSubmit} className="form-group mx-auto">
          <label htmlFor="name">Name:</label>
          <input
            className="form-control "
            style={{ width: "150%" }}
            id="name"
            value={game.name}
            type="text"
            onChange={handleTextChange}
            placeholder="Name of Game"
            required
          />
          {nameError && (
            <div className="error-message">You Must Enter a Game title yo!</div>
          )}
          <label htmlFor="genre">Genre:</label>
          <input
            className="form-control "
            style={{ width: "150%" }}
            id="genre"
            value={game.genre}
            type="text"
            onChange={handleTextChange}
            placeholder="Type of Game: First-Person-Shooter"
          />
          <label htmlFor="video_id">Video_id:</label>
          <input
            className="form-control"
            id="video_id"
            value={game.video_id}
            type="text"
            onChange={handleTextChange}
            placeholder="Video id?"
          />
          {idError && (
            <div className="error-message">
              Your id must be 12 chars or less!
            </div>
          )}
          <label htmlFor="image_id">Image_id:</label>
          <input
            className="form-control"
            id="image_id"
            value={game.image_id}
            type="text"
            onChange={handleTextChange}
            placeholder="Image id?"
          />
          <label htmlFor="">Storyline:</label>
          <textarea
            className="form-control"
            style={{ width: "190%" }}
            id="storyline"
            value={game.storyline}
            rows="6"
            type="text"
            onChange={handleTextChange}
            placeholder="Tell me about the game..."
          ></textarea>
          <label className="inlineCheckbox1" htmlFor="is_Favorite">
            Favorite:
          </label>
          <fieldset className="form-group">
            <div className="row">
              <legend className="col-form-label col-sm-2 pt-0"></legend>
              <label className="form-check-label" htmlFor="is_Favorite">
              </label>
              <input
                className="form-check-input"
                id="is_favorite"
                type="checkbox"
                onChange={handleCheck}
                checked={game.is_favorite}
                value={game.is_favorite}
              />
            </div>
          </fieldset>
          <br />
          <br />
          <label className="form-check-label" htmlFor="cost">
            Cost:
          </label>
          <input
            className="form-control"
            id="cost"
            value={game.cost}
            type="number"
            min={0.01}
            onChange={handleTextChange}
            placeholder="How much you want for it"
            required
          />
          {costError && <div className="error-message">It aint free!!</div>}
          <br />
          <br />
          <button className="btn btn-primary" type="submit">
            Submit
          </button>
        </form>
        <br />
        <Link to={`/games`} className="d-block text-center">
          <button className="btn btn-secondary">Nevermind!</button>
        </Link>
      </div>
    </div>
    </div>
  );
};

export default Form;
