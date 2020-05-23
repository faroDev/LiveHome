'use strict'

module.exports = function setupPropertyDetailService(propertyDetailModel) {


  async function create(propertyDetail) {
    propertyDetail.updatedAt = new Date()
    propertyDetail.createdAt = new Date()

    const result = await propertyDetailModel.create(propertyDetail)
    return result.toJSON({ raw: true })
  }

  async function update(propertyDetail) {
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

  function findById(id) {
    return propertyDetailModel.findByPk(id, { raw: true })
  }

  function findAll() {
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
