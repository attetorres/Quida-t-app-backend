const ListModel = require('../models/list.model')

const createList = async (req, res) => {
    try {
        const list = await ListModel.create(req.body)
        res.status(200).json({ message: 'List created', list: list })

    } catch (error) {
        console.log(error)
        res.status(500).send(error.message)
    }
}

const getAllLists = async (req, res) => {
    try {
        const list = await ListModel.findAll()

        if (!list) {
            return res.status(404).send('List not found')
        }

        return res.status(200).json(list)

    } catch (error) {
        console.log(error)
        res.status(500).send(error.message)
    }
}

const getOneList = async (req, res) => {
    try {
        const list = await ListModel.findByPk(req.params.listId)
        if (list) {
            return res.status(200).json(list)
        } else {
            return res.status(404).send('List not found')
        }
    } catch (error) {
        console.log(error)
        res.status(500).send(error.message)
    }
}

const updateList = async (req, res) => {
    try {

    } catch (error) {
        console.log(error)
        res.status(500).send(error.message)
    }

}

const deleteList = async (req, res) => {
    try {

    } catch (error) {
        console.log(error)
        res.status(500).send(error.message)
    }

}

module.exports = {
    createList,
    getAllLists,
    getOneList,
    updateList,
    deleteList
}