require('dotenv').config( {path: './config/.env'} )

const express = require('express')
const app = express()

app.listen(process.env.PORT, () => {
    console.log(`server running on port: ${process.env.PORT}`)
})