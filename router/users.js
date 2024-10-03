const express = require('express')
const router=express.Router()
const database=require('../db')



//q1
router.get('/users',(req,res)=>{
    res.status(200).json(database.user)
    // console.log(database.products);
})


//q2
router.get('/users/:id',(req,res)=>{
    const id =parseInt(req.params.id)
    console.log(id);
    
    for (const element of database.user) {   
        // console.log(element);
        if(element.id===id){
            console.log(element);
            res.status(200).json(element)
            break;
            
        }
    }
    
})



//q3
router.post('/add',(req,res)=>{
    const val=req.body
    console.log(val);
    
    database.products.push(val);
    res.status(200).json('data saved')
    
})

//q4
router.post('/change/:id',(req,res)=>{
    const id =parseInt(req.params.id)
    console.log(id);
    const val=req.body
    console.log(val);

    for (const element of database.products) {   
        // console.log(element);
        if(element.id===id){
            // console.log(element);
            database.products.push(val);
    res.status(200).json('data saved')
            break;
            
        }
    }
    
   
    
})


module.exports=router