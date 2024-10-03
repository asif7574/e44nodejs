const express=require ('express')
const app=express()
const cors=require('cors')
app.use(cors())
const products=require('./router/products')
const users=require('./router/users')

app.use(express.json())
app.use(express.urlencoded({extented:true}))




app.use('/getproducts', products )
app.use('/user', users )





app.listen(4000,(err)=>{
    if(err){
        console.log(err);
    }else{
        console.log('server running at port 4000');
    }
})