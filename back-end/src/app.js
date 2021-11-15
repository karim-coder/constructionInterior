 const express = require('express')
 require('../src/db/mongoose')
const cors = require('cors')
require('dotenv').config({path: './config/config.env'})

const path = require('path')

 const app = express()

 const userRout = require('../src/routers/user')

 app.use(cors())
 app.use(express.urlencoded({ extended: false }));
 app.use(express.json());
 app.use(userRout)

 const port = process.env.PORTS


console.log(path.join(__dirname))
 app.get('/home', cors(), (req, res)=>{
     res.send('Cors test')
     
 })
 

 app.listen(port, ()=>{
     console.log('Server is upto prot ' + port)
 })