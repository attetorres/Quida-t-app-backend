const { DataTypes } = require('sequelize')
const sequelize = require('../../db')

const AssignedUsers =  sequelize.define("assignedUsers",{
     id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    }
})


module.exports = AssignedUsers