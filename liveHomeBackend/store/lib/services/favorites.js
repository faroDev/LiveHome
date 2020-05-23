'use strict'

module.exports = function setupFavoritesService(favoritesModel) {

  async function create(favorite, propertyId, userId) {
    favorite.propertyId = propertyId
    favorite.userId = userId
    favorite.updatedAt = new Date()
    favorite.createdAt = new Date()

    const result = await favoritesModel.create(favorite)
    return result.toJSON({ raw: true })
  }

  async function update(favorite) {
    const cond = {
      where: {
        id: favorite.id
      }
    }

    favorite.updatedAt = new Date()
    await favoritesModel.update(favorite, cond)
    const existingfavorite = await favoritesModel.findOne(cond)
    return existingfavorite
  }

  function findById(id) {
    return favoritesModel.findByPk(id, { raw: true })
  }

  function findAll() {
    return favoritesModel.findAll({ raw: true })
  }

  return {
    findById,
    findAll,
    update,
    create
  }
}
