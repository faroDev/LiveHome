const userTypes = [
  {
    id: 1,
    name: 'Cliente',
    createdAt: '2020-05-26T02:22:56.919Z',
    updatedAt: '2020-05-26T02:22:56.922Z'
  }
]

const userTypeToCreate = {
  name: 'Cliente'
}

const userTypeToUpdate = {
  name: 'Cliente'
}

const userTypeUpdated = {
  id: 1,
  name: 'Cliente',
  createdAt: '2020-05-26T02:22:56.919Z',
  updatedAt: '2020-05-26T02:22:56.922Z'
}

const userTypeCreated = {
  id: 1,
  name: 'Cliente',
  createdAt: '2020-05-26T02:22:56.919Z',
  updatedAt: '2020-05-26T02:22:56.922Z'
}

const userTypeFilter = {
  id: 1,
  name: 'Cliente',
  createdAt: '2020-05-26T02:22:56.919Z',
  updatedAt: '2020-05-26T02:22:56.922Z'
}

class UserTypeServiceMock {
  async get () {
    return Promise.resolve(userTypes)
  }

  async getById (id) {
    const userType = userTypes.find(userType => userType.id === parseInt(id))
    return Promise.resolve(userType)
  }

  async create (userType) {
    userType.id = 1
    userType.createdAt = '2020-05-26T02:22:56.919Z'
    userType.updatedAt = '2020-05-26T02:22:56.922Z'
    return Promise.resolve(userType)
  }

  async update (id, userType) {
    const userTypeUpdated = userTypes.find(userType => userType.id === parseInt(id))
    return Promise.resolve(userTypeUpdated)
  }
}

module.exports = {
  userTypes,
  userTypeToCreate,
  UserTypeServiceMock,
  userTypeFilter,
  userTypeToUpdate,
  userTypeUpdated,
  userTypeCreated
}
