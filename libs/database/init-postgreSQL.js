const pgp = require('pg-promise')();
const config = require('../../config');

const db = pgp(config.get('postgreSQL'));

module.exports = db;
