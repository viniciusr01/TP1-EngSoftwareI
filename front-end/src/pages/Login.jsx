import React from 'react';
import axios from 'axios';



function login () {

  axios
  .get('/login')
  .then(url_login => {
    console.log(url_login.data);
    window.location.href = url_login.data 
  })
}



class Home extends React.Component {

    
    render (){
    return login();

    }
};
export default Home