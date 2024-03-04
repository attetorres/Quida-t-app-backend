const UserModel = require('../models/user.model')
const jwt = require('jsonwebtoken')

const checkAuth = (req,res,next) => {
    console.log(req.headers.authorization)
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

module.exports = {
    checkAuth
}