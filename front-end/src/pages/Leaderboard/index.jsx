import React from "react";
import Navbar from "../../Components/Navbar";
import axios from 'axios';
import Board from "./board";



export default function Type () {

    // InsertInfoDB(70);
    return (
        
        <div className="Type">
            <Navbar active="leaderboard"/>
            <Board></Board>
        </div>
    )
}