const order = require('../../models/order');
const db = require('./init-postgreSQL.js');
// const drop = require('./drop-table.js');

module.exports = () => {
  const promise = new Promise((resolve, reject) => {
    // drop({ table: 'orders' });
    db.none(`CREATE TABLE orders (${order})`)
      .then(() => {
        return db.none(`CREATE UNIQUE INDEX _id ON orders (id)`);
      })
      .then(() => {
        resolve();
      })
      .catch((err) => {
          if (err.message === 'relation "orders" already exists') {
            resolve();

            return;
          }

          reject(err);
      });
  });

  return promise;
}
