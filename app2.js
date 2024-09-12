import express from "express"
import Connection from "./connection.js";
import env from "dotenv"
import router from "./router.js";
env.config()
const app=express();


app.use(express.static("pages"))
app.use(express.json())
app.use('/api',router);
// const path=require("path")



// app.get("/about",(req,res)=>{
//     console.log("Router");

// })

// function Token(rq,res,next){
//     console.log("middle ware");
//     // res.end("error")
//     next()

// }




// app.get("*",(req,res)=>{
//     res.status(404).send("Invalid Page");
// })



Connection().then(()=>{
    console.log("Database Connected");
    app.listen(process.env.PORT,()=>{
        console.log(`Server started at http://localhost:${process.env.PORT}`);
    })
}).catch((error)=>{
    console.log(error);
})