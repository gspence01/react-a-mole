import React, {useState} from "react";

export default function Pause(){
    let [isPaused, setIsPaused] = useState(false)
    const handleClick = () => {
        isPaused ? setIsPaused(false) : setIsPaused(true)
    }
    return (
        isPaused ? <button onClick={handleClick}>Play</button> : <button onClick={handleClick}>Pause</button>
    )
}