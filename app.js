const express=require('express');
const app=express();
const PORT=3001;
const bodyParser=require("body-parser")

// app.use(bodyParser.urlencoded())
app.use(bodyParser.json())

app.get("/",(req,res)=>{
    res.status(200).send("Hello Welcome");
})
app.post("/about",(req,res)=>{
    console.log(req.body);
    res.status(200).send("Hello Welcome");

})
app.get("*",(req,res)=>{
    res.status(404).send("Invalid Page");
})

app.listen(PORT,()=>{
    console.log(`Server started at http://localhost:${PORT}`);
})