'use strict'
const config = require('./../../config')
const db = require('./../../store')

class FavoriteService {
  constructor () {
    db(config.db).then(service => {
      this.service = service
    })
  }

  /**
   * List of favorites
   */
  async get () {
    return this.service.favorites.findAll()
  }

  /**
   * Get specific favorites by id
   */
  async getById (id) {
    return this.service.favorites.findById(id)
  }

  /**
   * Update specific favorites by id
   */
  async update (id, favorite) {
    favorite.id = id
    favorite.updatedAt = new Date()
    return this.service.favorites.update(favorite)
  }

  /**
   * Create favorite
   */
  async create (favorite) {
    favorite.createdAt = new Date()
    favorite.date = new Date()
    console.log('favorite ', favorite)

    return this.service.favorites.create(favorite)
  }
}

module.exports = FavoriteService
