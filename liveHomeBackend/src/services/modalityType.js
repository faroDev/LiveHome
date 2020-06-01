'use strict'

const config = require('./../../config')
const db = require('./../../store')

class ModalityTypeService {
  constructor () {
    db(config.db).then(service => {
      this.service = service
    })
  }

  /**
   * List of modality type
   */
  async get () {
    return this.service.modalityType.findAll()
  }

  /**
   * Get specific modality type
   * @param {*} id
   */
  async getById (id) {
    return this.service.modalityType.findById(id)
  }

  /**
   * Update specific modality type
   * @param {*} id
   * @param {*} modalityType
   */
  async update (id, modalityType) {
    modalityType.id = id
    modalityType.updatedAt = new Date()
    return this.service.modalityType.update(modalityType)
  }

  /**
   * Create modality type
   * @param {*} modalityType
   */
  async create (modalityType) {
    modalityType.createdAt = new Date()
    return this.service.modalityType.create(modalityType)
  }
}

module.exports = ModalityTypeService
