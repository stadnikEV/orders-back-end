module.exports = ({ app }) => {
  app.put('/orders',
    require('../middleware/is-valid-order-data-type'),
    require('../middleware/is-valid-order-data'),
    require('./add-order'));

  app.post('/orders/:id',
    require('../middleware/is-valid-id'),
    require('../middleware/is-valid-order-data-type'),
    require('../middleware/is-valid-order-data'),
    require('./post-order-id'));

  app.get('/orders/:id',
    require('../middleware/is-valid-id'),
    require('./get-order-id'));
  app.get('/orders', require('./get-all-orders'));
  app.get('/orders-statistics', require('./get-order-statistics'));
}
