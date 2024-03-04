const router = require('express').Router()
const AuthRouter = require('./auth.routes')

router.use('/auth', AuthRouter)

module.exports = router