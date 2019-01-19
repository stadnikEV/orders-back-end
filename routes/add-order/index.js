const db = require('../../libs/database/init-postgreSQL.js');
const getLastId = require('./get-last-id');

module.exports = (req, res, next) => {
  const name = req.body.name;
  const address = req.body.address;
  const phone = req.body.phone;
  const status = req.body.status;

  const addOrder = () => {
    getLastId()
      .then((id) => {
        return db.none(`INSERT INTO orders(id, name, address, phone, status)
                        VALUES(
                          '${id + 1}',
                          '${name}',
                          '${address}',
                          '${phone}',
                          '${status}')
        `);
      })
      .then(() => {
        res.status(201);
        res.json({});
      })
      .catch((e) => {
        if (e.code === '23505') { // duplicate
          addOrder();
          return;
        }

        next(e);
      });
  }

  addOrder();
}
