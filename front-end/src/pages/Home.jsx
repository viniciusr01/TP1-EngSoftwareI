import React from 'react';
import axios from 'axios';



function login () {

  axios
  .get('/login')
  .then(url_login => {
    console.log(url_login.data);
    //window.location.href = url_login.data 
  })
}



class Home extends React.Component {

    
    render (){
    return (
        <div className="App-header">
            <h1> TYP.IO </h1>

            <button
              className = "button-login"
              onClick = {login}
              >
                Login
             </button>

        </div>
        
    )

    }
};

export default Home;