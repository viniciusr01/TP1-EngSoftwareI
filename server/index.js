const app = require('./config/express-config');

app.get('/', (req,res) => {
    res.send('Hello World!')

})

app.listen(3000, 'localhost', () => console.log('Servidor Rodando'))
