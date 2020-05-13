'use strict'
const config = require('./../../config')
const db = require('./../../store')

class AuthService {
  constructor () {
    this.service = db(config.db)
  }

  /**
   * Create user
   */
  async create (auth) {
    // to do
    // const (await this.service).auth.create(auth)
    // user with type user client and auth id
    // (await this.service).user.create(user)
    // return (await this.service).user.create(user)
  }
}

module.exports = AuthService
