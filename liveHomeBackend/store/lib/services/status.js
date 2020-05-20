'use strict'

module.exports = function setupUserService (statusModel) {
  async function create (status) {
    const result = await statusModel.create(status)
    return result.toJSON()
  }
  async function update (status) {
    const cond = {
      where: {
        id: status.id
      }
    }
    const existStatus = await statusModel.findOne(cond)

    if (existStatus) {
      const update = await statusModel.update(status, cond)
      return update ? statusModel.findOne(cond, { raw: true }) : existStatus.toJSON({ raw: true })
    }
  }

  function findById (id) {
    return statusModel.findByPk(id, { raw: true })
  }

  function findAll () {
    return statusModel.findAll({ raw: true })
  }

  return {
    create,
    update,
    findById,
    findAll
  }
}
