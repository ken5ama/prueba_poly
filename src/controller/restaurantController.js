const restaurantSchema = require('../module/restaurant')
const book = require('../module/book')
const { deleteMany } = require('../module/book')

const createRestaurant = async(data,date)=>{
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
  const deletebooking = await book.deleteMany({id:id})
  
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