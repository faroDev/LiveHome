'use strict'

module.exports = function setupAproveUserService (aproveUserModel) {
  async function create (aprove, propertyId, userId) {
    aprove.propertyId = propertyId
    aprove.userId = userId
    aprove.updatedAt = new Date()
    aprove.createdAt = new Date()

    const result = await aproveUserModel.create(aprove)
    return result.toJSON({ raw: true })
  }

  async function update (aprove) {
    const cond = {
      where: {
        id: aprove.id
      }
    }

    aprove.updatedAt = new Date()
    await aproveUserModel.update(aprove, cond)
    const existingAproveUser = await aproveUserModel.findOne(cond)
    return existingAproveUser
  }

  function findById (id) {
    return aproveUserModel.findByPk(id, { raw: true })
  }

  function findAll () {
    return aproveUserModel.findAll({ raw: true })
  }

  return {

    findById,
    findAll,
    update,
    create
  }
}
