const router = require('express').Router()

const AuthRouter = require('./auth.routes')
const UserRouter = require('./user.routes')
const ListRouter = require ('./list.routes')

const { checkAuth, checkAdmin, checkPsycho } = require('../middlewares/checkAuth.middleware')

router.use('/auth', AuthRouter)
router.use('/users', checkAuth, UserRouter)
router.use('/users/list', checkAuth, ListRouter)

module.exports = router