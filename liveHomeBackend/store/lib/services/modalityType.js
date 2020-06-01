'use strict'

module.exports = function setupModalityTypeService (modalityTypeModel) {
  async function create (modalityType) {
    modalityType.updatedAt = new Date()
    modalityType.createdAt = new Date()

    const result = await modalityTypeModel.create(modalityType)
    return result.toJSON({ raw: true })
  }

  async function update (modalityType) {
    const cond = {
      where: {
        id: modalityType.id
      }
    }

    modalityType.updatedAt = new Date()
    await modalityTypeModel.update(modalityType, cond)
    const existingModalityType = await modalityTypeModel.findOne(cond)
    return existingModalityType
  }

  function findById (id) {
    return modalityTypeModel.findByPk(id, { raw: true })
  }

  function findAll () {
    return modalityTypeModel.findAll({ raw: true })
  }

  return {
    findById,
    findAll,
    update,
    create
  }
}
