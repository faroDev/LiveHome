'use strict'
const config = require('./../../config')
const db = require('./../../store')

class UserService {
  constructor () {
    this.service = db(config.db)
  }

  /**
   * List of users
   */
  async get () {
    return (await this.service).user.findAll()
  }

  /**
   * Get specific user by id
   */
  async getById (id) {
    return (await this.service).user.findById(id)
  }

  /**
   * Update specific user by id
   */
  async update (id, user) {
    return (await this.service).user.update(id, user)
  }

  /**
   * Create user
   */
  async create (user) {
    return (await this.service).user.create(user)
  }
}

module.exports = UserService
