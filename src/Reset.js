import React from "react";

export default function Reset(props){
    const handleClick = () =>{
        props.setScore(0)
        props.setMissed(0)
    }
    return (
        <div>
            <button 
            onClick = {handleClick}>Reset Game</button>
        </div>
    )

}