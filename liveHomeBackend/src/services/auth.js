'use strict'
const bcrypt = require('bcrypt')
const config = require('./../../config')
const db = require('./../../store')

class AuthService {
  constructor () {
    db(config.db).then(service => {
      this.service = service
    })
  }

  /**
   * Create user
   */
  async create (auth) {
    const { password } = auth
    auth.createAt = new Date()
    auth.password = await bcrypt.hash(password, 10)
    return this.service.auth.create(auth)
  }
}

module.exports = AuthService
