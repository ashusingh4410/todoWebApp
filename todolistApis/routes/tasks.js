const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
let ObjectId = mongoose.Types.ObjectId;

var Task = require("../models/Tasks");

//create a task

router.post("/",async(req,res,next)=>{
    try{
    let task = await Task.create({
        title: req.body.title,
        description: req.body.description
    });
    res.json(task);
}
catch(e){
    console.log("error in post of task",e.message,e.toString());
    req.json({message:"error",error:e.message});
}
})

//update a task

router.put("/:id",async(req,res,next)=>{
    try{
        let task = await Task.findOneAndUpdate({_id:ObjectsId(id)},{
            title: req.body.title,
            description: req.body.description
        }, {upsort:false,new:true});
        res.json(task);
    }
    catch(e){
        console.log("error in post of task",e.message,e.toString());
        req.json({message:"error",error:e.message});
    }
    })

    /// Read task

    router.get("/",async(req,res,next) =>{
        try{
        let task = await Task.find();
        res.json(task);
        }
        catch(e){
            console.log("error in post of task",e.message,e.toString());
            req.json({message:"error",error:e.message});
        }
    })

    // Delete

    router.delete("/:id",async(req,res,next)=>{
        try{
            let task = await Task.deleteOne({_id: ObjectId(req.params.id)});
            res.json(task);
        }
        catch(e){
            console.log("error in post of task",e.message,e.toString());
            req.json({message:"error",error:e.message});
        }

    })

    module.exports = router;