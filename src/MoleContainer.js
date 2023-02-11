import React, {useState} from "react";
import Mole from "./Mole";
import EmptySlot from "./EmptySlot";

export default function MoleContainer(props){
    let [displayMole, setDisplayMole] = useState(false)

    const handleClick = () => {
        if(displayMole){
            setDisplayMole(false)
            props.setScore(props.score + 1)
        }
        else{
            props.setMissed(props.missed + 1)
        }
    }


    const setMole = () => {
        return(
            displayMole ? <Mole 
            handleClick = {handleClick}
            setDisplayMole = {setDisplayMole}/>
            : <EmptySlot 
            setDisplayMole = {setDisplayMole}
            handleClick = {handleClick}/>
        )
    }
    
    
    
    return (
        <div className='grid-item'>
            {setMole()}
        </div>
    )
}