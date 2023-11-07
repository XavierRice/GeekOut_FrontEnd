import { useEffect, useState } from "react";
import Game from "./Game.jsx";


const API = import.meta.env.VITE_REACT_APP_API_URL;

function Games() {


    const [games, setGames] = useState([])

    const fetchedGames = async () => {
        try {
            const res = await fetch(`${API}/games`)
            if (!res.ok) {
                throw new Error("Network is not netWorkin'")
            }
            const resJson = await res.json()
            console.log(resJson)
            setGames(resJson)
        } catch (err) {
            console.error(`There was an error in the fetch.`, err)
        }
    }

    useEffect(() => {
        fetchedGames()
    }, [])


    return (
        <div className="Games">
            <section>
                <table className="table-stripe table-hover">
                    <thead>
                        <tr>
                           <h3>Gaming Section</h3> 
                        </tr>
                    </thead>
                    <tbody>
                        {games.map((game) => {
                            return <Game key={game.id} game={game} />;
                        })}
                    </tbody>
                </table>
            </section>
        </div>
    );

};

export default Games;