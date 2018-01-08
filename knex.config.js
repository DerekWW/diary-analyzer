'use strict'

module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/diary-analyzer'
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }
}
