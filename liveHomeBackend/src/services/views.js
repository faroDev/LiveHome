'use strict'
const config = require('./../../config')
const db = require('./../../store')

class ViewsService {
  constructor () {
    db(config.db).then(service => {
      this.service = service
    })
  }

  /**
   * List of files
   */
  async get () {
    return this.service.views.findAll()
  }

  /**
   * Get specific views by id
   */
  async getById (id) {
    return this.service.views.findById(id)
  }

  /**
   * Update specific files by id
   */
  async update (id, view) {
    view.id = id
    view.updatedAt = new Date()
    return this.service.views.update(view)
  }

  /**
   * Create file
   */
  async create (view) {
    view.date = new Date()
    view.counter = 1
    view.createdAt = new Date()
    return this.service.views.create(view)
  }

  /**
   * Get amount of views by user
   */
  async getByUserId (id) {
    const query = {
      userId: id
    }
    return this.service.views.getAmountByQuery(query)
  }

  /**
   * Get amount of views by user id
   */
  async getAmountByUserId (id) {
    const query = {
      userId: parseInt(id)
    }
    return this.service.views.getAmountByQuery(query)
  }

  /**
   * Get amount of favorites by property id
   */
  async getAmountByPropertyId (id) {
    const query = {
      propertyId: parseInt(id)
    }
    return this.service.views.getAmountByQuery(query)
  }

  /**
   * Get data per date by property id
   */
  async getDataPerDateByPropertyId (id) {
    return this.service.views.getDataPerDateByPropertyId(id)
  }
}

module.exports = ViewsService
