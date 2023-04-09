import React from "react";
import { fetchAllPlayers } from "./APIFetch";

export const PlayerList = (props) => {
   const {players, setPlayers} = props;
    
   return (
    <div>
        <table>
            <tr>
                <th>Id</th>
                <th>Doggo</th>
                <th>Photo</th>
            </tr>
            <tbody>
            <tr>
                <td>{players.name}</td>
                <td>{players.id}</td>
                <td><img src={players.imageUrl} /></td>
            </tr>
            </tbody>
        </table>
    </div>
   )
}

        