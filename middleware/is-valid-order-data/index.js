const HttpError = require('../../libs/http-error');
const getValidConfig = require('./get-valid-config');

module.exports = (req, res, next) => {

  const isValidData = () => {
    const validConfig = getValidConfig({ status: req.body.status });

    if (!validConfig) {
      return false;
    }

    let isValid = true;

    Object.keys(req.body).forEach((inputName) => {
      const isEmpty = req.body[inputName].length === 0;
      const isRequired = Boolean(validConfig[inputName]);
      if (!isRequired || isRequired === !isEmpty) {
        return;
      }
      isValid = false;
    });

    return isValid;
  }

  if (!isValidData()) {
    next(new HttpError({
      message: 'The data is not valid',
      status: 400,
    }));

    return;
  }

  next();
};
