const dotenv = require('dotenv')
dotenv.config( {path: './config/.env'} )

const express = require('express')
const passport = require('passport')
const session = require('express-session')
const logger = require('morgan')

const { connectDB } = require('./config/db')

const indexRoutes = require('./routes/indexRoutes')
const profileRoutes = require('./routes/profileRoutes')
const loginRoutes = require('./routes/loginRoutes')
const logoutRoutes = require('./routes/logoutRoutes')

require('./config/passport')(passport)

connectDB()

const app = express()

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(
    session({
        secret: 'keyboard cat',
        resave: false,
        saveUninitialized: false
    })
)
app.use(passport.initialize())
app.use(passport.session())

if (process.env.NODE_ENV === 'development') {
    app.use(logger('dev'))
}

app.use('/', indexRoutes)
app.use('/profile', profileRoutes)
app.use('/login', loginRoutes)
app.use('/logout', logoutRoutes)

app.listen(process.env.PORT, () => {
    console.log(`server running in ${process.env.NODE_ENV} mode on port: ${process.env.PORT}`)
})