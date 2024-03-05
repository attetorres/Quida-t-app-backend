const { DataTypes } = require('sequelize')
const sequelize = require('../../db')

const TaskModel = sequelize.define('task', {
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        
    },
    listId: {
        type: DataTypes.INTEGER,
    
    }

})

module.exports = TaskModel
