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

const getOneUser = async (req, res) => {
    try {
        const user = await UserModel.findByPk(req.params.id)
        if (user) {
            return res.status(200).json(user)
        } else {
            return res.status(404).send('User not found')
        }
    } catch (error) {
        console.log(error)
        res.status(500).send(error.message)
    }
}

const updateUser = async (req, res) => {
    try {
        const user = await UserModel.findOne( {
            where: {
                email: res.locals.user.email    
            }
        })

       /*
        * Setting the varibles we dont want to be updated, to the original value
        */
       
        req.body.validate = user.validation
        req.body.role = user.role
        req.body.psychologist = user.psychologist

        if (!user) return res.status(500).send('User not found')

        const result = await UserModel.update(req.body, {
            where: {
                email: res.locals.user.email
            }
        }) 

        return res.status(200).json(await UserModel.findByPk(user.id))
    } catch (error) {
        console.log(error)
        res.status(500).send(error.message)
    }
}

const updateUserPsycho = async (req, res) => {
    try {
       
        const [userExist, user] = await UserModel.update(req.body.psychologist, {
            where: {
                id: req.params.id 
            }
        }) 



        return res.status(200).json(user)
    } catch (error) {
        console.log(error)
        res.status(500).send(error.message)
    }
}



const deleteUser = async (req, res) => {
    try {
        const user = await UserModel.destroy({
            where: {
                email: res.locals.email,
            }
        })

        if (user) {
            return res.status(200).json('User deleted')
        } else {
            return res.status(404).send('User not found')
        }

    } catch (error) {
        console.log(error)
        res.status(500).send(error.message)
    }
}

const psychoStatusRole = async (req, res) => {
    try {
        const userExist = await UserModel.update({role: req.body.role, validation: req.body.validation}, {
            where: {
                id: req.params.userId 
            }
        }) 


        if (userExist) {
            return res.status(200).json({ message:`Psychologist validated`, user: await UserModel.findByPk(req.params.userId)})
        } else {
            return res.status(404).send('User not found')
        }
    } catch (error) {
        console.log(error)
        res.status(500).send(error.message)
    }
}

const getSelfUser = async (req, res) => {
    try {
        const user = await UserModel.findOne( {
            where: {
                email: res.locals.user.email    
            }
        })
        if (!user) return res.stauts(404).send('User not found')
        return res.status(500).json(user)
    } catch (error) {
        console.log(error)
        res.status(500).send(error.message)
    }
}

const getUserPsycho = async (req, res) => {
    try {
        const userPsycho = await UserModel.findOne( {
            where: {
                id: res.locals.user.psychologist    
            }
        })
        if (!userPsycho) return res.stauts(404).send('User not found')
        return res.status(500).json(userPsycho)
    } catch (error) {
        console.log(error)
        res.status(500).send(error.message)
    }
}

module.exports = { 
    getAllUsers, 
    getOneUser, 
    updateUser, 
    updateUserPsycho, 
    deleteUser, 
    psychoStatusRole, 
    getSelfUser,
    getUserPsycho }