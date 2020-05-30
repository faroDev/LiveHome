'use strict'

const config = require('./../../config')
const db = require('./../../store/index')

class UsersTypeService {
  constructor () {
    db(config.db).then(service => {
      this.service = service
    })
  }

  /**
   * List of users type
   */
  async get () {
    return this.service.typeUser.findAll()
  }

  /**
   * Get specific user type by id
   */
  async getById (id) {
    return this.service.typeUser.findById(id)
  }

  /**
   * Update specific user type by id
   */
  async update (id, userType) {
    userType.id = id
    userType.updatedAt = new Date()
    console.log(userType)

    return this.service.typeUser.update(userType)
  }

  /**
   * Create user type
   */
  async create (userType) {
    userType.createdAt = new Date()
    return this.service.typeUser.create(userType)
  }
}

module.exports = UsersTypeService
