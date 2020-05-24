'use strict'

const config = require('./../../config')
const db = require('./../../store')

class PropertyService {
  constructor() {
    db(config.db).then(service => {
      this.service = service
    })
  }

  /**
   * List of property
   * @param {*} query
   */
  async get(query) {
    return this.service.properties.findByQuery(query)
  }

  /**
   * Get specific property
   * @param {*} id
   */
  async getById(id) {
    return this.service.properties.findById(id)
  }

  /**
   * Update specific property
   * @param {*} id
   * @param {*} property
   */
  async update(id, property) {
    property.id = id
    property.updated = new Date()
    return this.service.properties.update(property)
  }

  /**
   * Create property
   * @param {*} property
   */
  async create(property) {
    property.createdAt = new Date()
    return this.service.properties.create(property)
  }

  /**
  * Home Page properties
  * @param {*} propertyTypeId
  * @param {*} modalTypeId
  * @param {*} location
  * Return properties filtered by query
  */

  async homeQuery(obj) {
    return this.service.properties.propertiesHomeQuery(obj)
  }

}

module.exports = PropertyService
