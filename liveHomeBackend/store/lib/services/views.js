'use strict'

module.exports = function setupViewsService (viewsModel) {
  async function create (views) {
    const result = await viewsModel.create(views)
    return result.toJSON()
  }

  async function update (views) {
    const cond = {
      where: {
        id: views.id
      }
    }
    const existViews = await viewsModel.findOne(cond)

    if (existViews) {
      const update = await viewsModel.update(views, cond)
      return update ? viewsModel.findOne(cond, { raw: true }) : existViews.toJSON({ raw: true })
    }
  }

  function findById (id) {
    return viewsModel.findByPk(id, { raw: true })
  }

  function findAll () {
    return viewsModel.findAll({ raw: true })
  }

  function viewsBypropId (propertyId) {
    return viewsModel.findAll({
      attributes: ['id', 'counter'],
      group: ['id', 'counter'],
      where: {

        propertyId: propertyId
      },

      raw: true
    })
  }

  return {
    create,
    update,
    findById,
    findAll,
    viewsBypropId
  }
}
