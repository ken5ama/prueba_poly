const book =require('../module/book')



const createBook = async(data)=>{

  const datos = new book(data)
  await datos.save()
  return datos
}
const listOfBook = async()=>{
 const data = await book.find()
 return data
}
const cont = async(date)=>{
  const count =await book.find({date:date})
  return count.length
}
const countTables = async(date,id)=>{
  const tables = await book.find({date:date,restaurant:id})
  return tables.length
}

module.exports ={
  createBook,
  listOfBook,
  cont,
  countTables
}