const express = require('express')
const indexRouter = require('./router/index')
const mongoose = require('mongoose')
const  bodyParser = require('body-parser')
const cors = require('cors')


const app = express()


app.use(bodyParser.json())
app.use(express.urlencoded({extends:false}))
app.use(cors())

app.listen(4000,async()=>{
await mongoose.connect('mongodb://localhost:27017/prueba2',{
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(()=> console.log('conectado')).catch(()=>console.log(err));
})
console.log('server start in port 3000' )
app.use('/', indexRouter )