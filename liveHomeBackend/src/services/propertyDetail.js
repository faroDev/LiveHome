'use strict'

const config = require('./../../config')
const db = require('./../../store')

class PropertyDetailService {
  constructor () {
    this.service = db(config.db)
  }

  /**
   * List of property detail
   */
  async get () {
    return (await this.service).propertyDetail.findAll()
  }

  /**
   * Get specific property detail
   * @param {*} id
   */
  async getById (id) {
    return (await this.service).propertyDetail.findById(id)
  }

  /**
   * Update specific property detail
   * @param {*} id
   * @param {*} propertyDetail
   */
  async update (id, propertyDetail) {
    propertyDetail.id = id
    propertyDetail.updatedAt = new Date()
    return (await this.service).propertyDetail.update(propertyDetail)
  }

  /**
   * Create property detail
   * @param {*} propertyDetail
   */
  async create (propertyDetail) {
    propertyDetail.createdAt = new Date()
    return (await this.service).propertyDetail.create(propertyDetail)
  }
}

module.exports = PropertyDetailService
