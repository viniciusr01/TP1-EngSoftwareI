const express = require ('express');
const router = express.Router();
const loginInfo = require('./login.js');
const client = require ('../config-oidc.js');
const { TokenSet } = require('openid-client');


nonce = loginInfo.nonce;




router.post('/callback', (req, res) => {

    console.log("Callback Route Working...");
  

    const params = client.callbackParams(req);
    console.log(params);
    client.callback('http://localhost:5000/callback/', params, { nonce })
    .then(function (tokenSet) {
        console.log('received and validated tokens %j', tokenSet);
        console.log('validated ID Token claims %j', tokenSet.claims());


        client.userinfo(tokenSet.access_token)
        .then (function (userinfo){
            console.log("userinfo %j", userinfo);  
        })

    
    res.send("Callback Route Working...");

    });
})


module.exports = router;