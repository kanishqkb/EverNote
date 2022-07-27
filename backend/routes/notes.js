const express=require('express');
const router=express.Router();
var fetchuser=require('../components/fetchuser')
const Note = require('../models/Notes');
const { body, validationResult } = require('express-validator');
 

router.get('/fetch',fetchuser,async(req,res)=>{
    try {
    const notes=await Note.find({user:req.user.id})
    res.json(notes);   
    } catch(error){
        console.error(error.message)
        res.status(500).send("some error been occured");
    }
})
router.post('/newfetch',[
    body('title','enter a valid title').isLength({ min: 5 }),
    body('description','enter a description').isLength({ min: 5 })
],fetchuser,async(req,res)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
    const{title,description,tag}=req.body;
    const note=new Note({
        title,description,tag,user:req.user.id
    })
    const saveNote=await note.save();
     res.json(saveNote);
     } catch(error){
        console.error(error.message)
        res.status(500).send("some error been occured");
    }
})
router.put('/updatenotes/:id',[
    body('title','enter a valid title').isLength({ min: 5 }),
    body('description','enter a description').isLength({ min: 5 })
],fetchuser,async(req,res)=>{
    const {title,description,tag}=req.body;
    const newNote={};
    if(title){newNote.title=title;}
    if(description){newNote.description=description;}
    if(tag){newNote.tag=tag;}
    let note=await Note.findById(req.params.id);
    if(!note){return res.status(404).send("not found");}
    if(note.user.toString()!==req.user.id){
        return res.status(401).send("not allowwed");
    }
     note=await Note.findByIdAndUpdate(req.params.id,{$set:newNote},{new:true})
     res.json({note})
})
router.delete('/deletenotes/:id',fetchuser,async(req,res)=>{
    const {title,description,tag}=req.body;
    
    let note=await Note.findById(req.params.id);
    if(!note){return res.status(404).send("not found");}
    if(note.user.toString()!==req.user.id){
        return res.status(401).send("not allowwed");
    }
     note=await Note.findByIdAndDelete(req.params.id)
     res.json({"success":"notes has been deleted",note:note })
})
module.exports=router;