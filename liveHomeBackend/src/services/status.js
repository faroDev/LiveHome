'use strict'

const config = require('./../../config')
const db = require('./../../store/index')

class StatusService {
  constructor () {
    db(config.db).then(service => {
      this.service = service
    })
  }

  /**
   * List of status
   */
  async get () {
    return this.service.status.findAll()
  }

  /**
   * Get specific status by id
   */
  async getById (id) {
    return this.service.status.findById(id)
  }

  /**
   * Update specific status by id
   */
  async update (id, status) {
    status.id = id
    status.updatedAt = new Date()
    return this.service.status.update(status)
  }

  /**
   * Create status
   */
  async create (status) {
    status.createdAt = new Date()
    return this.service.status.create(status)
  }
}

module.exports = StatusService
