const UserModel = require('../api/models/user.model')
const ListModel = require('../api/models/list.model')
const TaskModel = require('../api/models/task.model')
//const AssignedUsers = require("../api/models/assignedUser.model")
//const RegistryTask = require("../api/models/registryTask.model")

const addRelationships = () => {
    try {
        //UserModel.belongsToMany(ListModel, { through: AssignedUsers })
        //ListModel.belongsToMany(UserModel, { through: AssignedUsers })

        //AssignedUsers.belongsToMany(TaskModel, { through: RegistryTask })
        //TaskModel.belongsToMany(AssignedUsers, { through: RegistryTask })

        UserModel.hasMany(ListModel)
        ListModel.belongsTo(UserModel)

        ListModel.hasMany(TaskModel)
        TaskModel.belongsTo(ListModel)
        
       
        
    } catch (error) {
        console.log(error)
        throw new Error(error)
        
    }

}


module.exports = addRelationships