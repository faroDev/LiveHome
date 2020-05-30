const statuses = [
  {
    id: 1,
    name: 'Pendiente',
    createdAt: '2020-05-27T02:10:57.492Z',
    updatedAt: '2020-05-27T02:10:57.492Z'
  },
  {
    id: 2,
    name: 'Aprobado',
    createdAt: '2020-05-27T02:11:27.412Z',
    updatedAt: '2020-05-27T02:11:27.412Z'
  },
  {
    id: 3,
    name: 'Denegado',
    createdAt: '2020-05-27T02:11:32.835Z',
    updatedAt: '2020-05-27T02:11:32.836Z'
  }
]

const statusToCreate = {
  name: 'Denegado'
}

const statusToUpdate = {
  name: 'Pendiente'
}

const statusUpdated = {
  id: 1,
  name: 'Pendiente',
  createdAt: '2020-05-27T02:10:57.492Z',
  updatedAt: '2020-05-27T02:10:57.492Z'
}

const statusCreated = {
  id: 1,
  name: 'Denegado',
  createdAt: '2020-05-27T02:10:57.492Z',
  updatedAt: '2020-05-27T02:10:57.492Z'
}

const statusFilter = {
  id: 1,
  name: 'Pendiente',
  createdAt: '2020-05-27T02:10:57.492Z',
  updatedAt: '2020-05-27T02:10:57.492Z'
}

class StatusServiceMock {
  async get () {
    return Promise.resolve(statuses)
  }

  async getById (id) {
    const status = statuses.find(status => status.id === parseInt(id))
    return Promise.resolve(status)
  }

  async create (status) {
    status.id = 1
    status.createdAt = '2020-05-27T02:10:57.492Z'
    status.updatedAt = '2020-05-27T02:10:57.492Z'
    return Promise.resolve(status)
  }

  async update (id, status) {
    const statusUpdated = statuses.find(status => status.id === parseInt(id))
    return Promise.resolve(statusUpdated)
  }
}

module.exports = {
  statuses,
  statusToCreate,
  StatusServiceMock,
  statusFilter,
  statusToUpdate,
  statusUpdated,
  statusCreated
}
