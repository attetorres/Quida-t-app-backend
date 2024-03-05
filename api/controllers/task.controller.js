const TaskModel = require('../models/task.model')

const createTask = async (req, res) => {
    try {
        const task = await TaskModel.create(req.body)
        res.status(200).json({ message: 'Task created', task: task })

    } catch (error) {
        console.log(error)
        res.status(500).send('Error creating the task')
    }

}

const getAllTasks = async (req, res) => {
    try {
        const tasks = await TaskModel.findAll()
        res.status(200).json(tasks)
    } catch (error) {
        console.log(error)
        res.status(500).send('Error getting all tasks')
    }

}

const getOneTask = async (req, res) => {
    try {
        const task = await TaskModel.findByPk(req.params.taskId)
        res.status(200).json(task)
    } catch (error) {
        console.log(error)
        res.status(500).send('Error getting the task')
    }

}



const updateTask = async (req, res) => {
    try {
        const task = await TaskModel.update(req.body, {
            where: {
                id: req.params.taskId
            }
        })
        res.status(200).send('Task updated successfully')
    } catch (error) {
        console.log(error)
        res.status(500).send('Error updating the task')
    }

}

const deleteTask = async (req, res) => {
    try {
        //to delete a task:
        // we need taskId
        // compare the column listId from said taskiD
        // compare userId of colum creator from said listID
        // compre userId/userEmail with userId/userEmail from token?
        const task = await TaskModel.destroy(req.params.taskId)
        if (!task) return res.status(500).send('No task found')

        res.status(200).send('Task deleted successfully')
    } catch (error) {
        console.log(error)
        res.status(500).send('Error deleting the task')
    }

}

module.exports = {
    getAllTasks,
    getOneTask,
    createTask,
    updateTask,
    deleteTask
}