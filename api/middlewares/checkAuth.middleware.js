const UserModel = require('../models/user.model')
const jwt = require('jsonwebtoken')

const checkAuth = (req,res,next) => {
    if (!req.headers.authorization) return res.status(401).send('Unauthorized 1')

    try {
        jwt.verify(req.headers.authorization, process.env.JWT_SECRET, async (err, payload) => {
            if (err) return res.status(401).send('Unauthorized 2')
            const user = await UserModel.findOne({
                where: {
                    email: payload.email
                }
            })
            if (!user) return res.status(400).send('Unauthorized 3')
            res.locals.user = user
            next()
        })
        
    } catch (error) {
        console.log(error)
        res.status(500).send('Error on Auth')
    }
}

const checkAdmin = (req,res,next) => {
    if (res.locals.user.role !== 'admin') {
        return res.status(401).send('User not authorized')        
    } else {
        next()
    }
}

const checkPsycho = (req,res,next) => {
    if (res.locals.user.role !== 'psychologist' && res.locals.user.role !== 'admin') {
        console.log(`if log: ${res.locals.user.role}`)
        return res.status(401).send('User not authorized')   
    } else {
        console.log(`else log: ${res.locals.user.role}`)

        next()
    }
}

/* const checkListCreator = (req, res, next) => {
    // WIP
    if (req) {

    } else {
        next()
    }
} */

// DONE manually in each task

module.exports = {
    checkAuth,
    checkAdmin,
    checkPsycho,
}