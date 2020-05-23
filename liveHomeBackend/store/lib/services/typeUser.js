'use strict'

module.exports = function setupTypeUserService(typeUserModel) {

  async function create(typeUser) {
    typeUser.updatedAt = new Date()
    typeUser.createdAt = new Date()

    const result = await typeUserModel.create(typeUser)
    return result.toJSON({ raw: true })
  }

  async function update(typeUser) {
    const cond = {
      where: {
        id: typeUser.id
      }
    }

    await typeUserModel.update(typeUser, cond)
    const existingTypeUser = await typeUserModel.findOne(cond)
    return existingTypeUser
  }

  function findById(id) {
    return typeUserModel.findByPk(id, { raw: true })
  }

  function findAll() {
    return typeUserModel.findAll({ raw: true })
  }

  return {
    findById,
    findAll,
    update,
    create
  }
}
