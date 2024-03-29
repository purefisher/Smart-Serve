
const express = require('express');
const app = express();
var mysql = require('mysql2');
const dotenv = require('dotenv');
const bcrypt = require("bcryptjs");
const { spawn } = require('child_process');
const cors = require('cors')

const http = require('http').createServer(app);
const io = require('socket.io')(http , {
  cors: {
    origin: '*',
    methods: ['GET', 'POST'],
  },
})
const allClients = []


app.use(express.urlencoded({ extended: 'false' }))
app.use(express.json())
app.use(cors())

console.log("starting")


const db = mysql.createConnection({
    host: '127.0.0.1',
    user: 'bartender',
    password: 'password',
    database: 'smart_serve'

});

const PORT = process.env.PORT || 3002;
const queue = [];
let isMaking = false

db.connect((error) => {
    if (error) {
        console.log(error)
    } else {
        console.log("MySQL connected!")
    }
});


app.post("/login", function (req, res) {
    db.query('SELECT * FROM smart_serve.login WHERE name = ? AND password = ?;', [req.body.username, req.body.password], (error, result) => {
        if (result.length > 0) {
            if (result[0].admin_credentials) {
                res.send({ admin: true })
            }
            else {
                res.send({ login: true })
            }

        }
        else {
            res.send({ login: false })
        }
    });
});

app.post("/user", (req, res) => {
    db.query('SELECT * FROM smart_serve.login WHERE name = ?;', [req.body.username], (error, result) => {
        if (result.length < 1 && req.body.username != '' && req.body.password != '') {
            db.query('INSERT INTO smart_serve.login VALUES(?, ?, 0);', [req.body.username, req.body.password], (error, result_2) => {
                console.log("Inserted Into Database")
                res.send({ login: true })
            });
        }
    }
    )
});

app.post("/order", (req, res) => {

    // Add the request object to the queue
    queue.push(req.body);
    sendQueueToClients();
    // Send a response to the client
    res.send({ ordered: true });
  });

app.post("/placement", (req, res) => {
  // console.log("Placement ", queue[1].username, req.body.username)
  if((queue.length > 1) && (queue[1].username == req.body.username)){
    res.send('Second')
  }
  else{
    res.send('')
  }
});

app.post("/queue", (req, res) => {
  res.send(queue)
})

app.post("/check", async function (req, res) {
    var count = Object.keys(req.body.drink.ingredients).filter(drink => req.body.drink.ingredients[drink].name != null).length
    db.query('SELECT * FROM smart_serve.ingredients WHERE (ingredient_name=? AND amount>?) OR (ingredient_name=? AND amount>?) OR (ingredient_name=? AND amount>?) OR (ingredient_name=? AND amount>?);', [req.body.drink.ingredients.IG1.name, req.body.drink.ingredients.IG1.amount, req.body.drink.ingredients.IG2.name, req.body.drink.ingredients.IG2.amount, req.body.drink.ingredients.IG3.name, req.body.drink.ingredients.IG3.amount, req.body.drink.ingredients.IG4.name, req.body.drink.ingredients.IG4.amount], (error, result) => {
        if (result.length == count) {
            res.send({ availability: true })
        }
        else {

            res.send({ availability: false })
        }
    });

});

app.post("/ingredients", (req, res) => {

    db.query('DELETE FROM smart_serve.ingredients', [], (error, result) => {
        console.log(error)
    });
    db.query('INSERT INTO smart_serve.ingredients VALUES (?, ?, 15), (?, ?, 13), (?, ?, 19), (?, ?, 37), (?, ?, 40);',[req.body.ingredients.ing1, req.body.ingredients.vol1, req.body.ingredients.ing2, req.body.ingredients.vol2,req.body.ingredients.ing3, req.body.ingredients.vol3,req.body.ingredients.ing4, req.body.ingredients.vol4,req.body.ingredients.ing5, req.body.ingredients.vol5], (error, result) => {
        res.send({done:true})
     })
})

app.post('/drinkPopularity', (req,res) => {
    db.query('SELECT drinkName, COUNT(drinkName) AS Amount FROM smart_serve.orders GROUP BY drinkName ORDER BY Amount DESC, drinkName DESC;', [], (error, result) => {
      // console.log(result)
      res.send(result)
  });
})

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});



function processRequest(req) {
    isMaking = true
    console.log("started")
    //console.log('Inputted From Queue -> ', req.drink)
    if(req.drink == 'fill' || req.drink == 'clean'){
      if(req.drink=='fill'){
        arr = ['fill.py']
      }
      else{
        arr = ['clean.py']
      }
      const process = spawn("python", arr);
      process.stderr.on("data", (data) => {
        console.error(`stderr: ${data}`);
      });

      process.stdout.on("data", function (data) {
        while(data.toString().length === 0){
//          console.log('Here')
        }
        console.log(data.toString())
        isMaking = false
        queue.shift();
      });
      
      return
    }
    db.query(
      "SELECT pump, ingredient_name FROM ingredients WHERE ingredient_name IN(?,?,?,?);",
      [
        req.drink.ingredients.IG1.name,
        req.drink.ingredients.IG2.name,
        req.drink.ingredients.IG3.name,
        req.drink.ingredients.IG4.name,
      ],
      (error, result) => {
        const arr = ["main.py"];
//        const shotType = [req.drink.ingredients.IG1.shot,
//                          req.drink.ingredients.IG2.shot,
//                          req.drink.ingredients.IG3.shot,
//                          req.drink.ingredients.IG4.shot]
        
        for (i = 0; i < result.length; i++) {
          str = result[i].pump;
          str = str.toString();
          
          if (result[i].ingredient_name == req.drink.ingredients.IG1.name) {
            shotType = req.drink.ingredients.IG1.shot;
          }
          else if (result[i].ingredient_name == req.drink.ingredients.IG2.name) {
            shotType = req.drink.ingredients.IG2.shot;
          }
          else if (result[i].ingredient_name == req.drink.ingredients.IG3.name) {
            shotType = req.drink.ingredients.IG3.shot;
          }
          else if (result[i].ingredient_name == req.drink.ingredients.IG4.name) {
            shotType = req.drink.ingredients.IG4.shot;
          }          
          else {
            shotType = null;
          }
          
          //console.log(shotType)
          arr.push(str + shotType); // SELECT shotAmount FROM Menu,ingredients WHERE   
        }
        console.log(arr)
        const process = spawn("python", arr);
        process.stderr.on("data", (data) => {
          console.error(`stderr: ${data}`);
        });
        // collect data from script
        process.stdout.on("data", function (data) {
            while(data.toString().length ===0){
              console.log('Here')
            }
          console.log(data.toString())
          isMaking = false
          queue.shift();
          sendQueueToClients();
        });

      }
    );
  
    db.query(
      "INSERT INTO smart_serve.orders VALUES(?, ?, NOW());",
      [req.drink.name, req.username],
      (error, result_2) => {
        console.log("Drink Ordered");
      }
    );
  
    for (
      var i = 1;
      i < Object.keys(req.drink.ingredients).length + 1;
      i++
    ) {
      ingredientName = req.drink.ingredients["IG" + i].name;
      ingredientAmount = req.drink.ingredients["IG" + i].amount;
      if (ingredientName != null) {
        db.query(
          "UPDATE smart_serve.ingredients SET amount=amount-? WHERE ingredient_name=?;",
          [ingredientAmount, ingredientName],
          (error, result) => {}
        );
      }
    }
  }

const interval = setInterval(() => {
    if (queue.length > 0 && !isMaking) {
        processRequest(queue[0]);
        // Remove the processed request from the queue
    }
}, 500);

function sendQueueToClients() {
  console.log(queue)
  io.sockets.emit('queue-updated', queue);
  io.sockets.emit('secondQueue', queue.length > 1?queue[1].username:'null')
}

io.on('connection', (socket) => {
  allClients.push(socket)
  console.log('New client connected');

  
  socket.emit('queue-updated',queue);
  socket.on('Request-Data', () => {
    sendQueueToClients();
  })

  socket.emit('secondQueue', queue.length > 1?queue[1].username:'null')
});

http.listen(8080, () => {
  console.log('Listening on port 8080');
});

process.on("SIGINT", () => {
    clearInterval(interval);
    process.exit();
});
