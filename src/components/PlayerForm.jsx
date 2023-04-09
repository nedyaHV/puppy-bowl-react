import React, { useState } from "react";

export const PlayerForm = (props) => {
    const {players, setPlayers} = props;
    const [dogname, setDogname] = useState("");
    const [breed, setBreed] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(dogname);
        console.log(breed)
        setDogname("")
        setBreed("")
    }
    const handleChange = (event) => {
        setDogname(event.target.value)
    }
    
    return (
        <div>
            <form onSubmit = {handleSubmit}>
                <label  htmlFor="dogname">Name</label>
                <input  type="text" name="dogname" value={dogname} onChange={handleChange} />
                <label  htmlFor="breed">Breed</label>
                <input  type="text" name="breed" value={breed} onChange={(event) => setBreed(event.target.value)}/>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}