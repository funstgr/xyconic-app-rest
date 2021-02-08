

const {Pool} = require('pg')
const isProduction = process.env.NODE_ENV === 'production'
if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
    console.log(' Dev Environment variables loaded');
    console.log('DB User: ' + process.env.DB_USER);
    console.log('DB Host: ' + process.env.DB_HOST);
    console.log('DB Port: ' + process.env.DB_PORT);
    console.log('ENV: ' + process.env.NODE_ENV);
}

const connectionString = `postgresql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_DATABASE}`
console.log(connectionString);

const pool = new Pool({
  connectionString: isProduction ? process.env.DATABASE_URL : connectionString,
  ssl: isProduction,
})

module.exports = {pool}