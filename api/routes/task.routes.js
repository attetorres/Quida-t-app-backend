const router = require('express').Router()

const {
    getAllTasks,
    getOneTask,
    createTask,
    updateTask,
    deleteTask
} = require('../controllers/task.controller')

module.exports = router