const router = require('express').Router()

const AuthRouter = require('./auth.routes')
const UserRouter = require('./user.routes')

const { checkAuth } = require('../middlewares/checkAuth.middleware')

router.use('/auth', AuthRouter)
router.use('/users', checkAuth, UserRouter)

module.exports = router