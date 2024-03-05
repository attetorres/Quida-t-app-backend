const router = require('express').Router()

const { createList, getAllLists, getOneList, updateList, deleteList } = require('../controllers/list.controller')


router.post('/createdList', createList)

router.get('/', getAllLists) // privacy: public/private column missing

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


router.get('/:listId', getOneList)

router.delete('/:listId', deleteList)

router.put('/:listId', updateList)




module.exports = router