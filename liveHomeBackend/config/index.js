require('dotenv').config()

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
    dialect: 'postgres'
  },
  auth: {
    authJwtSecret: process.env.AUTH_JWT_SECRET
  }
}

module.exports = config
