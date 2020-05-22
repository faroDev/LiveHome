'use strict'

const { Op } = require('sequelize')

/**
 * Create query for sequalize
 * @param {*} query
 */
function getQuery (query) {
  const newQuery = {}
  for (var [key, value] of Object.entries(query)) {
    if (value.length > 1) {
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
