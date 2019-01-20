
module.exports = function(req, res, next) {

  res.sendHttpError = (error) => {
    res.status(error.status);
    res.json(error);
  };

  next();
};
