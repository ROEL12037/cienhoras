const dotenv = require('dotenv')
dotenv.config( {path: './config/.env'} )

const express = require('express')
const logger = require('morgan')

const { connectDB } = require('./config/db')

const indexRoutes = require('./routes/indexRoutes')

connectDB()

const app = express()

app.set('view engine', 'ejs')
app.use('/', indexRoutes)
if (process.env.NODE_ENV === 'development') {
    app.use(logger('dev'))
}

app.listen(process.env.PORT, () => {
    console.log(`server running in ${process.env.NODE_ENV} mode on port: ${process.env.PORT}`)
})