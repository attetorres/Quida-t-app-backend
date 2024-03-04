require('dotenv').config()
const morgan = require('morgan')
const express = require('express')
const sequelize = ('./db')

const api = express()

api.use(morgan('dev'))
api.use(express.json())

//api.get('/',(req, res) => res.send('Connected to api.'))
//api.use('/api', require ('/api/routes))


api.listen(process.env.PORT, async (err) => {
    if (err) throw new Error ('Cannot start api')

    console.log('*'.repeat(50))
    console.log(`Api running on port ${process.env.PORT}`)
    //await dbCheck()
    console.log('*'.repeat(50))
})