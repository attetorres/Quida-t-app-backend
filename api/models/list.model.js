const { DataTypes } = require('sequelize')
const sequelize = require('../../db')

const ListModel = sequelize.define('list', {
    title: {
        type: DataTypes.STRING
    },
    description: {
        type: DataTypes.STRING,
        validate: {
            max: 250
        }
    },
    userId: {
        type: DataTypes.INTEGER
    },
    cycle: {
        type: DataTypes.STRING,
        validate: {
            isIn: [[undefined, 'Daily', 'Weekly', 'Monthly']]
        }
    }
})


module.exports = ListModel
