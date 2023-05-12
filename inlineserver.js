const express = require("express");
var mysql = require('mysql');
var cors = require('cors');

var connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'Password@123',
    database: 'inlineform'
});

app = express()
app.use(express.json())
app.use(cors())


app.get('/GET', (req, res) => {
    console.log(req.query)
    console.log("i am insiddddddddddddddddddde get")


    connection.query('select * from inline', function (error, results) {
        if (error) throw error;
        console.log('The solution is: ', results);
        
        // connection.end();
        res.send(JSON.stringify(results))
    });

});

app.post('/post', (req, res) => {
    // console.log("inside post", req.body)
    console.log(req.body,"hghghh")
  connection.query(`insert into inline (sname,fname,email,messages) values (?,?,?,?)`
  ,[req.body.sname,req.body.fname,req.body.email,req.body.messages], function (error, results) {
 
 
 
    if(error) console.log(error);
  console.log(results)
   res.json(results);
 });
})










app.listen(4000, () => {
    console.log("listening on port 4000")
})