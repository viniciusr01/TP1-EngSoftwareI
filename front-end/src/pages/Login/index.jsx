import React from "react";

import Navbar from "../../Components/Navbar";
import Button from "../../Components/Button";
import SecondaryLogo from "../../Assets/SecondaryLogo3x3.png"

import "./style.css"

export default function Login () {
    return (
        <div>
            <Navbar active="login"/>
            <div className="loginBody">
                <div className="leftColumn">
                    <h1>Login</h1>
                    <h2>Para realizar o login, clique no botão abaixo para entrar com a sua conta Google</h2>
                    <Button text="login"/>
                </div>
                <div className="rightColumn">
                    <img src={SecondaryLogo} alt="secondary logo"/>
                </div>
            </div>
        </div>
    )
}