
const express = require ('express')
const bodyParser = require ('body-parser')

const app = require('./config/express-config');
const cors = require('cors');


let corsOptions = {
    origin: [ 'http://localhost:5000', 'http://localhost:3000' ]
};

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', (req,res) => {
    res.send("It's working...")

})
app.use(cors({origin: 'http://localhost:3000'}));

const login = require ('./routes/login');
app.use(login.router);

const callback = require ('./routes/callback');
app.use(callback);

app.get('/randomSample',cors(corsOptions),(req,res)=>{
let id = req.headers.id
let json = require('./samples/c.json');
// console.log(json)  
res.send(json[id]);
})

app.listen(5000, 'localhost', () => console.log('Servidor Rodando'))
