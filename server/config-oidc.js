const { Issuer } = require('openid-client');


// ATENÇÃO PARA ESSE PROCESSO, POIS ESTÁ IGNORANDO A VERIFICAÇÃO DE CERTIFICADO SSL
process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0;


/*
const googleIssuer = Issuer.discover('https://accounts.google.com/.well-known/openid-configuration');
console.log('Discovered issuer %s %O', googleIssuer.issuer, googleIssuer.metadata);
*/

configIssuer = {
    issuer: "https://accounts.google.com",
    authorization_endpoint:"https://accounts.google.com/o/oauth2/v2/auth",
    token_endpoint:"https://oauth2.googleapis.com/token",
    jwks_uri: "https://www.googleapis.com/oauth2/v3/certs",
    userinfo_endpoint: "https://openidconnect.googleapis.com/v1/userinfo",
    revocation_endpoint: "https://oauth2.googleapis.com/revoke",
  
}

var googleIssuer = new Issuer (configIssuer);

//introspection_endpoint: "https://localhost:9443/oauth2/introspect",
//end_session_endpoint: "https://localhost:9443/oidc/logout",


const client = new googleIssuer.Client({

    client_id: '722686295683-bbkno9sdei820d6ippqnu8n7ftue2mc6.apps.googleusercontent.com',
    client_secret: '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',
    redirect_uris: ['http://localhost:5000/callback/'],
    response_types: ['code'],

    });

module.exports = client;
