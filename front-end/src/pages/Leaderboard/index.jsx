import React from "react";
import Navbar from "../../Components/Navbar";


import axios from 'axios';


function getTime() {

  axios
  .get('/getMedia')
  .then(function (response){
    console.log(response.data);
  })
  .catch(function(error){
      console.log(error);
  })

}


export default function Leaderboard () {
    getTime();
    return (
        <div className="Leaderboard">
            <Navbar active="leaderboard"/>
        </div>
    )
}