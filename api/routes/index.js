const router = require('express').Router()

const AuthRouter = require('./auth.routes')
const UserRouter = require('./user.routes')
const ListRouter = require('./list.routes')
const TaskRouter = require('./task.routes')

const { checkAuth, checkAdmin, checkPsycho } = require('../middlewares/checkAuth.middleware')

router.use('/auth', AuthRouter)
router.use('/user/list', checkAuth, TaskRouter)
router.use('/user/lists', checkAuth, ListRouter)
router.use('/users', checkAuth, UserRouter)

module.exports = router