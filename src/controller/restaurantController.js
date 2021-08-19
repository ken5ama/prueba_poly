const restaurantSchema = require('../module/restaurant')


const createRestaurant = async(data)=>{
  const restaurant = new restaurantSchema(data)
  await restaurant.save()
  return restaurant
}
const editRestaurant = async (id, data)=>{
  await restaurantSchema.findByIdAndUpdate(id, data, (err)=>{
    if(err){
      return err.message
    }
  })
}

const removeRestaurnt = async (id)=>{
  await restaurantSchema.findByIdAndDelete(id, (err)=>{
    if(err){
      return err.message
    }
  })
}
const listOfRestaurants = async ()=>{
  const data =await restaurantSchema.find()
  return data
}
module.exports ={
  createRestaurant,
  editRestaurant,
  removeRestaurnt,
  listOfRestaurants
}