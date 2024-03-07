const router = require('express').Router()

//const { checkListCreator } = require('../middlewares/checkAuth.middleware')


const {
    getAllTasks,
    getOneTask,
    createTask,
    updateTask,
    deleteTask,
    getAllTasksOneList
} = require('../controllers/task.controller')

router.get('/', getAllTasks) //check 
router.get('/:listId/:taskId', getOneTask) //check
router.get('/:listId', getAllTasksOneList)//check

router.post('/:listId', createTask) // check

router.put('/:listId/:taskId',  updateTask) // check

router.delete('/:listId/:taskId', deleteTask) // check


module.exports = router