const UserModel = require('../api/models/user.model')


const dbSync = async () => {
    try {
        //await UserModel.sync({force: true})
    } catch (error) {
        console.log(error)
        throw new Error(error)
    }
}

module.exports = dbSync