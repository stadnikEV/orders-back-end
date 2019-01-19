module.exports = ({ app }) => {
  app.put('/orders', require('./add-order'));
}
