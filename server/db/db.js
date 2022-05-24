const express = require ('express');
const router = express.Router();

const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('./db/DataBase.db')


router.post('/insert', (req, res) => {
    console.log("\n O req e: ", req.body);
    if (req.body.email==null && req.body.nome ==null){
    db.run("INSERT INTO userTime (email, nome, time, lang, numero_chars,wpm,acc) values (?, ?, ?, ? ,? ,? ,?)",
     [req.body.Email, req.body.Nome, req.body.Time,req.body.lang,req.body.numero_chars,req.body.wpm,req.body.acc]);
    res.status(200)
    res.send("")}
   else{
    res.status(400)
    res.send("Faça login")
   }
})

router.get('/getInfo', (req, res) => {
    
    db.all("SELECT email, nome, time, lang, numero_chars,wpm,acc FROM userTime", (err, results)=> {
        if(err){
            console.log(err)
        } else{
            console.log("\n O retorno foi: ", results);
            res.send(results);
        }
    }); 
})

router.get('/getAllInfo',(req,res) =>{
    db.all("SELECT email, nome, time, lang, numero_chars,AVG(wpm) as wpm ,AVG(acc)  as acc FROM userTime GROUP BY email" , (err, results)=> {
        if(err){
            console.log(err)
        } else{
            console.log("\n O retorno foi: ", results);
            res.send(results);
        }
    }); 
})

router.post('/getInfoUser', (req, res) => {
    
    db.all("SELECT email, nome, time, lang, numero_chars,wpm,acc FROM userTime WHERE email='"+ req.body.Email +"'", (err, results)=> {
        if(err){
            console.log(err)
        } else{
            console.log("\n O retorno foi: ", results);
            res.send(results);
        }
    }); 
})



router.get('/getMedia', (req, res) => {
    
    db.all("SELECT email, nome,  AVG(time) as Media FROM userTime", (err, results)=> {
        if(err){
            console.log(err)
        } else{
            console.log("\n O retorno foi: ", results);
            res.send(results);
        }
    }); 
})


module.exports = router;