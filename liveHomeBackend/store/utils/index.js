'use strict'

const { Op } = require('sequelize')

/**
 * Create query for sequalize
 * @param {*} query
 */
function getQuery (query) {
  const newQuery = {}
  for (let [key, value] of Object.entries(query)) {
    if (Array.isArray(value)) {
      const betweenCondition = { [Op.between]: value }
      newQuery[key] = betweenCondition
    } else {
      newQuery[key] = value
    }
  }
  return newQuery
}

module.exports = {
  getQuery
}
