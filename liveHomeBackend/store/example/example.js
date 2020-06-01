'use strict'
const { Op } = require('sequelize')

const obj = {
  m2Min: 1,
  m2Max: 10,
  m2buildMin: 2,
  m2buildMax: 4,
  createdAtMin: 'yyyy-MM-dd',
  createdAtMax: 'yyyy-MM-dd',
  updatedAtMin: 'yyyy-MM-dd',
  updatedAtMax: 'yyyy-MM-dd',
  downAtMax: 'yyyy-MM-dd',
  bathrooms: 0,
  available: true,
  furnished: true,
  parking: true,
  pool: true,
  security: true,
  elevator: true,
  approved: true,
  nearTo: 'Demo',
  propertyTypeId: 0,
  userId: 0
}

if (obj.m2Min) {
  var m2 = {
    m2: {
      [Op.between]: [obj.m2Min, obj.m2Max]
    }
  }
}
if (obj.m2buildMin) {
  var m2build = {
    m2build: {
      [Op.between]: [obj.m2buildMin, obj.m2buildMin]
    }
  }
}
if (obj.createdAtMin) {
  var create = {
    createdAt: {
      [Op.between]: [obj.createdAtMin, obj.createdAtMax]
    }
  }
}
if (obj.updatedAtMin) {
  var update = {
    updatedAt: {
      [Op.between]: [obj.updatedAtMin, obj.updatedAtMax]
    }
  }
}
const v = Object.keys(obj)
console.log(v)
const z = Object.entries(obj)
console.log('-----entries------')
console.log(z)

Object.assign(m2, m2build, create, update)
console.log(m2)
