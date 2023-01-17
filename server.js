require('dotenv').config( {path: './config/.env'} )

const express = require('express')
const app = express()

const {connectDB} = require('./config/db')

connectDB()

app.listen(process.env.PORT, () => {
    console.log(`server running on port: ${process.env.PORT}`)
})