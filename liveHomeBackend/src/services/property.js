'use strict'

const config = require('./../../config')
const db = require('./../../store')

class PropertyService {
  constructor () {
    db(config.db).then(service => {
      this.service = service
    })
  }

  /**
   * List of property
   */
  async get () {
    return this.service.properties.findAll()
  }

  /**
   * Get specific property
   * @param {*} id
   */
  async getById (id) {
    return this.service.properties.findById(id)
  }

  /**
   * Update specific property
   * @param {*} id
   * @param {*} property
   */
  async update (id, property) {
    property.id = id
    property.updated = new Date()
    return this.service.properties.update(property)
  }

  /**
   * Create property
   * @param {*} property
   */
  async create (property, files) {
    console.log(files.length)
    property.createdAt = new Date()
    return this.service.properties.create(property)
  }
}

module.exports = PropertyService
