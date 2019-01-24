const HttpError = require('../libs/http-error');

module.exports = (req, res, next) => {
  if (typeof req.body.name !== 'string'
  || typeof req.body.address !== 'string'
  || typeof req.body.phone !== 'string'
  || typeof req.body.status !== 'string') {
    next(new HttpError({
      status: 400,
    }));

    return;
  }

  next();
};
