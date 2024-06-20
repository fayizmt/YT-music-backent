const express = require('express')
require ('dotenv').config()
const dbConnect= require('./config/connection')
const userRouter=require('./routers/userRouter')
const cors = require('cors');

const app= express()
const port = process.env.PORT

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors());
app.use('/',userRouter)

dbConnect().then(()=>{
    app.listen(port,()=>{
        console.log(`server is running on ${port}`);
    });
});