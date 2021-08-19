const mongoose=require('mongoose')

const bookSchema = new mongoose.Schema({
  restaurant:{
    type:String
  },
  date:{
    type:Date,
    require:true
  }
})
module.exports= mongoose.model('book', bookSchema)