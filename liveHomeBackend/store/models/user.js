'use strict'

const Sequelize = require('sequelize')
const setupDatabase = require('../lib/db')

module.exports = function setupUser(config) {
  const sequelize = setupDatabase(config)

  return sequelize.define('user', {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: Sequelize.STRING,
      allowNull: true
    },
    lastName: {
      type: Sequelize.STRING,
      allowNull: true
    },
    secondLastName: {
      type: Sequelize.STRING,
      allowNull: true
    },
    documentType: {
      type: Sequelize.STRING,
      allowNull: true
    },
    documentNumber: {
      type: Sequelize.NUMBER,
      allowNull: true
    },
    phone: {
      type: Sequelize.NUMBER,
      allowNull: true
    },
    status: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: true
    }
  })
}
