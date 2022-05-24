import React from "react";
import Navbar from "../../Components/Navbar";
import Board from "./board";



export default function Type () {

    return (
        
        <div className="Type">
            <Navbar active="leaderboard"/>
            <Board></Board>
        </div>
    )
}