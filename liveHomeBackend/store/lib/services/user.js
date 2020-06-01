'use strict'

const { getQuery } = require('./../../utils')

module.exports = function setupUserService (userModel, propertyModel, viewsModel, filesModel, authModel, modalityModel, modalityTypeModel) {
  async function create (user) {
    const result = await userModel.create(user)
    return result.toJSON()
  }
  async function update (user) {
    const cond = {
      where: {
        id: user.id
      }
    }
    const existUser = await userModel.findOne(cond)

    if (existUser) {
      const update = await userModel.update(user, cond)
      return update ? userModel.findOne(cond, { raw: true }) : existUser.toJSON({ raw: true })
    }
  }

  function findById (id) {
    return userModel.findOne({
      include: [
        {
          attributes: ['email'],
          model: authModel
        }
      ],
      where: {
        id: id
      }
    })
  }

  function findAll (query) {
    const newQuery = getQuery(query)
    return userModel.findAll({
      include: [
        {
          attributes: ['email'],
          model: authModel
        }
      ],
      where: newQuery,
      order: [['createdAt', 'DESC']]
    })
  }

  function propertyUser (userId) {
    return propertyModel.findAll({
      include: [{
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
      }
      ],
      where: {
        userId: userId
      }
    })
    /*
    return userModel.findAll({

      include: [
        {
          attributes: ['*'],
          model: propertyModel,
          where: {
            userId: userId
          },
          include: [{
            attributes: ['id', 'url'],
            model: filesModel
          }]
        }
      ],
      raw: true
    })
    */
  }

  function viewsUser (userId) {
    return userModel.findAll({
      attributes: ['name', 'id'],
      include: [
        {
          attributes: ['propertyId'],
          model: viewsModel,
          where: {
            userId: userId
          }
        },
        {
          attributes: ['id', 'm2', 'approved'],
          model: propertyModel
        },
        {
          attributes: ['email'],
          model: authModel
        }
      ],
      include: [ // eslint-disable-line
        {
          attributes: ['id', 'url'],
          model: filesModel
        }
      ],
      raw: true
    })
  }

  return {
    create,
    update,
    findById,
    findAll,
    propertyUser,
    viewsUser
  }
}
