import React, {useState, useEffect} from "react";
import Navbar from "../../Components/Navbar";

import "./style.css"

import axios from 'axios';
import Cookies from "universal-cookie";
const cookies = new Cookies ();




export default function Profile () {
    
    function getInfoUser() {
    
        const infoCookie = cookies.getAll();
    
        axios
        .post('/getInfoUser',{
            Email: infoCookie.Email,
          })
        .then(function (response){
        //   console.log(response.data);
          calcAverage(response.data);
          
        })
        .catch(function(error){
            console.log(error);
        })
      
    }
    getInfoUser();
    
    //const infoCookie = cookies.getAll();
    //setName = infoCookie.Nome;
    //setEmail = infoCookie.Email;

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const [average, setAverage] = useState(0);
    const [max, setMax] = useState(0);

    function calcAverage (data) {
        let wpmWithNull = data.map(a => a.wpm)
        let wpm = wpmWithNull.filter(n => n)

        let Max = Math.max(...wpm)
        setMax(Number(Max).toFixed(2))

        let sum = wpm.reduce((a,b) => a+b, 0) / wpm.length
        setAverage(Number(sum).toFixed(2))
    }

    useEffect(() => {

        const infoCookie = cookies.getAll();

        setName(infoCookie.Nome);
        setEmail(infoCookie.Email);
    
      
    }, [])
    

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
                    {/* <div className="today">
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
                    </div> */}
                    <div className="all-time">
                        <h1><span className="blue">all-time</span> stats</h1>
                        <ul className="estimatorList">
                            <li>
                                <ul className="estimator">
                                    <li className="title">average speed</li>
                                    <li className="value">{average}</li>
                                    <li>wpm</li>
                                </ul>
                            </li>
                            <li>
                                <ul className="estimator">
                                    <li className="title">record speed</li>
                                    <li className="value">{max}</li>
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