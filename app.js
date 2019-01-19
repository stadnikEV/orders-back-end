const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const logger = require('./libs/logger');
const config = require('./config');
const HttpError = require('./libs/http-error');
const initTables = require('./libs/database/init-tables.js');
// const dropTables = require('./libs/database/drop-table.js');


initTables()
  .then(() => {
    const app = express();
    app.set('port', config.get('port'));

    app.use(bodyParser.json());
    app.use(require('./middleware/send-http-error'));
    app.use(require('./middleware/set-cross-domain'));


    // dropTables({ table: 'orders' });
    require('./routes')({ app });

    app.use((err, req, res, next) => {
      if (err instanceof HttpError) {
        res.sendHttpError(err);
        logger.error(err.stack);
        return;
      }

      logger.error(err.stack);

      res.sendHttpError(new HttpError({
        status: 500,
        message: 'Server Error',
      }));
    });

    http.createServer(app).listen(config.get('port'), () => {
      console.log('Express server listening on port ' + config.get('port'));
    });
  })
  .catch((e) => {
    console.log(e);
    logger.error(e.stack);
  });
