const express = require("express");
const app= express();
const port =8080;

app.listen(port, (req,res)=>{
    console.log(`the port is  listening ont this ${port}`);
});

app.get("/register", (req,res)=>{
    let {user , password}=req.query;
   res.send(`Get standard method Welcone ${user}`);
})


app.post("/register", (req,res)=>{
    let {user , password}=req.query;
   res.send(`Post  standard method Welcone ${user}`);
})
