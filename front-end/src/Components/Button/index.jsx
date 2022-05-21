import React from "react";
import "./style.css"
import axios from 'axios';




export default function Button (props) {


    function login () {

        axios
        .get('/login')
        .then(url_login => {
        console.log(url_login.data);
        window.location.href = url_login.data 
        })
    }

    return(
        <button onClick={()=>login()} className='Button'>
            {props.text}
        </button>
    )
}