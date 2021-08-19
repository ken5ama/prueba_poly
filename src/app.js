const express = require('express')
const indexRouter = require('./router/index')
const mongoose = require('mongoose')
const  bodyParser = require('body-parser')
const cors = require('cors')
const port = 4000

const app = express()


app.use(bodyParser.json())
app.use(express.urlencoded({extends:false}))
app.use(cors())

app.listen(port,async()=>{
await mongoose.connect('mongodb://localhost:27017/prueba2',{
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(()=> console.log('connceted in DB')).catch(()=>console.log(err));
})
console.log('server start in port '+port )
app.use('/', indexRouter )