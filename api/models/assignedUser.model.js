const { DataTypes } = require('sequelize')
const sequelize = require('../../db')
const UserModel = require('./user.model')
const ListModel = require('./list.model')

const AssignedUsers =  sequelize.define("assignedUsers",{
     id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    }
    /*
    userId: {
        type: DataTypes.INTEGER,
        references: { 
            model: UserModel,
            key: "id"
        },
        unique: false
    },
    listId: {
        type: DataTypes.INTEGER,
        references: { 
            model: ListModel,
            key: "id"
        },
        unique: false
        
    } */
})

//module.exports = AssignedUsers