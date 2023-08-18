const express = require('express');
const bson = require('bson');
const bodyparser = require('body-parser');
const cors = require('cors')
const db = require('./db')
const path = require('path')
const router = require('./routes/index')
db.connect()
const PORT = process.env.PORT || 5000;
const app = express()

app.use(bodyparser.json({limit:'50mb'}))
app.use(bodyparser.urlencoded({ extended:true,limit:'50mb'}))

app.use(express.json())

app.use((req,res,next)=>{
    res.header('Acceess-Control-Allow-Origin', '*')
    res.header('Acceess-Control-Allow-Headers', '*')
    next()
})

app.use(cors({
    origin:'http://localhost:3000',
    credentials:true,
}))

app.use('/api',router)

app.listen(PORT,()=>{
    console.log(`Server listening on port ${PORT}` )
})


