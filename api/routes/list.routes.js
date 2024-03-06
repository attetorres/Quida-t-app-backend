const router = require('express').Router()

const { createList, getAllLists, getOneList, updateList, deleteList } = require('../controllers/list.controller')


router.post('/', createList) //check 

router.get('/', getAllLists) // check doesnt return creator (for privacy)



router.get('/:listId', getOneList)

router.delete('/:listId', deleteList)

router.put('/:listId', updateList)

// USBAT all lists created by themselves


// USBAT all lists assigned to them


// USBAT copy a list copyList()
    // userId via token
    // listId via param
    //
    // list via findByPk (/:listId)
    //
    // createList via router.post('/createdList', createList)
    //      ListModel.create(list, creator = userId via token)
    // 



module.exports = router