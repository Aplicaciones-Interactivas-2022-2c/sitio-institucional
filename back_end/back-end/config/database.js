require('dotenv').config()

module.exports = {

  // Migrations
  migrationStorage: "sequelize",
  migrationStorageTableName: "migrations",

  // Seed configuration
  seederStorage: "sequelize",
  seederStorageTableName: "seeds",

  //Database configuration for postgres
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  host: process.env.DB_HOST,
  dialect: "mysql"
}