import express from "express"
import Connection from "./connection.js";

const app=express();
// const path=require("path")
const PORT=3002;


app.get("/about",(req,res)=>{
    console.log("Router");

})

function Token(rq,res,next){
    console.log("middle ware");
    // res.end("error")
    next()

}




app.get("*",(req,res)=>{
    res.status(404).send("Invalid Page");
})



Connection().then(()=>{
    console.log("Database Connected");
    app.listen(PORT,()=>{
        console.log(`Server started at http://localhost:${PORT}`);
    })
}).catch((error)=>{
    console.log(error);
})