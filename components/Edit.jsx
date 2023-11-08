import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const API = import.meta.env.VITE_REACT_APP_API_URL;

const EditGame = () => {
    const {id} = useParams();
    const navigate = useNavigate();

    const [nameError, setNameError] = useState(false);
    const [costError, setCostError] = useState(false);
    const [game, setGame] = useState({
        name: "",
        genres: "",
        is_favorite: false,
        storyline: "",
        video_id: "",
        image_id: "",
        cost: 0
    })

    useEffect( () => {
        const fetchedGame = async () => {
            try {
             const res = await fetch(`${API}/games/${id}`)
             if(!res.ok){
                throw new Error("failed to fetch game data")
             }
             const resJson = await res.json()
                        setGame(resJson)
                        
            } catch (error) {
                console.error(error)
            }
        };
        fetchedGame()
    }, [id])


    useEffect(() => {
        if (!game.name) {
            setNameError(true)
        } else {
            setNameError(false)
        }
        if (!game.cost) {
            setCostError(true)
        } else {
            setCostError(false)
        }
    }, [game.name, game.cost])   //ERROR FLAGS FOR NAME AND COST

    
    const handleTextChange = (event) => {
        setGame({ ...game, [event.target.id]: event.target.value })
    }

    const handleCheck = (event) => {
        setGame({ ...game, is_favorite: !game.is_favorite })
    }

    const updateGame = async () => {
        try {
            const  res =  await fetch(`${API}/games/${id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(game)
            })
            if (!res.ok) {
                console.log("something up with the Fetch")
            }
            await res.json()
            console.log("it's goood")
            navigate(`/games/${id}`)
        } catch (error) {
            console.error(error)
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        updateGame();
    };


    return (
        <div className="NewForm">
            <h3 className="header">Edit Games</h3>
            <form onSubmit={handleSubmit} className="form-group">
                <label htmlFor="name">Name:</label>
                <input
                    className='form-control'
                    id="name"
                    value={game.name}
                    type="text"
                    onChange={handleTextChange}
                    placeholder="Name of Game"
                    required
                />
                {nameError && <div className='error-message'>You Must Enter a Game title yo!</div>}
                <label htmlFor="genres">Genres:</label>
                <input
                    className='form-control'
                    id="genres"
                    value={game.genres}
                    type="text"
                    onChange={handleTextChange}
                    placeholder="Type of Game: First-Person-Shooter"

                />
                <label htmlFor="video_id">Video_id:</label>
                <input
                    className='form-control'
                    id="video_id"
                    value={game.video_id}
                    type="text"
                    onChange={handleTextChange}
                    placeholder="Video id?"

                />
                <label htmlFor="image_id">Image_id:</label>
                <input
                    className='form-control'
                    id="image_id"
                    value={game.image_id}
                    type="text"
                    onChange={handleTextChange}
                    placeholder="Image id?"

                />
                <label htmlFor="">Storyline:</label>
                <textarea
                    className='form-control'
                    id="storyline"
                    value={game.storyline}
                    type="text"
                    onChange={handleTextChange}
                    placeholder="Tell me about the game..."

                ></textarea>
                <label className="form-check-label" htmlFor="is_Favorite">Favorite:</label>
                <input
                    className='form-check-input'
                    id="is_favorite"
                    type="checkbox"
                    onChange={handleCheck}
                    checked={game.is_favorite}
                    value={game.is_favorite}
                    required
                />
                <br />
                <br />
                <label className="form-check-label" htmlFor="cost">Cost:</label>
                <input
                    className='form-control'
                    id="cost"
                    value={game.cost}
                    type="number"
                    onChange={handleTextChange}
                    placeholder="How much you want for it>"
                    required
                />
                {costError && <div className='error-message'>It aint free!!</div>}
                <br />
                <br />
                <button className="btn btn-primary" type="submit">Submit</button>
            </form>
            <br />
            <Link to={`/games`}>
                <button className="btn btn-secondary">Nevermind!</button>
            </Link>
        </div>

    )


}
export default EditGame;