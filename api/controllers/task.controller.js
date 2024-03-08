const TaskModel = require('../models/task.model')
const ListModel = require('../models/list.model')
const UserModel = require('../models/user.model')
const AssignedUsersModel = require('../models/assignedUser.model')
const RegistryTaskModel = require('../models/registryTask.model')

const createTask = async (req, res) => {
    try {
        const list = await ListModel.findByPk(req.params.listId)
        const user = await UserModel.findByPk(list.userId)

        if (user.email === res.locals.user.email) {
            req.body.listId = req.params.listId
            const task = await TaskModel.create(req.body)

            if (res.locals.user.role === 'patient') {
                const assignment = await AssignedUsersModel.findOne({
                    where: {
                        userId: user.id,
                        listId: list.id 
                    }
                })

                const registry = await RegistryTaskModel.create({
                    taskId: task.dataValues.id,
                    assignedUserId: assignment.id,
                })
            }

            res.status(200).json({ message: 'Task created', task: task })

        } else {
            res.status(500).send('You are not the creator of the list')
        }

    } catch (error) {
        console.log(error)
        res.status(500).send('Error creating the task')
    }
}

const getAllMyTasks = async (req, res) => {
    try {
        const user = await UserModel.findByPk(res.locals.user.id, {
            include: {
                model: ListModel,
                include: {
                    model: TaskModel
                }
            }
        })
   
    res.json(user.dataValues.lists)

    } catch (error) {
        console.log(error)
        res.status(500).send('Error getting all tasks')
    }
}

const getOneTask = async (req, res) => {
    try {
        list = await ListModel.findOne({
            where: {
                id: req.params.listId
            }
        })

        user = await UserModel.findOne({
            where: {
                id: list.userId
            }
        })

        if (user.email === res.locals.user.email) {
           const task =  await TaskModel.findByPk(req.params.taskId, {
                where: {
                    id: req.params.taskId
                }
            })
            if (!task) return res.status(500).send('No task found')

            res.status(200).json(task)
        } else {
            res.status(500).send('Unauthorized')
        }
        
    } catch (error) {
        console.log(error)
        res.status(500).send('Error getting the task')
    }
}

const updateTask = async (req, res) => {
    try {
        const task = await TaskModel.findByPk(req.params.taskId)
        const list = await ListModel.findByPk(task.listId)
        const user = await UserModel.findByPk(list.userId)

        if (user.email === res.locals.user.email) {
            await TaskModel.update(req.body, {
                where: {
                    id: req.params.taskId
                }
            })
        }
        if (!task) return res.status(500).send('No task found')

        res.status(200).send('Task updated successfully')

    } catch (error) {
        console.log(error)
        res.status(500).send('Error updating the task')
    }
}

const deleteTask = async (req, res) => {
    try {
        
        const task = await TaskModel.findByPk(req.params.taskId)
        const list = await ListModel.findByPk(task.listId)
        const user = await UserModel.findByPk(list.userId)

        if (user.email === res.locals.user.email) {
            await TaskModel.destroy({
                where: {
                    id: req.params.taskId
                }
            })

            if (!task) return res.status(500).send('No task found')

            res.status(200).send('Task deleted successfully')
        }

    } catch (error) {
        console.log(error)
        res.status(500).send('Error deleting the task')
    }
}

const getAllTasksOneList= async (req,res)=>{
    try {
        const task = await TaskModel.findAll({
            where:{
                listId: req.params.listId
            }
        })
        
        if(!task) return res.status(500).send("Task not found")

        res.status(200).json(task)

    } catch (error) {
        console.log(error)
        res.status(500).send('Error getting task')
    }
}


module.exports = {
    getAllMyTasks,
    getOneTask,
    createTask,
    updateTask,
    deleteTask,
    getAllTasksOneList
}