import React, {useState, useEffect} from "react";
import  { fetchAllPlayers } from "./APIFetch";
import { PlayerForm } from "./PlayerForm";
import { PlayerList } from "./PlayerList";
import "./style.css";


const Main = () => {
    const [players, setPlayers] = useState([]);

    useEffect(() => {
        const getPlayers = async () => {
            try {
                const response = await fetch(`https://fsa-puppy-bowl.herokuapp.com/api/2303-FTB-ET-WEB-FT-REACT/Players`)
                const data = await response.json();

                    setPlayers(data);
            } catch (error) {
                console.error(error);
            }
        }
        getPlayers();
}, [players]);

return (
    <>
    <div> <PlayerForm players={players} setPlayers={setPlayers} /> </div>
    <div> <PlayerList players={players} setPlayers={setPlayers} /> </div>
    </>
)
}

export default Main;