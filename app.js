const express=require('express');
const app=express();
const path=require("path")
const PORT=3002;
// const bodyParser=require("body-parser")

// app.use(bodyParser.urlencoded())
// app.use(express.static("pages"))
// app.use(express.urlencoded())

app.get("/",Token,(req,res)=>{
    res.status(200).send("Hello Welcome");
    // console.log(__dirname);
    // console.log(req.body);
    // res.sendFile(path.join(__dirname,"pages","index.html"))


})
// app.post("/about",(req,res)=>{
//   
//     res.status(200).send("Hello Welcome");

// })
function Token(rq,res,next){
    console.log("middle ware");
    // res.end("error")
    next()

}




app.get("*",(req,res)=>{
    res.status(404).send("Invalid Page");
})



app.listen(PORT,()=>{
    console.log(`Server started at http://localhost:${PORT}`);
})