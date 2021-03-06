'use strict'
const { Op } = require('sequelize')
const { getQuery, getQueryForModality, getQueryForProperty } = require('./../../utils')

module.exports = function setupPropertiesService (propertyModel, userModel, modalityModel, propertyDetailModel, filesModel, favoritesModel, modalityTypeModel, authModel) {
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

  function findByIdAndInSession (id, inSession) {
    const includes = [
      {
        attributes: ['id', 'url'],
        model: filesModel
      },
      {
        attributes: ['id', 'pricem2', 'pricePerMoth', 'totalPrice', 'propertyId', 'modalityTypeId'],
        model: modalityModel,
        required: false,
        include: [
          {
            attributes: ['name'],
            model: modalityTypeModel,
            required: false
          }
        ]
      },
      {
        attributes: ['phone'],
        model: userModel,
        required: false,
        include: [
          {
            attributes: ['email'],
            model: authModel
          }
        ]
      },
      {
        attributes: ['id', 'address', 'city', 'urbanization', 'neighborhood', 'longitude', 'latitude'],
        model: propertyDetailModel
      }
    ]

    if (inSession) {
      includes.push({
        attributes: ['id'],
        model: favoritesModel,
        required: false,
        where: {
          userId: inSession
        },
        raw: true
      })
    }

    return propertyModel.findOne({
      include: includes,
      where: {
        id: id
      }
    })
  }

  function findAll (query) {
    const { inSession } = query

    const includes = [
      {
        attributes: ['id', 'url'],
        model: filesModel
      },
      {
        attributes: ['id', 'pricem2', 'pricePerMoth', 'totalPrice', 'propertyId', 'modalityTypeId'],
        model: modalityModel,
        required: false,
        include: [
          {
            attributes: ['name'],
            model: modalityTypeModel,
            required: false
          }
        ]
      },
      {
        attributes: ['phone'],
        model: userModel,
        required: false,
        include: [
          {
            attributes: ['email'],
            model: authModel
          }
        ]
      }
    ]

    if (inSession) {
      includes.push({
        attributes: ['id'],
        model: favoritesModel,
        required: false,
        where: {
          userId: inSession
        },
        raw: true
      })
    }

    query = getQuery(query)
    return propertyModel.findAll({
      include: includes,
      where: query
    })
  }

  function userProperties (userId) {
    return propertyModel.findAll({
      attributes: ['id', 'm2', 'm2build', 'statusId', 'createdAt'],
      include: [
        {
          attributes: ['id', 'url', 'fileType'],
          model: filesModel
        },
        {
          attributes: ['phone'],
          model: userModel,
          required: false,
          include: [
            {
              attributes: ['email'],
              model: authModel
            }
          ]
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
        },
        {
          attributes: ['id', 'pricem2', 'pricePerMoth', 'totalPrice', 'propertyId', 'modalityTypeId'],
          model: modalityModel,
          required: false,
          include: [
            {
              attributes: ['name'],
              model: modalityTypeModel,
              required: false
            }
          ]
        },
        {
          attributes: ['phone'],
          model: userModel,
          required: false,
          include: [
            {
              attributes: ['email'],
              model: authModel
            }
          ]
        }
      ],
      where: {
        id: {
          [Op.in]: [...ids]
        },
        statusId: 2 // approved
      },
      limit: 20
    })
  }

  function propertiesHomeQuery (obj) {
    const { inSession } = obj
    const modalityQuery = getQueryForModality(obj)
    const propertiesQuery = getQueryForProperty(obj)
    const includes = [
      {
        attributes: ['id', 'url'],
        model: filesModel
      },
      {
        attributes: ['id', 'pricem2', 'pricePerMoth', 'totalPrice', 'propertyId', 'modalityTypeId'],
        model: modalityModel,
        required: false,
        include: [
          {
            attributes: ['name'],
            model: modalityTypeModel,
            required: false
          }
        ],
        where: modalityQuery
      },
      {
        attributes: ['phone'],
        model: userModel,
        required: false,
        include: [
          {
            attributes: ['email'],
            model: authModel
          }
        ]
      },
      {
        attributes: ['id', 'address', 'city', 'urbanization', 'neighborhood', 'longitude', 'latitude'],
        model: propertyDetailModel
      }
    ]

    if (inSession) {
      includes.push({
        attributes: ['id'],
        model: favoritesModel,
        required: false,
        where: {
          userId: inSession
        }
      })
    }

    return propertyModel.findAll({
      include: includes,
      where: propertiesQuery,
      limit: 20
    })
  }

  return {
    findByIdAndInSession,
    findAll,
    update,
    create,
    userProperties,
    getPropertiesByIds,
    propertiesHomeQuery
  }
}
