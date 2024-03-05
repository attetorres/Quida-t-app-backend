const { DataTypes } = require('sequelize')
const sequelize = require('../../db')
const UserModel = require('./user.model')
const TaskModel = require('./task.model')


const RegistryTask = sequelize.define("registryTask",{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    taskId: {
        type: DataTypes.INTEGER,
        references: { 
            model: UserModel,
            key: "id"
        },
        unique: false
    },
    assignedUserId: {
        type: DataTypes.INTEGER,
        references: { 
            model: TaskModel,
            key: "id"
        },
        unique: false
        
    },
    checkbox: {
        type: DataTypes.BOOLEAN,
        default: false,
    },
    moodRanking: {
        type: DataTypes.INTEGER,
        default: false,
        validate: {
            max: 10,
        }
    },
    closed: {
        type: DataTypes.BOOLEAN,
        default: false
    }

})
module.exports = RegistryTask