'use strict'
const { Op } = require('sequelize')
module.exports = function setupPropertiesService (propertyModel, userModel, modalityModel, propertyDetailModel, filesModel) {
  async function create (property) {
    property.updatedAt = new Date()
    property.createdAt = new Date()

    const result = await propertyModel.create(property)
    return result.toJSON({ raw: true })
  }

  async function update (property) {
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

  function findById (id) {
    return propertyModel.findByPk(id, { raw: true })
  }

  function findAll () {
    return propertyModel.findAll({
      include: [
        {
          attributes: ['url', 'fileType'],
          model: filesModel
        }
      ]
    })
  }

  function userProperties (userId) {
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

  function getPropertiesByIds (ids) {
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
  function propertiesHomeQuery (obj) {
    const { propertyTypeId, modalTypeId, location } = obj
    let prop = {}
    if (propertyTypeId) {
      prop = {
        propertyTypeId,
        statusId: 2
      }
    } else {
      prop = {
        statusId: 2
      }
    }

    return propertyModel.findAll({
      attributes: ['*'],
      where: prop,
      include: [
        {
          attributes: ['*'],
          model: modalityModel,
          where: {
            modalTypeId
          }
        },
        (location) ? {
          attributes: ['*'],
          model: propertyDetailModel,
          where: {
            [Op.or]: [
              { city: { [Op.iLike]: `%${location}%` } },
              { neighborhood: { [Op.iLike]: `%${location}%` } }
            ]

          }

        }
          : {
            attributes: ['*'],
            model: propertyDetailModel
          },
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
