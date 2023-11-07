import { useState, useEffect } from "react";



export default function TwitchGame(){

    // const corsAnywhereUrl = 'https://cors-anywhere.herokuapp.com/';
    // const apiUrl = 'https://api.igdb.com/v4/games';

    const [fetchedGames, setFetchedGames] = useState([])
    const [ fetchedGame, setFetchedGame] = useState({})

    // const fetchTwitch = async () => {
    //     try {
    //        const response = await fetch(
    //             corsAnywhereUrl + apiUrl,
    //             {
    //                 method: 'POST',
    //                 headers: {
    //                     'Accept': 'application/json',
    //                     'Client-ID': 'hzlg3b9xioct6lm1l98yjemtkxkllk',
    //                     'Authorization': 'Bearer gpay0ik0jcx7e0bo1s73020amep4yb',
    //                 },
    //                 body: JSON.stringify({
    //                     fields: "name, cover, genres, screenshots, storyline, videos",
    //                     where: {
    //                         name: "God of War2"
    //                     }
    //                 })
    //             }
    //         );
    //                 if(!response.ok){
    //                     throw new Error("Network isnt net working")
    //                 }
    //                 const resJson = await response.json()
    //                 console.log(resJson)
    //                 setTwitchGame(resJson)
    //     } catch (error) {
    //         console.error("Error Fetching", error)
    //     }
    // }

    // useEffect(() => {

    //     fetchTwitch()

    // }, [])

    const fetchRAWG = async () => {
        const RAWGKEY = import.meta.env.VITE_REACT_APP_API_RAWG_URL
        try{
            const response = await fetch(`https://api.rawg.io/api/games?fields=name&key=${RAWGKEY}`)
            if(!response.ok){
                console.error("Sometings wrong with Fetch Resp:", error)
            }else{
               const resJson = await response.json()
               console.log(resJson)
               setFetchedGames(resJson)
            }
        }catch(error){
            console.log("Error Fetching:", error)
        }
    }

    useEffect(() => {

        fetchRAWG()

    }, [])

   
    let game = "Tomb Raider"
    
    function gameChanger(game){
        const dashedGame = game.replace(/ /g, '-') // regex expression g flag for all spaces
        return dashedGame
    }
    
    const rawgByName = async () => {
        gameChanger(game)
        const RAWGKEY = import.meta.env.VITE_REACT_APP_API_RAWG_URL
        try{
            const res = await fetch(`https://api.rawg.io/api/games?search=${dashedGame}&key=${RAWGKEY}`)
            if(!res.ok){
                console.error("Somethings wrong with the naming fetch")
            }else{
                const resJson = await res.json()
                console.log(resJson)
                setFetchedGame(resJson)
            }
        }catch(err){
            console.log(err)
        }
    }

    useEffect(()=>{
        rawgByName()
    }, [game])



    console.log(fetchedGame)
     const rawgGameArr = fetchedGames.results
 return(
    <>
    {/* {rawgGameArr.map(game => (
        <div key={game.id}>
            <h2>{game.name}</h2>
        </div>
    ))} */}
    
</>
 )
 

}
