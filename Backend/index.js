//Import 
const express = require('express');
const cors = require("cors")
const {rateLimit} = require("express-rate-limit")
const connection = require("./config/database")

//Initialize app
const app = express()
const port = 7000
const limiter = rateLimit({
     windowMs: 1000 * 60 * 15,
     limit : 100
})

app.use(limiter)
app.use(cors())
connection()





app.listen(port,()=>{
     console.log(`port listening on ${port}`)
})


