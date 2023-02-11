import React, {useEffect} from 'react'

export default function EmptySlot(props){
    useEffect(()=> {
        let randSeconds = Math.ceil(Math.random()*20000)
        let timer = setTimeout(() => {
            props.setDisplayMole(true)
        }, randSeconds)

        return () => clearTimeout(timer)
    })
    return (
        <div>
            <img src='molehill.png' alt =''
            style = {{'width': '20vw'}}
            onClick = {props.handleClick}></img>
        </div>
    )
}