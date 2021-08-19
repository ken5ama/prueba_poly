const mongoose = require('mongoose')
const Schema = mongoose.Schema
const restaurantSchema = Schema({
  name:{
    type:String,
    required:[true,'Restaurent name required']
  },
  description:String,
  address:{
    type:String,
    required:[true,'Address required']
  },
  city:{
    type:String,
    required:[true,'City  required']
  },
  URLfoto: String,
  tables:{
    type:Number,
    default:15,
  },
  

})
module.exports = mongoose.model('restaurant',restaurantSchema)