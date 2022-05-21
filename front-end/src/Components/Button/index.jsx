import React from "react";
import "./style.css"




export default function Button (props) {
    

    return(
        <button onClick={props.function} className='Button'>
            {props.text}
        </button>
    )
}