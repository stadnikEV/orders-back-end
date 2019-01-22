const db = require('../../libs/database/init-postgreSQL.js');

module.exports = (req, res, next) => {
  db.any(`SELECT
            to_char(date::date, 'YYYY.MM.DD') AS "date",
            sum(case when status = 'confirmed' then 1 else 0 end) * 100 / count(status) AS "confirmedProcent",
            sum(case when status = 'canceled' then 1 else 0 end) * 100 / count(status) AS "canceledProcent",
            sum(case when status = 'deferred' then 1 else 0 end) * 100 / count(status) AS "deferredProcent",
            sum(case when status = 'canceled' then 1 else 0 end) AS "canceled",
            sum(case when status = 'confirmed' then 1 else 0 end) AS "confirmed",
            sum(case when status = 'deferred' then 1 else 0 end) AS "deferred"
            FROM orders
            GROUP BY date::date
            ORDER BY date
            `)
    .then(data => {
      res.status(200);
      res.json(data);
    })
    .catch(e => {
      next(e);
    });
}
