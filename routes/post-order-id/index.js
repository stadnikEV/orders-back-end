const db = require('../../libs/database/init-postgreSQL.js');

module.exports = (req, res, next) => {
  const id = req.params.id;
  const name = req.body.name;
  const address = req.body.address;
  const phone = req.body.phone;
  const status = req.body.status;
  db.none(`UPDATE orders SET (name, address, phone, status) = (
          '${name}',
          '${address}',
          '${phone}',
          '${status}') WHERE id=${id}
  `)
    .then(() => {
      res.status(200);
      res.json({});
    })
    .catch((e) => {
      next(e);
    });
}
