const router = require('express').Router()

const AuthRouter = require('./auth.routes')
const UserRouter = require('./user.routes')
const ListRouter = require('./list.routes')
const TaskRouter = require('./task.routes')

const { checkAuth } = require('../middlewares/checkAuth.middleware')

router.use('/auth', AuthRouter) // check
router.use('/tasks', checkAuth, TaskRouter)
router.use('/lists', checkAuth, ListRouter)
router.use('/users', checkAuth, UserRouter) //check

module.exports = router