'use strict'
const config = require('./../../config')
const db = require('./../../store')

class ApproveUserService {
  constructor () {
    db(config.db).then(service => {
      this.service = service
    })
  }

  /**
   * List of approve users
   */
  async get () {
    return this.service.approveUser.findAll()
  }

  /**
   * Get specific approve user by id
   */
  async getById (id) {
    return this.service.approveUser.findById(id)
  }

  /**
   * Update specific approve user by id
   */
  async update (id, approveUser) {
    approveUser.id = id
    approveUser.updatedAt = new Date()
    return this.service.approveUser.update(approveUser)
  }

  /**
   * Create approve user
   */
  async create (approveUser) {
    approveUser.createdAt = new Date()
    return this.service.approveUser.create(approveUser)
  }
}

module.exports = ApproveUserService
