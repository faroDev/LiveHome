'use strict'

const config = require('./../../config')
const db = require('./../../store/index')

class UsersTypeService {
  constructor () {
    this.service = db(config.db)
  }

  /**
   * List of users type
   */
  async get () {
    return (await this.service).typeUser.findAll()
  }

  /**
   * Get specific user type by id
   */
  async getById (id) {
    return (await this.service).typeUser.findById(id)
  }

  /**
   * Update specific user type by id
   */
  async update (id, userType) {
    return (await this.service).typeUser.update(id, userType)
  }

  /**
   * Create user type
   */
  async create (userType) {
    return (await this.service).typeUser.create(userType)
  }
}

module.exports = UsersTypeService
