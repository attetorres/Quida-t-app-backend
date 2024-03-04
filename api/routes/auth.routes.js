const router = require('express').Router()
const { signUp, login }  = require('../controlls/auth.controller')


router.post('/signup', signUp)
router.post('/login', login )

module.exports = router