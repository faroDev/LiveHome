'use strict'

module.exports = function setupModalityTypeService (modalityTypeModel) {
  async function createOrUpdate (modalityType) {
    if (modalityType.id) {
      const cond = {
        where: {
          id: modalityType.id
        }
      }

      const existingModalityType = await modalityTypeModel.findOne(cond)

      if (existingModalityType) {
        const update = await modalityTypeModel.update(modalityType, cond)
        return update ? modalityTypeModel.findOne(cond, { raw: true }) : existingModalityType.toJSON({ raw: true })
      }
    }

    const result = await modalityTypeModel.create(modalityType)
    return result.toJSON({ raw: true })
  }

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
    createOrUpdate,
    findById,
    findAll,
    update,
    create
  }
}
