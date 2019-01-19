
module.exports = function(req, res, next) {

  res.sendHttpError = (error) => {
    res.status(error.status);
    const contentType = req.headers['content-type'];

    if (contentType === 'application/json') {
      res.json(error);

      return;
    }

    res.render("error", { error });
  };

  next();
};
