const express = require('express');
const app = express();
var mysql = require('mysql2');
const dotenv = require('dotenv');
const bcrypt = require("bcryptjs");

dotenv.config({path: 'C:\Users\Pminb\Desktop\Smart-Serve\src\react-web-app\database.env'})

app.use(express.urlencoded({extended: 'false'}))
app.use(express.json())

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '12345!',
    database: 'smart_serve',
    port: 3001

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
        console.log(req.body.username)
        console.log(req.body.password)
        db.query('SELECT * FROM smart_serve.login WHERE name = ? AND password = ?;', [req.body.username, req.body.password],  (error, result) => {
            if(result.length > 0){
                res.send({login:true})
                
            } 
            else{
                res.send({login:false})
            }      
        });
    console.log('Finished')
  });

app.post("/user", (req, res) => {
    db.query('INSERT * FROM smart_serve.login', async (error, res) => {
        console.log(req.body)        
    });
// res.json({ message: });
});

app.listen(PORT, () => {
console.log(`Server listening on ${PORT}`);
});
// app.listen(PORT, () => {
//   console.log(`Server listening on ${PORT}`);
// });