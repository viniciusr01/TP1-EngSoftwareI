import React from "react";
import Navbar from "../../Components/Navbar";
import TypeBoard from "../../Components/Typeboard";


//Cookie
import Cookies from "universal-cookie";
const cookies = new Cookies ();



export default function Type () {

   
    return (
        
        <div className="Type">
            <Navbar active="type"/>
            <TypeBoard />
        </div>
    )
}