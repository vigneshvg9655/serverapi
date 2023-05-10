const express = require("express");
app=express()

let sss=[{ id:1,name:'vignesh',age:22},
        {id:2,name:'magesh',age:32}]
        

app.get('/sss/:id',(req,res)=>{
    // res.json(sss)
    console.log("hi this ",res)
    res.json(sss.filter(e=>e.id== req.params.id))
})
app.get('/user/sss',(req,res)=>{
    res.json(sss)
    // res.json(sss.filter(e=>e.id== req.params.id))
})
app.listen(4000,() =>{



    // if(!error)
    // {
        console.log("listening on port 4000")
    // }else{
        
    //     console.log("errorrrrrrrrrrrrrrrrrrrrrrrrrr",error)
    // }
})    
const data = { name: 'John Doe', email: 'johndoe@example.com' };

fetch('http://localhost:4000/api/users', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(data),
})



  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));