const router = require('express').Router()

const {
    getAllMyTasks,
    getOneTask,
    createTask,
    updateTask,
    deleteTask,
    getAllTasksOneList
} = require('../controllers/task.controller')

router.post('/:listId', createTask)

router.get('/', getAllMyTasks) 
router.get('/:listId/:taskId', getOneTask) 
router.get('/:listId', getAllTasksOneList)

router.put('/:listId/:taskId',  updateTask)

router.delete('/:listId/:taskId', deleteTask)


module.exports = router