'use strict'
const { Op } = require('sequelize')
module.exports = function setupPropertiesService(propertyModel, userModel) {

  async function create(property) {
    property.updatedAt = new Date()
    property.createdAt = new Date()

    const result = await propertyModel.create(property)
    return result.toJSON({ raw: true })
  }

  async function update(property) {
    const cond = {
      where: {
        id: property.id
      }
    }

    property.updatedAt = new Date()
    await propertyModel.update(property, cond)
    const exitingproperty = await propertyModel.findOne(cond)
    return exitingproperty
  }

  function findById(id) {
    return propertyModel.findByPk(id, { raw: true })
  }

  function findAll() {
    return propertyModel.findAll({ raw: true })
  }

  function userProperties(userId) {
    return propertyModel.findAll({
      attributes: ['id', 'm2', 'approved'],
      include: [{
        attributes: ['name'],
        model: userModel,
        where: {
          id: userId
        }
      }],
      raw: true
    })
  }

  return {
    findById,
    findAll,
    update,
    create,
    userProperties
  }
}
