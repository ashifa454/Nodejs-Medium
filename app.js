const express=require('express');
const app=express();
var NewsRoutes=require('./routes/NewsRoutes');
app.use('/news',NewsRoutes);
//Define Your Server
app.listen(8080,()=>{
    console.log("APP IS RUNNING");
})