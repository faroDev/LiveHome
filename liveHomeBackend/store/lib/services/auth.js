'use strict'

module.exports = function setupAuthService(authModel) {
  async function createOrUpdate(auth) {
    if (auth.id) {
      const cond = {
        where: {
          id: auth.id
        }
      }

      const existingAuth = await authModel.findOne(cond)

      if (existingAuth) {
        const update = await authModel.update(auth, cond)
        return update ? authModel.findOne(cond, { raw: true }) : authModel.toJSON({ raw: true })
      }
    }

    const result = await authModel.create(auth)
    return result.toJSON({ raw: true })
  }

  async function create(auth) {
    auth.updatedAt = new Date()
    auth.createdAt = new Date()

    const result = await authModel.create(auth)
    return result.toJSON({ raw: true })
  }

  async function update(auth) {
    const cond = {
      where: {
        id: auth.id
      }
    }
    auth.updatedAt = new Date()
    auth.createdAt = new Date()
    await authModel.update(auth, cond)
    const existingAuth = await authModel.findOne(cond)
    return existingAuth
  }

  function findById(id) {
    return authModel.findByPk(id, { raw: true })
  }

  function findAll() {
    return authModel.findAll({ raw: true })
  }

  function findByEmail(email) {
    const cond = {
      where: {
        email: email
      }
    }
    const user = authModel.findOne(cond, { raw: true })
    return user
  }
  return {
    createOrUpdate,
    findById,
    findAll,
    update,
    create,
    findByEmail
  }
}
