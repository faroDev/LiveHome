'use strict'

const { getQuery } = require('./../../utils')

module.exports = function setupUserService(userModel, propertyModel, viewsModel, filesModel) {
  async function create(user) {
    const result = await userModel.create(user)
    return result.toJSON()
  }
  async function update(user) {
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

  function findById(id) {
    return userModel.findByPk(id, { raw: true })
  }

  function findAll(query) {
    const newQuery = getQuery(query)
    return userModel.findAll({
      where: newQuery,
      order: [['createdAt', 'DESC']]
    })
  }

  function propertyUser(userId) {

    return userModel.findAll({

      include: [
        {
          attributes: ['*'],
          model: propertyModel,
          where: {
            userId: userId,
          },
          include: [{
            attributes: ['id', 'url'],
            model: filesModel
          }]
        }
      ], raw: true

    })
  }

  function viewsUser(userId) {
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
    create,
    update,
    findById,
    findAll,
    propertyUser,
    viewsUser
  }
}
