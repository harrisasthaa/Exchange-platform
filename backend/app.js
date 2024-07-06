const dotenv =require('dotenv')
dotenv.config({path:'./config.env'});
const express=require('express');
const app=express();
const cookieparser=require('cookie-parser');
const port=process.env.PORT;

app.use(express.json());
app.use(cookieparser());
require('./conn');

const router=require('./Router/routing');
app.use(router);




app.listen(port,()=>{
    console.log(`The server is listening on port : ${port}`)
})