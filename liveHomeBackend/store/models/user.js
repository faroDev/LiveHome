'use strict'

const Sequelize = require('sequelize')
const setupDatabase = require('../lib/db')

module.exports = function setupUser (config) {
  const sequelize = setupDatabase(config)

  return sequelize.define('user', {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    lastName: {
      type: Sequelize.STRING,
      allowNull: false
    },
    secondLastName: {
      type: Sequelize.STRING,
      allowNull: true
    },
    // createdAt: {
    //   type: Sequelize.DATE,
    //   allowNull: false
    // },
    // updateAt: {
    //   type: Sequelize.DATE,
    //   allowNull: false
    // },
    status: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: true
    }
  })
}