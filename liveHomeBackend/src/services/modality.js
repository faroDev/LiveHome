'use strict'
const config = require('./../../config')
const db = require('./../../store')

class ModalityService {
  constructor () {
    db(config.db).then(service => {
      this.service = service
    })
  }

  /**
   * List of modalities
   */
  async get () {
    return this.service.modality.findAll()
  }

  /**
   * Get specific modality by id
   */
  async getById (id) {
    return this.service.modality.findById(id)
  }

  /**
   * Update specific modality by id
   */
  async update (id, modality) {
    modality.id = id
    modality.updatedAt = new Date()
    return this.service.modality.update(modality)
  }

  /**
   * Create modality
   */
  async create (modality) {
    modality.createdAt = new Date()
    return this.service.modality.create(modality)
  }
}

module.exports = ModalityService
