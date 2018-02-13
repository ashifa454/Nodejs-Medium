var express=require('express');
var Router=express.Router();
var NewsModel=require('../model/NewsModel');
Router.get('/home',(req,res)=>{
    NewsModel.getLatestNews((err,body,html)=>{
        if(err)
            res.json({
                status:false,
                message:err
            })
        else{
            res.json({
                status:true,
                message:body
            })
        }
    })
})
module.exports=Router;