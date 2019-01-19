const allowCrossDomain = (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Content-Type, application/json');
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET');
  next();
}

module.exports = allowCrossDomain;
