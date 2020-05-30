'use strict'

const { Op } = require('sequelize')

function validateValueType (value) {
  const number = parseInt(value)
  const valueOfQuery = number !== 'NaN' ? number : value
  return valueOfQuery
}

/**
 * Create query for sequalize
 * @param {*} query
 */
function getQuery (query) {
  delete query.inSession
  const newQuery = {}
  for (const [key, value] of Object.entries(query)) {
    if (Array.isArray(value)) {
      const betweenCondition = { [Op.between]: value }
      newQuery[key] = betweenCondition
    } else {
      newQuery[key] = value
    }
  }
  return newQuery
}

/**
 * Create query for sequalize for modality model
 * @param {*} query
 */
function getQueryForModality (query) {
  delete query.inSession
  const newQuery = {}
  for (const [key, value] of Object.entries(query)) {
    if (key === 'pricem2' || key === 'pricePerMoth' || key === 'totalPrice' || key === 'modalityTypeId') {
      if (Array.isArray(value)) {
        const betweenCondition = { [Op.between]: value }
        newQuery[key] = betweenCondition
      } else {
        newQuery[key] = newQuery[key] = validateValueType(value)
      }
    }
  }
  return newQuery
}

/**
 * Create query for sequalize for modality model
 * @param {*} query
 */
function getQueryForProperty (query) {
  delete query.inSession
  delete query.pricem2
  delete query.pricePerMoth
  delete query.totalPrice
  delete query.modalityTypeId

  const newQuery = {}
  for (const [key, value] of Object.entries(query)) {
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
  getQuery,
  getQueryForModality,
  getQueryForProperty
}
