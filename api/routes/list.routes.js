const router = require('express').Router()

const { createList, getAllLists, getOneList } = require('../controllers/list.controller')

router.post('/createdList', createList)

router.get('/', getAllLists)
router.get('/:listId', getOneList )



module.exports = router