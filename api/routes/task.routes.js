const router = require('express').Router()

const {
    getAllTasks,
    getOneTask,
    createTask,
    updateTask,
    deleteTask
} = require('../controllers/task.controller')

router.get('/', getAllTasks)
router.get('/:taskId', getOneTask)


router.post('/:listId/tasks', createTask)

router.put('/:taskId', updateTask)

router.delete('/:taskId', deleteTask)

//router.delete('/:taskId', deleteTask)


module.exports = router