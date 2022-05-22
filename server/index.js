<<<<<<< HEAD
const express = require ('express');
const bodyParser = require ('body-parser');
const app = express();

=======
var express = require('express')
const bodyParser = require ('body-parser')

const app = require('./config/express-config');
const cors = require('cors');


let corsOptions = {
    origin: [ 'http://localhost:5000', 'http://localhost:3000' ]
};

>>>>>>> typeboard
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//Banco de Dados
const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('./db/DataBase.db')
db.run("CREATE TABLE IF NOT EXISTS userTime (email TEXT, nome TEXT, time NUMBER)")



app.get('/', (req,res) => {
    res.send("It's working...")

})
app.use(cors({origin: 'http://localhost:3000'}));

const login = require ('./routes/login');
app.use(login.router);

const callback = require ('./routes/callback');
app.use(callback);

<<<<<<< HEAD
const dataBase = require('./db/db');
app.use(dataBase);
=======
app.get('/randomSample',cors(corsOptions),(req,res)=>{
    
let lang = req.headers.lang
let id = req.headers.id
>>>>>>> typeboard

let json = require('./samples/'+lang+'.json');
console.log(json[id])
res.send(json[id]);

})

app.listen(5000, 'localhost', () => console.log('Servidor Rodando'))
