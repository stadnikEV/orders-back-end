module.exports = ({ app }) => {
  app.put('/orders', require('./add-order'));
  app.get('/orders/:id', require('./get-order-id'));
  app.get('/orders', require('./get-all-orders'));
  app.post('/orders/:id', require('./post-order-id'));
}
