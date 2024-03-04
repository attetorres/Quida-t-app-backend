const router = require('express').Router()
const { singUp, login }  = require('../controlls/auth.controller')


router.post('/singup', singUp)
router.post('/login', login )

module.exports = router