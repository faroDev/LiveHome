'use strict'

const config = require('./../../config')
const db = require('./../../store')

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
    return this.service.propertyType.findAll()
  }

  /**
   * Get specific property type
   * @param {*} id
   */
  async getById (id) {
    return this.service.propertyType.findById(id)
  }

  /**
   * Update specific property type
   * @param {*} id
   * @param {*} propertyType
   */
  async update (id, propertyType) {
    propertyType.id = id
    propertyType.updatedAt = new Date()
    return this.service.propertyType.update(propertyType)
  }

  /**
   * Create property type
   * @param {*} propertyType
   */
  async create (propertyType) {
    propertyType.createdAt = new Date()
    return this.service.propertyType.create(propertyType)
  }
}

module.exports = PropertyTypeService
