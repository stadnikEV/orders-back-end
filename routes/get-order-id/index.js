const db = require('../../libs/database/init-postgreSQL.js');
const HttpError = require('../../libs/http-error');

module.exports = (req, res, next) => {
  const id = req.params.id;
  db.one(`SELECT name, address, phone, status FROM orders WHERE id=${id}`)
    .then(data => {
      res.status(200);
      res.json(data);
    })
    .catch(e => {
      if (e.message === 'No data returned from the query.') {
        next(new HttpError({
          message: 'Not found',
          status: 404,
        }));
        return;
      }

      next(e);
    });
}
