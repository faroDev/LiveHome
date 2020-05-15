'use strict'

module.exports = function setupTypeUserService (propertyDetailModel) {
  async function createOrUpdate (propertyDetail) {
    if (propertyDetail.id) {
      const cond = {
        where: {
          id: propertyDetail.id
        }
      }

      const existingPropertyDetail = await propertyDetailModel.findOne(cond)

      if (existingPropertyDetail) {
        const update = await propertyDetailModel.update(propertyDetail, cond)
        return update ? propertyDetailModel.findOne(cond, { raw: true }) : existingPropertyDetail.toJSON({ raw: true })
      }
    }

    const result = await propertyDetailModel.create(propertyDetail)
    return result.toJSON({ raw: true })
  }

  async function create (propertyDetail) {
    propertyDetail.updatedAt = new Date()
    propertyDetail.createdAt = new Date()

    const result = await propertyDetailModel.create(propertyDetail)
    return result.toJSON({ raw: true })
  }

  async function update (propertyDetail) {
    const cond = {
      where: {
        id: propertyDetail.id
      }
    }

    propertyDetail.updatedAt = new Date()
    await propertyDetailModel.update(propertyDetail, cond)
    const existingPropertyDetail = await propertyDetailModel.findOne(cond)
    return existingPropertyDetail
  }

  function findById (id) {
    return propertyDetailModel.findByPk(id, { raw: true })
  }

  function findAll () {
    return propertyDetailModel.findAll({ raw: true })
  }

  return {
    createOrUpdate,
    findById,
    findAll,
    update,
    create
  }
}
