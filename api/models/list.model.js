const { DataTypes } = require('sequelize')
const sequelize = require('../../db')

const ListModel = sequelize.define('lsit', {
    title: {
        type: DataTypes.STRING
    },
    description: {
        type: DataTypes.STRING,
        validate: {
            max: 250
        }
    },
    creator_user_id: {
        type: DataTypes.INTEGER
    },
    cycle: {
        type: DataTypes.STRING,
        validate: {
            isIn: [[undefined, 'Diary', 'Weekly', 'Monthly']]
        }
    }
})


module.exports = ListModel