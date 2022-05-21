import React from "react";
import axios from "axios";

import Navbar from "../../Components/Navbar";
import Button from "../../Components/Button";
import SecondaryLogo from "../../Assets/SecondaryLogo3x3.png"

import "./style.css"

export default function Login () {

    function loginReq () {
        axios
        .get('/login')
        .then(url_login => {
        console.log(url_login.data);
        window.location.href = url_login.data 
        })
    }

    return (
        <div>
            <Navbar active="login"/>
            <div className="loginBody">
                <div className="leftColumn">
                    <h1>Login</h1>
                    <h2>To log in, click in the button bellow and use your Google Account</h2>
                    <Button function={loginReq} text="Login"/>
                </div>
                <div className="rightColumn">
                    <img src={SecondaryLogo} alt="secondary logo"/>
                </div>
            </div>
        </div>
    )
}