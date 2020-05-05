require('dotenv')

const config = {
  app: {
    port: process.env.PORT || 3000,
    env: process.env.NODE_ENV !== 'production'
  },
  db: {
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    name: process.env.DB_NAME
  },
  auth: {
    authJwtSecret: process.env.AUTH_JWT_SECRET
  }
}

module.exports = config
