import React, {useState} from "react";
import Navbar from "../../Components/Navbar";

import "./style.css"

import axios from 'axios';
import Cookies from "universal-cookie";
const cookies = new Cookies ();

function getInfoUser() {

    const infoCookie = cookies.getAll();

    axios
    .post('/getInfoUser',{
        Email: infoCookie.Email,
      })
    .then(function (response){
      console.log("As info user são: ", response.data);
      
    })
    .catch(function(error){
        console.log(error);
    })
  
}



export default function Profile () {
    
    getInfoUser();
    
    //const infoCookie = cookies.getAll();
    //setName = infoCookie.Nome;
    //setEmail = infoCookie.Email;

    const [name, setName] = useState("Kleber Bambam");

    const [email, setEmail] = useState("kleber.bambam84@yahoo.com.br");

    return (
        <div className="Profile">
            <Navbar active="profile"/>
            <div className="profileBody">
                <div className="picture">
                    <img src='' alt='profilePicture'></img>
                    <h1>{name}</h1>
                    <h2>{email}</h2>

                </div>
                <div className="stats">
                    <div className="today">
                        <h1><span className="blue">today</span> stats</h1>
                        <ul className="estimatorList">
                            <li>
                                <ul className="estimator">
                                    <li className="title">average speed</li>
                                    <li className="value">98</li>
                                    <li>wpm</li>
                                </ul>
                            </li>
                            <li>
                                <ul className="estimator">
                                    <li className="title" >record speed</li>
                                    <li className="value">112</li>
                                    <li>wpm</li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div className="all-time">
                        <h1><span className="blue">all-time</span> stats</h1>
                        <ul className="estimatorList">
                            <li>
                                <ul className="estimator">
                                    <li className="title">average speed</li>
                                    <li className="value">94</li>
                                    <li>wpm</li>
                                </ul>
                            </li>
                            <li>
                                <ul className="estimator">
                                    <li className="title">record speed</li>
                                    <li className="value">105</li>
                                    <li>wpm</li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}