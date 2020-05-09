'use strict'

const usersType = require('../mocks/usersTypeMock')

class UsersTypeService {
  /**
   * List of users type
   */
  async get () {
    return Promise.resolve(usersType)
  }

  /**
   * Get specific user type by id
   */
  async getById (id) {
    const userType = usersType.find(userType => userType.id === parseInt(id))
    return Promise.resolve(userType)
  }

  /**
   * Update specific user type by id
   */
  async update (id, userType) {
    const userTypeToUpdate = usersType.find(userType => userType.id === parseInt(id))

    if (userTypeToUpdate) {
      userTypeToUpdate.name = userType.name
    }

    return Promise.resolve(userTypeToUpdate)
  }

  /**
   * Create user type
   */
  async create (userType) {
    const ids = usersType.map(ut => ut.id)
    const id = Math.max(...ids)
    userType.id = id + 1
    usersType.push(userType)
    return Promise.resolve(userType.id)
  }
}

module.exports = UsersTypeService
