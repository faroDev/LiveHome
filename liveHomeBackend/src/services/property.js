'use strict'

const config = require('./../../config')
const db = require('./../../store/index')

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
    return []
  }

  /**
   * Get specific property
   * @param {*} id
   */
  async getById (id) {
    return {}
  }

  /**
   * Update specific property
   * @param {*} id
   * @param {*} property
   */
  async update (id, property) {
    return {}
  }

  /**
   * Create property
   * @param {*} property
   */
  async create (property) {
    return {}
  }
}

module.exports = PropertyService
