'use strict'

const config = require('./../../config')
const db = require('./../../store')

class PropertyService {
  constructor () {
    db(config.db).then(service => {
      this.service = service
    })
  }

  /**
   * List of property
   * @param {*} query
   */
  async get (query) {
    return this.service.properties.findAll(query)
      .then(property => {
        property.map(p => {
          p.dataValues.favorites = p.dataValues.favorites ? p.dataValues.favorites.length > 0 : false
          return p
        })
        return property
      })
  }

  /**
   * Get specific property
   * @param {integer} id property id
   * * @param {integer} inSession id of user in session
   */
  async getById (id, inSession) {
    return this.service.properties.findById(id, inSession)
      .then(property => {
        property.dataValues.favorites = property.dataValues.favorites ? property.dataValues.favorites.length > 0 : false
        return property
      })
  }

  /**
   * Get properties by id
   * @param {*} id
   */
  async getByUserId (id) {
    return this.service.properties.userProperties(id)
  }

  /**
   * Update specific property
   * @param {*} id
   * @param {*} property
   */
  async update (id, property) {
    property.id = id
    property.updated = new Date()
    return this.service.properties.update(property)
  }

  /**
   * Create property
   * @param {*} property
   */
  async create (property) {
    property.createdAt = new Date()
    return this.service.properties.create(property)
  }

  /**
  * Home Page properties
  * @param {*} propertyTypeId
  * @param {*} modalityTypeId
  * @param {*} location
  * Return properties filtered by query
  */

  async homeQuery (obj) {
    return this.service.properties.propertiesHomeQuery(obj)
      .then(property => {
        property.map(p => {
          p.dataValues.favorites = p.dataValues.favorites ? p.dataValues.favorites.length > 0 : false
          return p
        })
        return property
      })
  }
}

module.exports = PropertyService
