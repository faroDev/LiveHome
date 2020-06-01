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
    return this.service.favorites.create(favorite)
  }

  /**
   * Get amount of favorites by user id
   * @param {integer} id
   */
  async getAmountByUserId (id) {
    const query = {
      userId: id
    }
    return this.service.favorites.getAmountByQuery(query)
  }

  /**
   * Get amount of favorites by property id
   * @param {integer} id
   */
  async getAmountByPropertyId (id) {
    const query = {
      propertyId: id
    }
    return this.service.favorites.getAmountByQuery(query)
  }

  /**
   * Get favorites by user id
   * @param {integer} id
   */
  async getAllByUserId (id) {
    const favorites = await this.service.favorites.findAllByUserId(id)
    const propertiesId = favorites.map(favorite => favorite.propertyId)
    return this.service.properties.getPropertiesByIds(propertiesId)
  }

  /**
   * Delete favorites by propertyId and userId
   * @param {integer} propertyId
   * @param {integer} userId
   */
  async deleteByPropertyIdAndUserId (propertyId, userId) {
    return this.service.favorites.deleteByPropertyIdAndUserId(propertyId, userId)
  }

  /**
   * Delete favorites by favorite id
   * @param {integer} id
   */
  async delete (id) {
    return this.service.favorites.deleteById(id)
  }
}

module.exports = FavoriteService
