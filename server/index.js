const app = require('./config/express-config');


app.get('/', (req,res) => {
    res.send("It's working...")

})


//Rota de Login [Vinicius]
app.get('/login', (req, res) => {

    console.log("Login Route Working...");
    res.send("Login Route Working...");
})



app.listen(5000, 'localhost', () => console.log('Servidor Rodando'))
