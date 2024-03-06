const router = require('express').Router()

const { checkListCreator } = require('../middlewares/checkAuth.middleware')


const {
    getAllTasks,
    getOneTask,
    createTask,
    updateTask,
    deleteTask
} = require('../controllers/task.controller')

router.get('/', getAllTasks)
router.get('/:taskId', getOneTask)


router.post('/', checkListCreator, createTask)

router.put('/:taskId', checkListCreator,  updateTask)

router.delete('/:taskId', checkListCreator, deleteTask)

//router.delete('/:taskId', deleteTask)


module.exports = router