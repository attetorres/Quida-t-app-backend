const UserModel = require('../models/user.model')
const jwt = require('jsonwebtoken')

const checkAuth = (req,res,next) => {
    if (!req.headers.authorization) return res.status(401).send('Unauthorized')

    try {
        jwt.verify(req.headers.authorization, process.env.JWT_SECRET, async (err, payload) => {
            if (err) return res.status(401).send('Unauthorized')

            const user = await UserModel.findOne({
                where: {
                    email: payload.email
                }
            })
            
            if (!user) return res.status(400).send('Unauthorized')

            res.locals.user = user
            next()
        })
        
    } catch (error) {
        console.log(error)
        res.status(500).send({message: 'Error on Auth', error: error.message})
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
        return res.status(401).send('User not authorized')   
    } else {
        next()
    }
}


module.exports = {
    checkAuth,
    checkAdmin,
    checkPsycho,
}