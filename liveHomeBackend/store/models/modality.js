'use strict'

const Sequelize = require('sequelize')
const setupDatabase = require('../lib/db')

module.exports = function setupModality (config) {
  const sequelize = setupDatabase(config)

  return sequelize.define('modality', {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true

    },
    pricem2: {
      type: Sequelize.DECIMAL,
      allowNull: true
    },
    pricePerMoth: {
      type: Sequelize.DECIMAL,
      allowNull: true
    },
    totalPrice: {
      type: Sequelize.DECIMAL,
      allowNull: true
    }

  })
}
