const express = require ('express');
const router = express.Router();

const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('./db/DataBase.db')


router.post('/insert', (req, res) => {
    console.log("\n O req e: ", req.body);

    db.run("INSERT INTO userTime (email, nome, time) values (?, ?, ?)", [req.body.Email, req.body.Nome, req.body.Time]);
    
})



router.get('/getMedia', (req, res) => {
    
    db.all("SELECT email, nome, time, AVG(time) as Media FROM userTime", (err, results)=> {
        if(err){
            console.log(err)
        } else{
            console.log("\n O retorno foi: ", results);
            res.send(results);
        }
    });
    
    
    
})


module.exports = router;