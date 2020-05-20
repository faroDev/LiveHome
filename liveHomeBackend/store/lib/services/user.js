'use strict'

module.exports = function setupUserService (userModel, propertyModel, viewsModel) {
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
    return userModel.findByPk(id, { raw: true })
  }

  function findAll () {
    return userModel.findAll({ raw: true })
  }
  function propertyUser (userId) {
    return userModel.findAll({
      attributes: ['name', 'id'],
      include: [{
        attributes: ['m2', 'approved'],
        model: propertyModel,
        where: {
          userId: userId,
          approved: true
        }
      }],
      raw: true
    })
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
