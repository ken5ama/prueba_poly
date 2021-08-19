const mongoose = require('mongoose')
const Schema = mongoose.Schema
const restaurantSchema = Schema({
  name:String,
  description:String,
  address:String,
  city:String,
  URLfoto: String,
  tables:{
    type:Number,
    default:15,
  }

})
module.exports = mongoose.model('restaurant',restaurantSchema)