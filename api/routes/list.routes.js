const router = require('express').Router()

const { createList, getAllLists, getOneList, updateList, deleteList } = require('../controllers/list.controller')

router.post('/createdList', createList)

router.get('/', getAllLists)
router.get('/:listId', getOneList )

router.delete('/:listId', deleteList)
router.put('/:listId', updateList)




module.exports = router