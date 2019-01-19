const db = require('../../libs/database/init-postgreSQL.js');

module.exports = (() => {
  const promise = new Promise((resolve, reject) => {
    db.one('SELECT MAX(id) FROM orders')
    .then(({ max }) => {
      if (!max) {
        resolve(0)

        return;
      }
      resolve(max);
    })
    .catch(error => {
      reject(error);
    });
  });
  return promise;
});
