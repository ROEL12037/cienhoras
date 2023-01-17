require('dotenv').config( {path: './config/.env'} )

const express = require('express')
const app = express()
const logger = require('morgan')

const {connectDB} = require('./config/db')

connectDB()

app.use(logger('dev'))

app.listen(process.env.PORT, () => {
    console.log(`server running in ${process.env.NODE_ENV} mode on port: ${process.env.PORT}`)
})