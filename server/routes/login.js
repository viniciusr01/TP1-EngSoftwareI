const express = require ('express');
const router = express.Router();
const client = require ('../config-oidc.js');
const {generators} = require('openid-client');
const nonce = generators.nonce();


const urlLogin = client.authorizationUrl({
    scope: "openid profile email",
    response_mode: 'form_post',
    nonce,
});


router.get('/login', (req, res) => {

    console.log(urlLogin);
    res.send(urlLogin);
})


const loginInfo = {
    urlLogin: urlLogin,
    nonce: nonce,
    router: router,
}

module.exports = loginInfo;