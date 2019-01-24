const HttpError = require('../libs/http-error');

module.exports = (req, res, next) => {
  const id = req.params.id;

  const isNumeric = (n) => {
    return !isNaN(parseInt(n)) && isFinite(n);
  }

  if (!isNumeric(id)) {
    next(new HttpError({
      status: 400,
    }));

    return;
  }

  next();
}
