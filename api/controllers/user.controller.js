const AssignedUsers = require('../models/assignedUser.model')
const ListModel = require('../models/list.model')
const RegistryTaskModel = require('../models/registryTask.model')
const TaskModel = require('../models/task.model')
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
        const user = await UserModel.findByPk(req.params.userId, {
            attributes: {
                exclude: ['pass', 'email', 'phone', 
                        'createdAt', 'updatedAt']
            }
        })

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

        req.body.validate = user.validation
        req.body.role = user.role
        req.body.psychologist = user.psychologist

        if (!user) return res.status(404).send('User not found')

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
       
        const user = await UserModel.update({psychologist: res.locals.user.id}, {
            where: {
                id: req.params.userId 
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
                email: res.locals.user.email,
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
        const userExist = await UserModel.update({
            role: req.body.role, 
            validation: req.body.validation
        }, {
            where: {
                id: req.params.userId 
            }
        }) 

        if (userExist) {
            return res.status(200).json({ 
                message:`Psychologist validated`, 
                user: await UserModel.findByPk(req.params.userId)})
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

        return res.status(200).json(user)

    } catch (error) {
        console.log(error)
        res.status(500).send(error.message)
    }
}

const getUserPsycho = async (req, res) => {
    try {
        const userPsycho = await UserModel.findOne( {
            where: {
                id: res.locals.user.psychologist, 
            },
            attributes: {
                exclude: ['pass', 'email', 'phone', 'psychologist',
                        'createdAt', 'updatedAt']
            }
        })

        if (!userPsycho) return res.status(404).send('User not found')

        return res.status(500).json(userPsycho)

    } catch (error) {
        console.log(error)
        res.status(500).send(error.message)
    }
}

const closeList = async (req, res) => {
    try {
        const assignment = await AssignedUsers.findOne({
            where: {
                listId: req.params.listId,
                userId: res.locals.user.id
            }
        })

        let registry = await RegistryTaskModel.findAll({
            where: {
                assignedUserId: assignment.id,
                closed: false
            }
        })
        
        const closed = await RegistryTaskModel.update({"closed": true},{
            where: {
                assignedUserId: assignment.id,
                closed: false
            }
        })

        tasks = registry.map((task) => {
        return  {assignedUserId: assignment.id,
                    taskId:task.dataValues.taskId,
                    closed: task.dataValues.closed }
        })

        res.json(tasks)

    const registryTask = await RegistryTaskModel.bulkCreate(tasks)
    
    } catch (error) {
        console.log(error)
        res.status(500).send(error.message)
    }

}

/* const getAllOpenTasks =  async (req, res) => {
    try {
        const assignment = await AssignedUsers.findAll({
            include: {all: true, nested: true},
            where: {
                userId: res.locals.user.id
            },
            
           
        },)


        res.json({ assignment })

    
    } catch (error) {
        console.log(error)
        res.status(500).send(error.message)
    }

} */

const getAllOpenTasks =  async (req, res) => {
    try {
        const assignment = await AssignedUsers.findAll({
           include: [
            {
                model: RegistryTaskModel,
                include: [
                    {
                        model: TaskModel,
                    }
                ],
                where: {
                    closed: false
                }
            }
           ],
           where: {
            userId: res.locals.user.id
        },
           
        },)


        res.json({ assignment })

    
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
    getUserPsycho,
    closeList,
    getAllOpenTasks
 }
