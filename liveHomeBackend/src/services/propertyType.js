'use strict'

const config = require('./../../config')
const db = require('./../../store')

class PropertyTypeService {
  constructor () {
    this.service = db(config.db)
  }

  /**
   * List of property type
   */
  async get () {
    return (await this.service).propertyType.findAll()
  }

  /**
   * Get specific property type
   * @param {*} id
   */
  async getById (id) {
    return (await this.service).propertyType.findById(id)
  }

  /**
   * Update specific property type
   * @param {*} id
   * @param {*} propertyType
   */
  async update (id, propertyType) {
    propertyType.id = id
    propertyType.updatedAt = new Date()
    return (await this.service).propertyType.update(propertyType)
  }

  /**
   * Create property type
   * @param {*} propertyType
   */
  async create (propertyType) {
    propertyType.createdAt = new Date()
    return (await this.service).propertyType.create(propertyType)
  }
}

module.exports = PropertyTypeService
