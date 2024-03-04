const UserModel = require('../models/user.model')

const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const signUp = async(req,res) => {
    try {
        const salt = bcrypt.genSalt(parseInt(process.env.BCRYPT_SALT))
        req.body.pass = bcrypt.hashSync(req.body.pass, salt)

        const user = await UserModel.create(req.body,{})

        const token = jwt.sign({email: user.email, role: user.role}, process.env.JWT_SECRET)

        res.status(200).send({token: token})

    } catch (error) {
        console.log(error)
        res.status(500).send('Error singning up')
    }
}

const login = async(req,res) => {
    try {
        const user = await UserModel.findOne({
            where:{
                email: req.body.email
            }
        })
        if(!user) return res.status(400).json("Error email/password")
        if(!bcrypt.compareSync(req.body.pass, user.pass)) return res.status(400).json("Error email/password")

        const token = jwt.sign({email: user.email, role: user.role}, process.env.JWT_SECRET)
        res.status(200).json({token})

    } catch (error) {
        console.log(error)
        res.status(500).send('Error login')
    }
}

module.exports = {
    signUp,
    login
}