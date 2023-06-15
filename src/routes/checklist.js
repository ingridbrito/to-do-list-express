const express = require('express');

const router = express.Router();

const Checklist = require('../models/checklist.js');

router.get('/', async (req, res)=>{
  try{
    let checklist = await Checklist.find({});
    res.status(200).json(checklist);
  }catch(error){
    res.status(500).json(error);
  }
})

router.post('/', async (req, res)=>{
    let {name}=req.body;
    try{
     let checklist = await Checklist.create({name}) ;
     res.status(200).json(checklist);
    } catch(error){
     res.status(422).json(error);
    }
})

router.get('/:id', async(req, res)=>{
    try{
      let checklist = await Checklist.findById(req.params.id) ;
      res.status(200).json(checklist);
    }catch(error){
        res.status(422).json(error);
    }
})

router.put('/:id', (req, res)=>{
    console.log(req.body);
    res.send(`PUT ID:${req.params.id}`)
})

router.delete('/:id', (req, res)=>{
    console.log(req.body);
    res.send(`DELETE ID:${req.params.id}`)
})

module.exports = router;
