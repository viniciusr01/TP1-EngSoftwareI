const express = require ('express')
const bodyParser = require ('body-parser')
const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', (req,res) => {
    res.send("It's working...")

})


const login = require ('./routes/login');
app.use(login.router);

const callback = require ('./routes/callback');
app.use(callback);



app.listen(5000, 'localhost', () => console.log('Servidor Rodando'))
