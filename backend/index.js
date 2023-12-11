const express = require("express");
const app= express();
const port =8080;

// if you want to use post req you need to extend  without it alwyas undifined come
app.use(express.urlencoded({ extended: true}));
app.use(express.json());
// if you use json format to send data 



app.listen(port, (req,res)=>{
    console.log(`the port is  listening ont this ${port}`);
});

app.get("/register", (req,res)=>{
    let {user , password}=req.query;
   res.send(`Get standard method Welcone ${user}`);
});


app.post("/register", (req,res)=>{
    // let {user , password}=req.query;
    let {user , password}=req.body;
   res.send(`Post  standard method Welcone ${user}`);
})
