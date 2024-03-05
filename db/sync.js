const UserModel = require('../api/models/user.model')
const ListModel = require('../api/models/list.model')
const TaskModel = require('../api/models/task.model')


const dbSync = async () => {
    try {
        //await UserModel.sync({alter: true})
        //await ListModel.sync({alter: true})
        //await TaskModel.sync({alter: true})
    } catch (error) {
        console.log(error)
        throw new Error(error)
    }
}

module.exports = dbSync