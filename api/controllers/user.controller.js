const UserModel = require('../models/user.model')

const getAllUsers = async (req, res) => {
    try {
    const users = await UserModel.findAll()

    if (!users) {
        return res.status(404).send('Users not found')
    }

    return res.status(200).json(users)
        
    } catch (error) {
        console.log(error)
        res.status(500).send('Error getting all users')
    }
}

module.exports = { getAllUsers }