
const express = require('express');
const app = express();
var mysql = require('mysql2');
const dotenv = require('dotenv');
const bcrypt = require("bcryptjs");
const {spawn} = require('child_process');


app.use(express.urlencoded({extended: 'false'}))
app.use(express.json())

const db = mysql.createConnection({
    host: '127.0.0.1',
    user: 'bartender',
    password: 'password',
    database: 'smart_serve'
}
);

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
            console.log(result)
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
    db.query('SELECT pump FROM ingredients WHERE ingredient_name IN(?,?,?,?);', [req.body.drink.ingredients.IG1.name, req.body.drink.ingredients.IG2.name, req.body.drink.ingredients.IG3.name, req.body.drink.ingredients.IG4.name], (error, result) => {
        const arr = ['main.py']
        for(i=0; i < result.length; i++){
            str = (result[i].pump)
            str = str.toString()
            arr.push(
                str+",1"
            )
        }
        console.log(arr) 

        const process = spawn('python', arr);
        // collect data from script
        process.stdout.on('data', function(data) {
            console.log(data.toString())
        } )
        
    });

    db.query('INSERT INTO smart_serve.orders VALUES(?, ?, NOW());', [req.body.drink.name, req.body.username], (error, result_2) => {
        console.log(error)
	console.log('Drink Ordered') 
    });
    for (var i=1; i < Object.keys(req.body.drink.ingredients).length+1; i++){
        ingredientName = req.body.drink.ingredients['IG'+i].name
        ingredientAmount = req.body.drink.ingredients['IG'+i].amount
        if(ingredientName != null){
            db.query('UPDATE smart_serve.ingredients SET amount=amount-? WHERE ingredient_name=?;', [ingredientAmount, ingredientName], (error, result_2) => {});
        }
    }
});    

app.post("/check", async function(req,res) {
    var count = Object.keys(req.body.drink.ingredients).filter(drink => req.body.drink.ingredients[drink].name != null).length
        db.query('SELECT * FROM smart_serve.ingredients WHERE (ingredient_name=? AND amount>?) OR (ingredient_name=? AND amount>?) OR (ingredient_name=? AND amount>?) OR (ingredient_name=? AND amount>?);', [req.body.drink.ingredients.IG1.name, req.body.drink.ingredients.IG1.amount,req.body.drink.ingredients.IG2.name, req.body.drink.ingredients.IG2.amount,req.body.drink.ingredients.IG3.name, req.body.drink.ingredients.IG3.amount,req.body.drink.ingredients.IG4.name, req.body.drink.ingredients.IG4.amount],  (error, result) => {
            if(result.length == count){
                console.log(req.body.drink)
                res.send({availability:true})
            }
            else{
                
                res.send({availability:false})
            }
        });

});

app.post("/ingredients", (req, res) => {
    console.log(req.body)
    db.query('DELETE FROM smart_serve.ingredients', [], (error, result) => {
    });
    db.query('INSERT INTO smart_serve.ingredients VALUES (?, ?, 13), (?, ?, 15), (?, ?, 19), (?, ?, 37), (?, ?, 40);',[req.body.ingredients.ing1, req.body.ingredients.vol1, req.body.ingredients.ing2, req.body.ingredients.vol2,req.body.ingredients.ing3, req.body.ingredients.vol3,req.body.ingredients.ing4, req.body.ingredients.vol4,req.body.ingredients.ing5, req.body.ingredients.vol5], (error, result) => {
        res.send({done:true})
     })
})

app.listen(PORT, () => {
console.log(`Server listening on ${PORT}`);
});
// app.listen(PORT, () => {
//   console.log(`Server listening on ${PORT}`);
// });
