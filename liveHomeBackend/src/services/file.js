'use strict'
const config = require('./../../config')
const db = require('./../../store')

class FileService {
  constructor () {
    db(config.db).then(service => {
      this.service = service
    })
  }

  /**
   * List of files
   */
  async get () {
    return this.service.files.findAll()
  }

  /**
   * Get specific files by id
   */
  async getById (id) {
    return this.service.files.findById(id)
  }

  /**
   * Update specific files by id
   */
  async update (id, file) {
    file.id = id
    file.updatedAt = new Date()
    return this.service.files.update(file)
  }

  /**
   * Create file
   */
  async create (file) {
    file.createdAt = new Date()
    return this.service.files.create(file)
  }
}

module.exports = FileService
