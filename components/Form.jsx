import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const API = import.meta.env.VITE_REACT_APP_API_URL;

const Form = () => {
  const navigate = useNavigate();
  const [nameError, setNameError] = useState(false);
  const [costError, setCostError] = useState(false);
  const [game, setGame] = useState({
    name: "",
    genres: "",
    is_favorite: null,
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
  }, [game.name, game.cost]); //ERROR FLAGS FOR NAME AND COST

  const handleTextChange = (event) => {
    setGame({ ...game, [event.target.id]: event.target.value });
  };

  const handleFavRadio = (event) =>{
    let value = event.target.value
    value = value === "True" ? true : false
    setGame({ ...game, [event.target.id]: value });

  }
  
  const addGame = () => {
      try {
          const res = fetch(`${API}/games`, {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(game),
            });
            if (!res.ok) {
                throw new Error("your post ain't postin daddy!");
            } else {
                const newGame = res.json();
                newForm.id ? navigate(`/games/${newGame.id}`) : navigate(`/games`);
            }
        } catch (err) {
            console.error(err);
        }
    };
    
    const handleSubmit = (event) => {
        event.preventDefault();
        addGame();
    };
    
    return (
        <div className="NewForm">
      <h3 className="header">New Games</h3>
      <form onSubmit={handleSubmit} className="form-group mx-auto">
        <label htmlFor="name">Name:</label>
        <input
          className="form-control"
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
        <label htmlFor="genres">Genres:</label>
        <input
          className="form-control"
          id="genres"
          value={game.genres}
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
          id="storyline"
          value={game.storyline}
          type="text"
          onChange={handleTextChange}
          placeholder="Tell me about the game..."
          ></textarea>
        <label className="inlineCheckbox1" htmlFor="is_Favorite">
          Favorite:
        </label>
        <fieldset className="form-group">
          <div className="row">
            <legend class="col-form-label col-sm-2 pt-0"></legend>
            <div className="col-sm-10">
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  className="gridRadios"
                  id="favoriteTrue"
                  name="is_favorite"
                  value="True"
                  onChange={handleFavRadio}
                  ></input>
                <label class="form-check-label" htmlForfor="favoriteTrue">
                  A FAVE!
                </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  classNameame="gridRadios"
                  id="favoriteFalse"
                  name="is_favorite"
                  value="False"

                  onChange={handleFavRadio}
                  ></input>
                <label class="form-check-label" htmlForfor="favoriteFalse">
                  meh
                </label>
              </div>
            </div>
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
  );
};

export default Form;

