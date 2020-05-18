'use strict'
require('dotenv').config()
const Multer = require('multer')

const config = {
  app: {
    port: process.env.PORT || 3000,
    env: process.env.NODE_ENV !== 'production'
  },
  db: {
    database: process.env.DB_NAME,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    host: process.env.DB_HOST,
    dialect: process.env.DIALECT
  },
  auth: {
    authJwtSecret: process.env.AUTH_JWT_SECRET || 'secret'
  },
  multer: {
    storage: Multer.memoryStorage(),
    limits: {
      fileSize: 5 * 1024 * 1024 // no larger than 5mb, you can change as needed.
    }
  },
  googleStorage: {
    baseUrl: process.env.BASE_URL,
    bucketName: process.env.BUCKET_NAME,
    projectId: process.env.PROJECT_ID
  }
}

module.exports = config
