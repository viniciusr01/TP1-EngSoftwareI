const express = require ('express');
const bodyParser = require ('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//Banco de Dados
const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('./db/DataBase.db')
db.run("CREATE TABLE IF NOT EXISTS userTime (email TEXT, nome TEXT, time NUMBER)")



app.get('/', (req,res) => {
    res.send("It's working...")

})


const login = require ('./routes/login');
app.use(login.router);

const callback = require ('./routes/callback');
app.use(callback);

const dataBase = require('./db/db');
app.use(dataBase);


app.listen(5000, 'localhost', () => console.log('Servidor Rodando'))
