const express = require('express')
const router=express.Router()
const database=require('../db')


// q1
router.get('/products',(req,res)=>{
    res.status(200).json(database.products)
    // console.log(database.products);
})
router.post('/products',(req,res)=>{
    database.products.push(req);
    res.status(200).json(database.products)
    // console.log(database.products);
})


//q2
router.get('/productdata',(req,res)=>{
    console.log(req.query);
    console.log(req.query.manufacturer);
    const man =(req.query.manufacturer)
    
    for (const element of database.products) {   
        // console.log(element);
        if(element.manufacturer===man){
            console.log(element);
            res.status(200).json(element)
            break;  
        }
 
    }
    
})


//q3
router.get('/products/:id',(req,res)=>{
    const id =parseInt(req.params.id)
    console.log(id);
    
    for (const element of database.products) {   
        // console.log(element);
        if(element.id===id){
            console.log(element);
            res.status(200).json(element)
            break;
            
        }
    }
    
})


//q4
router.post('/add',(req,res)=>{
    const val=req.body
    console.log(val);
    
    database.products.push(val);
    res.status(200).json('data saved')
    
})



//q5
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

