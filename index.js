const express=require('express');
require("dotenv").config();
const port=process.env



const app=express();

app.listen(port,()=>{
    console.log(`Server is running on port : ${port}`)
});
app.get('/',(req,res)=>{
    res.send("You are on the home page.");
});
app.get('/flipkart',(req,res)=>{
    res.send("Welcome to Flipkart!")
});
