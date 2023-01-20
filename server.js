const dotenv = require('dotenv')
dotenv.config( {path: './config/.env'} )

const express = require('express')
const passport = require('passport')
const session = require('express-session')
const mongoose = require('mongoose')
const MongoStore = require('connect-mongo')
const methodOverride = require('method-override')
const logger = require('morgan')

const { connectDB } = require('./config/db')

const indexRoutes = require('./routes/indexRoutes')
const profileRoutes = require('./routes/profileRoutes')
const loginRoutes = require('./routes/loginRoutes')
const logoutRoutes = require('./routes/logoutRoutes')
const postRoutes = require('./routes/postRoutes')
const feedRoutes = require('./routes/feedRoutes')

require('./config/passport')(passport)

connectDB()

const app = express()

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(
    session({
        secret: 'keyboard cat',
        resave: false,
        saveUninitialized: false,
        store: MongoStore.create({ client: mongoose.connection.getClient() })
    })
)
app.use(passport.initialize())
app.use(passport.session())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(methodOverride('_method'))

if (process.env.NODE_ENV === 'development') {
    app.use(logger('dev'))
}

app.use('/', indexRoutes)
app.use('/profile', profileRoutes)
app.use('/login', loginRoutes)
app.use('/logout', logoutRoutes)
app.use('/post', postRoutes)
app.use('/feed', feedRoutes)

app.listen(process.env.PORT, () => {
    console.log(`server running in ${process.env.NODE_ENV} mode on port: ${process.env.PORT}`)
})