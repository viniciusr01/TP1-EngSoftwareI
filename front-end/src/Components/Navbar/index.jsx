import React from "react";
import "./style.css";
import Navitem from "../Navitem";

import Cookies from 'universal-cookie';

const cookies = new Cookies();




/*
    Quando for declarar a Navbar, colocar um prop chamado
    active com um dos seguintes parametros dependendo da página

    active='home'
    active='type'
    active='stats'
    active='leaderboard'
    active='settings'
    active='login'
    active='logout'
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

    function isLoggedIn() {
        const email = cookies.get("Email");
        if (email === "Undefined" || email === "undefined")
            return false;
        else
            return true;


    }
    return (
        <nav className="Navbar">
            <a href="/" className="siteTitle">
                typ.io
            </a>
            <ul className="Navbar-nav">
                {isLoggedIn() ? 
                    <>
                        <Navitem
                            name='home'
                            href=''
                            active={isThisActive('home')}/>
        
                        <Navitem 
                            name="let's type" 
                            href='type' 
                            active={isThisActive('type')}/>
        
                        <Navitem 
                            name='profile' 
                            href='profile' 
                            active={isThisActive('profile')}/>
        
                        <Navitem 
                            name='leaderboard'
                            href='leaderboard'
                            active={isThisActive('leaderboard')}/>
        
                        <Navitem
                            name='logout'
                            href='logout'
                            active={isThisActive('logout')}/>
                    
                    </> :
                    <>
                        <Navitem
                            name='home'
                            href=''
                            active={isThisActive('home')}/>
                        <Navitem
                            name='login'
                            href='login'
                            active={isThisActive('login')}/>
                    </>}
            </ul>
        </nav>
    ) 
}