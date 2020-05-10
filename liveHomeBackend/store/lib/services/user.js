'use strict'

module.exports = function setupUserService (userModel, typeUserModel) {
  async function create (user, userTypeId) {
    const userType = await typeUserModel.findOne({
      where: {
        id: userTypeId
      }
    })

    if (userType) {
      user.typeUserId = userType.id
      const result = await userModel.create(user)
      return result.toJSON()
    }
  }
  async function update (user, userTypeId) {
    const cond = {
      where: {
        id: user.id
      }
    }
    const existUser = await userModel.findOne(cond)

    if (existUser) {
      user.typeUserId = userTypeId
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

  return {
    create,
    update,
    findById,
    findAll
  }
}
