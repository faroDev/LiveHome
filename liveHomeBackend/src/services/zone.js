'use strict'

const config = require('../../config')
const db = require('../../store/index')

class ZoneService {
  constructor () {
    db(config.db).then(service => {
      this.service = service
    })
  }

  /**
   * List of Zone
   */
  async get () {
    return this.service.zones.findAll()
  }

  /**
   * Get specific Zone by id
   */
  async getById (id) {
    return this.service.zones.findById(id)
  }

  /**
   * Update specific Zone by id
   */
  async update (id, zone) {
    zone.id = id
    zone.updatedAt = new Date()
    return this.service.zones.update(zone)
  }

  /**
   * Create Zone
   */
  async create (zone) {
    zone.createdAt = new Date()
    return this.service.zones.create(zone)
  }
}

module.exports = ZoneService
