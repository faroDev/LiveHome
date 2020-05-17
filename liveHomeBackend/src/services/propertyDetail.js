'use strict'

const config = require('./../../config')
const db = require('./../../store')

class PropertyDetailService {
  constructor () {
    db(config.db).then(service => {
      this.service = service
    })
  }

  /**
   * List of property detail
   */
  async get () {
    return this.service.propertyDetail.findAll()
  }

  /**
   * Get specific property detail
   * @param {*} id
   */
  async getById (id) {
    return this.service.propertyDetail.findById(id)
  }

  /**
   * Update specific property detail
   * @param {*} id
   * @param {*} propertyDetail
   */
  async update (id, propertyDetail) {
    propertyDetail.id = id
    propertyDetail.updatedAt = new Date()
    return this.service.propertyDetail.update(propertyDetail)
  }

  /**
   * Create property detail
   * @param {*} propertyDetail
   */
  async create (propertyDetail) {
    propertyDetail.createdAt = new Date()
    return this.service.propertyDetail.create(propertyDetail)
  }
}

module.exports = PropertyDetailService
