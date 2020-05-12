require('dotenv').config()

const config = {
  db: {
    database: process.env.DB_NAME || 'livehome_db',
    username: process.env.DB_USER || 'admin',
    password: process.env.DB_PASS || 'admin123',
    host: process.env.DB_HOST || 'localhost',
    dialect: 'postgres'
  }
}

module.exports = config
