'use strict'

const config = require('./../../config')
const db = require('./../../store/index')

class PropertyTypeService {
  constructor () {
    db(config.db).then(service => {
      this.service = service
    })
  }

  /**
   * List of property type
   */
  async get () {
    return []
  }

  /**
   * Get specific property type
   * @param {*} id
   */
  async getById (id) {
    return {}
  }

  /**
   * Update specific property type
   * @param {*} id
   * @param {*} propertyType
   */
  async update (id, propertyType) {
    return {}
  }

  /**
   * Create property type
   * @param {*} propertyType
   */
  async create (propertyType) {
    return {}
  }
}

module.exports = PropertyTypeService
