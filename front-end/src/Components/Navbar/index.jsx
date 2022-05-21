import React from "react";
import "./style.css";
import Navitem from "../Navitem";


/*
    Quando for declarar a Navbar, colocar um prop chamado
    active com um dos seguintes parametros dependendo da página

    active='home'
    active='type'
    active='stats'
    active='leaderboard'
    active='settings'
    active='login'
*/


export default function Navbar (props) {

    function isThisActive (name) {
        if (props.active === name) {
            return 'active'
        }
        else {
            return 'inactive'
        }
    }

    return (
        <nav className="Navbar">
            <a href="/" className="siteTitle">
                typ.io
            </a>
            <ul className="Navbar-nav">
                <Navitem
                    name='home'
                    href=''
                    active={isThisActive('home')}/>

                <Navitem 
                    name="let's type" 
                    href='practice' 
                    active={isThisActive('type')}/>

                <Navitem 
                    name='stats' 
                    href='stats' 
                    active={isThisActive('stats')}/>

                <Navitem 
                    name='leaderboard'
                    href='leaderboard'
                    active={isThisActive('leaderboard')}/>

                <Navitem
                    name='settings'
                    href='settings'
                    active={isThisActive('settings')}/>

                <Navitem
                    name='login'
                    href='login'
                    active={isThisActive('login')}/>
            </ul>
        </nav>
    ) 
}