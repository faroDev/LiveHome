'use strict'

module.exports = function setupTypeUserService (typeUserModel) {
  async function createOrUpdate (typeUser) {
    const cond = {
      where: {
        id: typeUser.id
      }
    }

    const existingTypeUser = await typeUserModel.findOne(cond)

    if (existingTypeUser) {
      const update = await typeUserModel.update(typeUser, cond)
      return update ? typeUserModel.findOne(cond) : existingTypeUser
    }

    const result = await typeUserModel.create(typeUser)
    return result.toJSON()
  }

  function findById (id) {
    const userType = typeUserModel.findByPk(id)
    console.log(userType)
    return userType
  }

  return {
    createOrUpdate,
    findById
  }
}
