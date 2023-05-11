const express = require("express");
var mysql = require('mysql');
var cors = require('cors');

var connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'Password@123',
    database: 'simplform'
});

app = express()
app.use(express.json())
app.use(cors())



/// get api call
app.get('/get', (req, res) => {
    console.log(req.query)
    console.log("i am insiddddddddddddddddddde get")


    connection.query('select * from form where isdeleted = 0', function (error, results) {
        if (error) throw error;
        console.log('The solution is: ', results);
        
        // connection.end();
        res.end(JSON.stringify(results))
    });

});


// GET api call using Id
app.get('/:id', (req, res) => {
    // console.log(`select * from form  where id=${req.params.id}`)
    // console.log(req.query)
    console.log("i am inside get",`select * from form  Where id=${req.params.id}`)


    connection.query(`select * from form  where id=? and isdeleted=0`,[req.params.id], function (error, results) {

        if (error) {
            console.log(error)
        }

        console.log('The solution is: ', results);
        res.json(results)
       
        // res.end(JSON.stringify(results))

        
    });

})

//insert api call or post api call
app.post('/post', (req, res) => {
    // console.log("inside post", req.body)
    console.log(req.body,"hghghh")
  connection.query(`insert into form (firstname,scondname,email,phone,messsages) values (?,?,?,?,?)`
  ,[req.body.firstname,req.body.scondname,req.body.email,req.body.phone,req.body.messsages], function (error, results) {
 
 
 
    if(error) console.log(error);
  console.log(results)
  res.json(results);
 });
})

app.put('/update/:id', (req, res) => {
    // console.log(`select * from form  where id=${req.params.id}`)
     console.log(req.params)
    console.log("i am inside get",`select * from form  Where id=${req.params.id}`)


    connection.query(`update form  set firstname=?,scondname=?,phone=?,email=?,messsages=?   where id=?`,[req.body.firstname,req.body.scondname,req.body.phone,req.body.email,req.body.messsages,req.params.id],function (error, results) {
        console.log(req.body,"hgfgdgfdtf")
        if (error) {
            console.log(error)
        }
    connection.query(`select * from  form  where id=?`,[req.params.id],function (error, results) {

        console.log('The solution is: ', results);
        res.json(results)
       
        // res.end(JSON.stringify(results))

    });
        
    });

})
//delete api call  

app.delete('/delete/:id', (req, res) => {
    // console.log(`select * from form  where id=${req.params.id}`)
     console.log(req.params)
    // console.log("i am inside get",`select * from form  Where id=${req.params.id}`)


    connection.query(`update form  set isdeleted=1  where id=? `,[req.params.id],function (error, results) {

        if (error) {
            console.log(error)
        }
    // connection.query(`select * from  form  where id=?`,[req.params.id],function (error, results) {

        console.log('The solution is: ', results);
        res.json(results)
       
        // res.end(JSON.stringify(results))

    // });
        
    });

})
app.listen(3000, () => {
    console.log("listening on port 3000")
})


//  app.post('/http://localhost:3000/', (req, res) => {
//     console.log(req.query)
//     console.log("i am inside get")


//     connection.query('select * from form', function (error, results) {
//         if (error) throw error;
//         console.log('The solution is: ', results);
        
//         // connection.end();
//         res.end(JSON.stringify(results))
//     });

// });

   
// app.post('/', (req, res) => {
//     console.log(req.query)
    

//     connection.query('select * from form', function (error, results) {
//         if (error) throw error;
//         console.log('The solution is: ', results);
        
//         connection.end();
//         res.end(JSON.stringify(results))
//     });

// });

// fetch('http://localhost:4000/api/users', {
//   method: 'POST',
//   headers: { 'Content-Type': 'application/json' },
//   body: JSON.stringify(data),
// })

// /syntex{
//     app.get('/'api )(express.request,express.response)
// }


// let user=[{ id:1,name:'vignesh',age:22},
//         {id:2,name:'magesh',age:32}]


// // app.get('/user',(req,res)=>{
// //     res.json(user)
// // })

// // app.get('/pull/:id',(req,res)=>{
// //     // console.log(req.params)
// //     res.json(user.filter(e=>e.id== req.params.id))
// // })

// // let arr=[{userid:1,name:"vicky",age:44},{userid:1,name:"vicky",age:44},{userid:1,name:"vicky",age:44},{userid:1,name:"vicky",age:44}]

// // app.get('/arr/userid',(req,res)=>{

// //     res.json(arr)
// //     console.log(res)
// //     // res.json(arr.filter(e=>e.userid== req.params.userid))

// // }

// // )

// console.log(id)
