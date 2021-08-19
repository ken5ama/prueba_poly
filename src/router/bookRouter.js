const router =require('express').Router()
const book = require('../controller/bookConstroller')

router.post('/book',async(req,res)=>{
  try{
    const date=new Date(req.body.year,req.body.month,req.body.day)
    const validate = await book.cont(date)
    const table= await book.countTables(date,req.body.restaurant)
    if(table!=15)
    if(validate<20){
   const data= await book.createBook({restaurant:req.body.restaurant,date:date})
   
   res.json({data,table})
    }else{
      res.status(400).send("total de reservas para el dia ocupadas")
    }
  }catch(err){
    res.status(400).send(err.message)
  }
})
router.get('/books',async(req,res)=>{
  try{
    const data=await book.listOfBook()
    res.json(data)
  }catch(err){
    res.status(500).send(err.mesagge)
  }
})
module.exports= router