'use strict'
const { Op } = require('sequelize')
const { getQuery } = require('./../../utils')

module.exports = function setupPropertiesService(propertyModel, userModel, modalityModel, propertyDetailModel, filesModel) {
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

  function findAll(query) {
    query = getQuery(query)
    return propertyModel.findAll({
      include: [
        {
          attributes: ['id', 'url'],
          model: filesModel
        }
      ],
      where: query
    })
  }

  function userProperties(userId) {
    return propertyModel.findAll({
      attributes: ['id', 'm2', 'm2build', 'statusId', 'createdAt'],
      include: [
        {
          attributes: ['id', 'url', 'fileType'],
          model: filesModel
        }
      ],
      where: {
        userId: userId,
        statusId: 2 // approved
      }
    })
  }

  function getPropertiesByIds(ids) {
    return propertyModel.findAll({
      include: [
        {
          attributes: ['url', 'fileType'],
          model: filesModel
        }
      ],
      where: {
        id: {
          [Op.in]: [...ids]
        },
        statusId: 2 // approved
      }
    })
  }

  function propertiesHomeQuery(obj) {
    console.log(obj)
    const { propertyTypeId, modalityTypeId, zoneId } = obj
    let prop = {}
    if (propertyTypeId) {
      prop = {
        zoneId,
        propertyTypeId,
        statusId: 2
      }
    } else {
      prop = {

        zoneId,
        statusId: 2
      }
    }

    return propertyModel.findAll({
      attributes: ['*'],
      where: prop,
      include: [
        (modalityTypeId) ? {
          attributes: ['*'],
          model: modalityModel,
          where: {
            modalityTypeId
          }
        } : {
            attributes: ['*'],
            model: modalityModel

          }
      ],
      include: [
        {
          attributes: ['id', 'url'],
          model: filesModel
        }
      ],
      raw: true
    })
  }
  return {

    findById,
    findAll,
    update,
    create,
    userProperties,
    getPropertiesByIds,
    propertiesHomeQuery
  }
}
