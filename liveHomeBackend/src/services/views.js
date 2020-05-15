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
   * Get specific files by id
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
}

module.exports = ViewsService
