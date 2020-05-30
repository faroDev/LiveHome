'use strict'
const bcrypt = require('bcrypt')
const config = require('./../../config')
const db = require('./../../store')

class AuthService {
  constructor () {
    this.service = db(config.db)
  }

  /**
   * Create auth
   */
  async create (auth) {
    const { password } = auth
    auth.createAt = new Date()
    auth.password = await bcrypt.hash(password, 10)
    return (await this.service).auth.create(auth)
  }

  /**
   * Find by email
   */
  async findByEmail (email) {
    return (await this.service).auth.findByEmail(email)
  }
}

module.exports = AuthService
