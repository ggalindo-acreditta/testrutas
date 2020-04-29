'use strict';

// Set the DEBUG environment variable to enable debug output
// process.env.DEBUG = '*';

const fs = require('fs');
// var debug = require('debug');
const path = require('path');
// const resolve = require('json-refs').resolveRefs;
const YAML = require('js-yaml');
require('./helpers/config-loader')();
const express = require('express');
const swaggerTools = require('swagger-tools');
const bodyParser = require('body-parser');
const i18n = require('i18n');
const session = require('./middlewares/session');
const errorhandler = require('./middlewares/error-handler');
const clientSecurity = require('./middlewares/clientSecurity');
const userSecurity = require('./middlewares/userSecurity');
const cors = require('cors');
const app = express();

i18n.configure({
  // setup some locales - other locales default to en silently
  locales: ['es', 'en'],
  // where to store json files - defaults to './locales'
  directory: path.join(__dirname, '/locales'),
  objectNotation: true,
  defaultLocale: 'es',
  indent: '  ',
  extension: '.js'
});

// PARA EL POST
app.use(cors(
  {origin: true, credentials: true}
));
app.set('trust proxy', 1);
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true, limit: '5mb' }));
// parse application/json and set max payload size
app.use(bodyParser.json({ limit: '5mb' }));

app.use(i18n.init);
app.use(function(req, res, next) {
  const fLocale = process.env.FORCE_LOCALE || 'es';
  req.setLocale(fLocale);
  next();
});

// swaggerRouter configuration
const options = {
  controllers: ((process.env.MOCKMODE === 'json-server') && process.env.MOCKENABLED) ?
    './mocks' : './swagger-controllers',
  ignoreMissingHandlers: false,
  useStubs: (process.env.MOCKMODE === 'stub') && (process.env.MOCKENABLED === 'true')
};

const port = process.env.PORT;

const rootDoc = YAML.safeLoad(fs.readFileSync(path.join(__dirname, 'api', 'swagger.yaml')).toString());

// Initialize the Swagger middleware
swaggerTools.initializeMiddleware(rootDoc, function(middleware) {
  app.use(session({
    sessionSecret: process.env.SESSION_SECRET,
    redisHost: process.env.REDIS_HOST,
    redisPort: process.env.REDIS_PORT,
    redisTtl: process.env.REDIS_TTL
  }));

  // Interpret Swagger resources and attach metadata to request - must be first in swagger-tools middleware chain
  app.use(middleware.swaggerMetadata());

  // Provide the security handlers
  //app.use(middleware.swaggerSecurity({
  //  ClientSecurity: clientSecurity,
  //  JWT: userSecurity,
  //}));

  // Validate Swagger requests
  app.use(middleware.swaggerValidator({
    validateResponse: false
  }));

  // Route validated requests to appropriate controller
  app.use(middleware.swaggerRouter(options));

  // Serve the Swagger documents and Swagger UI
  app.use(errorhandler());
  app.use('/docs', express.static('docs'));

  // Obtener los valores configurados para SSL
  if (process.env.SSL_PRIVATE_KEY !== '' && process.env.SSL_CERTIFICATE !== '') {
    const server = require('https');
    server.createServer({
      key: fs.readFileSync(path.resolve(process.env.SSL_PRIVATE_KEY), 'utf8'),
      cert: fs.readFileSync(path.resolve(process.env.SSL_CERTIFICATE), 'utf8')
    }, app).listen(port);
    console.log('API Server is listening on port %d (https://localhost:%d)', port, port);
  } else {
    const server = require('http');
    server.createServer(app).listen(port);
    console.log('API Server is listening on port %d (http://localhost:%d)', port, port);
  }
});

if (process.env.MOCKENABLED && process.env.MOCKMODE === 'json-server') {
  process.on('SIGINT', function() {
    console.log('API Server in mockup mode has shutdown.');
    console.log('API Server in mockup mode was running for %s seconds.', Math.round(process.uptime()).toString());
    process.exit(0);
  });
}
