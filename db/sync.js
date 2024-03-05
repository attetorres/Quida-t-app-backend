const UserModel = require('../api/models/user.model')
const ListModel = require('../api/models/list.model')


const dbSync = async () => {
    try {
        //await UserModel.sync({force: true})
        //await ListModel.sync({force: true})
    } catch (error) {
        console.log(error)
        throw new Error(error)
    }
}

module.exports = dbSync