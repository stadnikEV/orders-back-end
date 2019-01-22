const db = require('../../libs/database/init-postgreSQL.js');

module.exports = (req, res, next) => {
  db.any(`SELECT id, name, address, phone
            FROM orders
            ORDER BY id
            `)
    .then(data => {
      res.status(200);
      res.json(data);
    })
    .catch(e => {
      next(e);
    });
}
