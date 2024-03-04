const { DataTypes } = require('sequelize')
const sequelize = require('../../db')

const UserModel = sequelize.define('user', {
    username: {
        type: DataTypes.STRING,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastname: {
        type: DataTypes.STRING,
        allowNull: false
    },
    pass: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        isEmail: true
    },
    colegiate: {
        type: DataTypes.STRING,
    },
    validate: {
        type: DataTypes.BOOLEAN,
    },
    role: {
        type: DataTypes.STRING,
        defaultValue: 'user',
        validate: {
            isIn: [[undefined, 'admin', 'psychologist', 'patient']]
        }
    },
    phone: {
        type: DataTypes.INTEGER,
        validate: {
            min: 9,
            max: 9
        }
    },
    psychologist: {
        type: DataTypes.INTEGER,
    },
    created_at: {
        type: DataTypes.DATE,
    },
    updated_at: {
        type: DataTypes.DATE
    }

})

module.exports = UserModel
