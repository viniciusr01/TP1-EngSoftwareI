const express = require ('express');
const router = express.Router();
const loginInfo = require('./login.js');
const client = require ('../config-oidc.js');
const { TokenSet } = require('openid-client');
nonce = loginInfo.nonce;


//Salvar em Cookie
const Cookies = require ("universal-cookie");
const cookiesUser = new Cookies ();

function saveInCookie(userinfo){
    cookiesUser.set("Nome", userinfo.name, {path: "/",});
    cookiesUser.set("Email", userinfo.email, {path: "/"});
}

function getAllCookies(){
    return cookiesUser.getAll();
}
//Fim Cookie




router.post('/callback', (req, res) => {

    console.log("Callback Route Working...");
  

    const params = client.callbackParams(req);
    console.log(params);
    client.callback('http://localhost:5000/callback/', params, { nonce })
    .then(function (tokenSet) {
    
        client.userinfo(tokenSet.access_token)
        .then (function (userinfo){
            console.log("userinfo %j", userinfo); 
            saveInCookie(userinfo);
        })

        
        res.redirect('http://localhost:3000/')
        

    });
})


//Envia para o front-end informações do usuário
router.get('/info', (req, res) =>{
    const UserData = getAllCookies();
    res.send(UserData);
})


module.exports = router;