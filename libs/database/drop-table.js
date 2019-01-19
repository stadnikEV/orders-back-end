const db = require('./init-postgreSQL.js');

module.exports = ({ table }) => {
  const promise = new Promise((resolve, reject) => {
    db.none(`DROP TABLE ${table}`)
      .then(() => {
        resolve();
      })
      .catch(err => {
          reject(err);
      });
  });

  return promise;
}
