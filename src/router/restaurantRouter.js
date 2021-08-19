const router = require('express').Router()
const restaurant = require('../controller/restaurantController')

router.post('/restaurant',async(req,res)=>{
  try{

    let body={
      name:req.body.name,
      description:req.body.description,
      address:req.body.address,
      city:req.body.city
    }
     const data=await restaurant.createRestaurant(body)
     res.json(data)
  }catch(err){
    res.status(400).send(err.message)
  }
})

router.put('/restaurant/:_id', async(req, res)=>{
  try{
  const data=await restaurant.editRestaurant(req.params._id, req.body)
  res.json(data)
  }catch(err){
    res.status(400).send(err.message)
  }
})

router.delete('/restaurant/:_id', async(req,res)=>{
  try{
  const data=await restaurant.removeRestaurnt(req.params._id)
  res.json(data)
  }catch(err){
    res.status(400).send(err.message)
  }
})
router.get('/restaurants',async(req,res)=>{
  try{
    const data=await restaurant.listOfRestaurants()
    if(req.query.city){
      data.filter(city=>req.query.city)
    }else{
    res.json(data)
    }
  }catch(err){
    res.status(500).send(err.message)
  }

})
module.exports = router