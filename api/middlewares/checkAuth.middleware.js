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
            if (!user) return res.stauts(400).send('Unauthorized 3')
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
        return res.status(401).send('User not authorrized')        
    } else {
        next()
    }
}

const checkPsycho = (req,res,next) => {
    console.log(res.locals.users.role)
    if (res.locals.user.role !== 'psychologist' || res.locals.user.role !== 'admin') {
        return res.status(401).send('User not authorized')        
    } else {
        next()
    }
}

module.exports = {
    checkAuth,
    checkAdmin,
    checkPsycho
}