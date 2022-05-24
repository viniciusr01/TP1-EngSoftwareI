import React from "react";
import Navbar from "../../Components/Navbar";
import axios from 'axios';
import TypeBoard from "../../Components/Typeboard";


//Cookie
import Cookies from "universal-cookie";
const cookies = new Cookies ();


// function InsertInfoDB(tempoDigitacao) {

//   const infoCookie = cookies.getAll();

//   axios
//   .post('/insert', {
//     Nome: infoCookie.Nome,
//     Email: infoCookie.Email,
//     Time: tempoDigitacao
//   })
//   .then(function (response){
//     console.log(response);
//   })
//   .catch(function(error){
//       console.log(error);
//   })

// }


export default function Type () {

    // InsertInfoDB(70);
    return (
        
        <div className="Type">
            <Navbar active="type"/>
            <TypeBoard />
        </div>
    )
}