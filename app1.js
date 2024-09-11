// id param----------------------------------------------
// give /about/20/30 on thunder client
// need /about/:id/:id on get


// const express=require('express');
// const app=express();
// const path=require("path")
// const PORT=3002;


// app.get("/about/:id1/:id2",(req,res)=>{
//     res.send("hello")

//     // using destructuring
//     console.log("Router");
//     const {id1,id2}=req.params
//     console.log(id1,id2);

//     // get all input formal way
//     // console.log(req.params);

// })

// function Token(rq,res,next){
//     console.log("middle ware");
//     // res.end("error")
//     next()

// }




// app.get("*",(req,res)=>{
//     res.status(404).send("Invalid Page");
// })



// app.listen(PORT,()=>{
//     console.log(`Server started at http://localhost:${PORT}`);
// })

//Query params ------------------------------------------------------------------------------------------------------
// give /about?name=alan&age=20 on thunder client
// only need /about as route

const express=require('express');
const app=express();
const path=require("path")
const PORT=3002;


app.get("/about",(req,res)=>{
    res.send("hello")
    console.log("Router");

    // // using destructuring
    const {name,age}=req.query
    console.log(name,age);

    // get all input formal way
    // console.log(req.query);

})

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