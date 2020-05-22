'use strict'
const config = require('./../../config')
const db = require('./../../store')

class UserService {
  constructor () {
    db(config.db).then(service => {
      this.service = service
    })
  }

  /**
   * List of users
   */
  async get (query) {
    return this.service.user.findAll(query)
  }

  /**
   * Get specific user by id
   */
  async getById (id) {
    return this.service.user.findById(id)
  }

  /**
   * Update specific user by id
   */
  async update (id, user) {
    user.id = id
    user.updatedAt = new Date()
    return this.service.user.update(user)
  }

  /**
   * Create user
   */
  async create (user) {
    user.createdAt = new Date()
    return this.service.user.create(user)
  }
}

module.exports = UserService
