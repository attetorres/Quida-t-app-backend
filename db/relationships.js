const UserModel = require('../api/models/user.model')
const ListModel = require('../api/models/list.model')

const addRelationships = () => {
    try {
        UserModel.hasMany(ListModel)
        ListModel.belongsTo(UserModel)

        
    } catch (error) {
        console.log(error)
        throw new Error(error)
        
    }

}


module.exports = addRelationships