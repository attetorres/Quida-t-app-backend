const { DataTypes } = require('sequelize')
const sequelize = require('../../db')

const RegistryTaskModel = sequelize.define("registryTask",{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    checkbox: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
    moodRanking: {
        type: DataTypes.INTEGER,
        defaultValue: false,
        validate: {
            max: 10,
        }
    },
    closed: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    }
})


module.exports = RegistryTaskModel
