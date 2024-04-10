const router = require('express').Router()

const { 
    createList, 
    getAllLists, 
    getOneList, 
    updateList, 
    deleteList, 
    getMyLists, 
    assignList,
    listAssignedPsychologist 
} = require('../controllers/list.controller')

router.post('/', createList)
router.post('/:listId/:userId', assignList)

router.get('/', getAllLists)
router.get('/listAssigned', listAssignedPsychologist)
router.get('/myLists', getMyLists)
router.get('/:listId', getOneList)

router.put('/:listId', updateList)

router.delete('/:listId', deleteList)


module.exports = router