import React from "react";
import axios from 'axios';

import Navbar from "../../Components/Navbar"
import SecundaryLogo from "../../Assets/SecondaryLogo.png"

import "./style.css"

//Cookie
import Cookies from "universal-cookie";
const cookies = new Cookies ();


axios
  .get('/info')
  .then(info => {
    console.log(info.data);
    cookies.set("Nome", info.data.Nome, {path: "/",});
    cookies.set("Email", info.data.Email, {path: "/"});
})


export default function Home () {
    return (
        <div>
            <Navbar active='home'/>
            <div className="homeBody">
                <a className="leftColumn" href='/'>
                    <img
                        className="SecundaryLogo"
                        src={SecundaryLogo} 
                        alt="Secundary Logo"
                    />
                </a>
                <div className="rightColumn">
                    <h1>typ.io</h1>
                    <h2>Improve your pace when writing code!</h2>
                    <p >Train your speed and accuracy in languages like JavaScript, Python, Java and C++.</p>
                </div>
            </div>
        </div>
    )
}