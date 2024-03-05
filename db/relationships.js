const UserModel = require('../api/models/user.model')
const ListModel = require('../api/models/list.model')
const TaskModel = require('../api/models/task.model')

const addRelationships = () => {
    try {
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