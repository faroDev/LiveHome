'use strict'

module.exports = function setupFilesService (filesModel) {
  async function create (files) {
    const result = await filesModel.create(files)
    return result.toJSON()
  }
  async function update (files) {
    const cond = {
      where: {
        id: files.id
      }
    }
    const existingFile = await filesModel.findOne(cond)

    if (existingFile) {
      const update = await filesModel.update(files, cond)
      return update ? filesModel.findOne(cond, { raw: true }) : existingFile.toJSON({ raw: true })
    }
  }

  function findById (id) {
    return filesModel.findByPk(id, { raw: true })
  }

  function findAll () {
    return filesModel.findAll({ raw: true })
  }

  return {
    create,
    update,
    findById,
    findAll
  }
}
