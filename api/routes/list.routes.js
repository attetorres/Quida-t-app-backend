const router = require('express').Router()

const { createList } = require('../controllers/list.controller')

router.post('/createdList', createList)



module.exports = router