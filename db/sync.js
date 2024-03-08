const UserModel = require('../api/models/user.model')
const ListModel = require('../api/models/list.model')
const TaskModel = require('../api/models/task.model')
const AssignedUsers = require("../api/models/assignedUser.model")
const RegistryTask = require('../api/models/registryTask.model')
const sequelize = require('./index')



const dbSync = async () => {
    try {
        // await sequelize.sync({alter:true})
        // await UserModel.sync({alter: true})
        // await sequelize.sync({alter: true})
        // await UserModel.sync({alter: true})
        // await ListModel.sync({alter: true})
        // await TaskModel.sync({alter: true})
        // await AssignedUsers.sync({alter: true})
        // await RegistryTask.sync({alter: true})
    } catch (error) {
        console.log(error)
        throw new Error(error)
    }
}

module.exports = dbSync