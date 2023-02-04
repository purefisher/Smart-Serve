
const express = require('express');
const app = express();
var mysql = require('mysql2');
const dotenv = require('dotenv');
const bcrypt = require("bcryptjs");
const {spawn} = require('child_process');


app.use(express.urlencoded({extended: 'false'}))
app.use(express.json())

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'smart_serve',
    port: 3306

})

const PORT = process.env.PORT || 3002;

db.connect((error) => {
    if(error) {
        console.log(error)
    } else {
        console.log("MySQL connected!")
    }
});



app.post("/login", function(req, res){
        db.query('SELECT * FROM smart_serve.login WHERE name = ? AND password = ?;', [req.body.username, req.body.password],  (error, result) => {
            if(result.length > 0){
                if(result[0].admin_credentials){
                    res.send({admin:true})
                }
                else{
                    res.send({login:true})
                }
                
            } 
            else{
                res.send({login:false})
            }      
        });
  });

app.post("/user", (req, res) => {
    db.query('SELECT * FROM smart_serve.login WHERE name = ?;', [req.body.username],  (error, result) => {
        if(result.length < 1 && req.body.username != '' && req.body.password != ''){
            db.query('INSERT INTO smart_serve.login VALUES(?, ?, 0);', [req.body.username, req.body.password], (error, result_2) => {
                console.log("Inserted Into Database")  
                res.send({login:true})      
            });
            }  
    } 
    )
    });
app.post("/order", (req,res) => {
    const process = spawn('python', ['main.py', "40,1","37,2"]);
    // collect data from script
    process.stdout.on('data', function(data) {
        console.log(data.toString())
    } )
    db.query('INSERT INTO smart_serve.orders VALUES(?, ?, NOW());', [req.body.drinkName, req.body.username], (error, result_2) => {
        console.log('Drink Ordered') 
    });


})    

app.listen(PORT, () => {
console.log(`Server listening on ${PORT}`);
});
// app.listen(PORT, () => {
//   console.log(`Server listening on ${PORT}`);
// });