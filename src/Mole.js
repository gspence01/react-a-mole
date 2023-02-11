import React, {useEffect} from 'react'

export default function Mole(props){

    useEffect(()=> {
        let randSeconds = Math.ceil(Math.random()*5000)
        let timer = setTimeout(() => {
            props.setDisplayMole(false)
        }, randSeconds)

        return () => clearTimeout(timer)
    })

    return (
        <div>
            <img src='mole.png' alt='mole'
            style = {{'width': '20vw'}}
            onClick={props.handleClick}></img>
        </div>
    )
}