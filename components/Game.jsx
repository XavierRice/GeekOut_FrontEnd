import { Link } from "react-router-dom";


const API = import.meta.env.VITE_REACT_APP_API_URL;


export default function Game({ game }) {


    return (

        <div className="card" style={"width: 18rem"}>
            {imgage_id ? (<img class="card-img-top" src="..." alt="Card image cap" />) : (<span>&nbsp; &nbsp; &nbsp;</span>)}
            <div className="card-body">
                <h3>{game.name}</h3>
                <td>
                    {game.is_favorite ? (
                        <span><h3>👾</h3></span>
                    ) : (
                        <span>&nbsp; &nbsp; &nbsp;</span>
                    )}
                </td>
            </div>
            <div className="btn btn-primary">
                <Link to={`/games/${game.id}`}> {game.name}</Link>
            </div>
        </div>
    )

}

