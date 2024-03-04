require('dotenv').config()
const morgan = require('morgan')
const express = require('express')
const sequelize = require('./db')

const api = express()

const dbSync = require('./db/sync')
const dbCheck = async () => {
    try {
        await sequelize.authenticate()
        await dbSync()
        console.log('Connected to Quida-t DB')
    } catch (error) {
        throw new Error(error)
        
    }
}

api.use(morgan('dev'))
api.use(express.json())


api.use('/api', require ('./api/routes'))


api.listen(process.env.PORT, async (err) => {
    if (err) throw new Error ('Cannot start api')

    console.log('*'.repeat(50))
    console.log(`Api running on port ${process.env.PORT}`)
    await dbCheck()
    console.log('*'.repeat(50))
})