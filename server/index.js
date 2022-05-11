const app = require('./config/express-config');
const cors = require('cors');

let corsOptions = {
    origin: [ 'http://localhost:5000', 'http://localhost:3000' ]
};

app.get('/', (req,res) => {
    res.send("It's working...")

})
app.use(cors({origin: 'http://localhost:3000'}));

//Rota de Login [Vinicius]
app.get('/login', (req, res) => {

    console.log("Login Route Working...");
    res.send("Login Route Working...");
})

app.get('/randomSample',cors(corsOptions),(req,res)=>{
let id = req.headers.id
let json = require('./samples/c.json');
// console.log(json)  
res.send(json[id]);
})

app.listen(5000, 'localhost', () => console.log('Servidor Rodando'))
