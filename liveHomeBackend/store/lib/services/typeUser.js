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
      return update ? typeUserModel.findOne(cond, { raw: true }) : existingTypeUser.toJSON({ raw: true })
    }

    const result = await typeUserModel.create(typeUser)
    return result.toJSON({ raw: true })
  }

  function findById (id) {
    return typeUserModel.findByPk(id, { raw: true })
  }

  function findAll () {
    return typeUserModel.findAll({ raw: true })
  }

  return {
    createOrUpdate,
    findById,
    findAll
  }
}
