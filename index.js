// loads env file content into process .env
require('dotenv').config()
const express=require('express')
const cors=require('cors')
const router = require('./Routes/router')
require('./DB/connection')

// express server
const pfServer = express()
// use coeres in server
pfServer.use(cors())

// use json parse after cors and before router
pfServer.use(express.json())


// use router only after cors
pfServer.use(router)

// avaible files / folder from server to other app
pfServer.use('/uploads',express.static('./uploads'))

const PORT = 3000 || process.env.PORT

// to host pf server
pfServer.listen(PORT,()=>{
    console.log(`Project fair server started at PORT:${PORT}`);
})

// to resolve get request to http 3000
pfServer.get('/',(req,res)=>{
    res.send("<h1 style=color:red;>Project fair server started...and wating for the clint request</h1>")
})


