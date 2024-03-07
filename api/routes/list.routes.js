const router = require('express').Router()

const { createList, getAllLists, getOneList, updateList, deleteList, getMyLists, assignList } = require('../controllers/list.controller')


router.post('/', createList) //check 

router.get('/', getAllLists) // check doesnt return creator (for privacy)

// USBAT get all lists created by themselves
//                  +
// USBAT get all lists assigned to them
router.get('/myLists', getMyLists) // myList check, assignedLists not check 

router.get('/:listId', getOneList) // check

router.delete('/:listId', deleteList) // check

router.put('/:listId', updateList) // check

router.post('/:listId/:userId', assignList) // psycho assigns a list to a patient


module.exports = router