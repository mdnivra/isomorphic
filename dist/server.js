require("source-map-support").install();
module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
      value: true
  });
  
  var _path = __webpack_require__(1);
  
  var _path2 = _interopRequireDefault(_path);
  
  var _https = __webpack_require__(2);
  
  var _https2 = _interopRequireDefault(_https);
  
  var _fs = __webpack_require__(3);
  
  var _fs2 = _interopRequireDefault(_fs);
  
  var _express = __webpack_require__(4);
  
  var _express2 = _interopRequireDefault(_express);
  
  var _bodyParser = __webpack_require__(5);
  
  var _bodyParser2 = _interopRequireDefault(_bodyParser);
  
  var _router = __webpack_require__(6);
  
  var _router2 = _interopRequireDefault(_router);
  
  var _apiRouter = __webpack_require__(7);
  
  var _apiRouter2 = _interopRequireDefault(_apiRouter);
  
  var _config = __webpack_require__(10);
  
  var _environment = __webpack_require__(11);
  
  var _environment2 = _interopRequireDefault(_environment);
  
  var _clients = __webpack_require__(12);
  
  var _clients2 = _interopRequireDefault(_clients);
  
  var _dataloader = __webpack_require__(15);
  
  var _dataloader2 = _interopRequireDefault(_dataloader);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  // import Html from './components/Html';
  // import assets from './assets';
  
  // import React from 'react';
  // import ReactDOM from 'react-dom/server';
  var server = (0, _express2.default)();
  
  server.set('port', _config.port);
  
  // // Register Node.js middleware
  server.use(_express2.default.static(_path2.default.join(__dirname, 'public')));
  server.use(_bodyParser2.default.json());
  
  server.use('*', function (req, res, callback) {
      req.config = _environment2.default;
      req.clients = (0, _clients2.default)(server, req);
      req.dataloader = (0, _dataloader2.default)(server, req);
      callback();
  });
  
  server.use(_router2.default);
  server.use('/api', _apiRouter2.default);
  
  server.get('/', function (req, res) {
      res.header('Content-type', 'text/html');
      return res.end('<h1>Hello, Secure World!</h1>');
  });
  
  // server.get('/', function (req, res) {
  //   res.send('Hello World');
  // })
  
  // // Register API middleware
  // // -----------------------------------------------------------------------------
  // server.use('/api/content', Api.default);
  //
  
  
  //
  // Launch the server
  // -----------------------------------------------------------------------------
  
  // https.createServer({
  //   key: fs.readFileSync('key.pem'),
  //   cert: fs.readFileSync('cert.pem')
  // }, server).listen(port,() => {
  //   console.log(arguments[0]);
  // //   /* eslint-disable no-console */
  //   console.log(`The server is running at https://localhost:${port}/`);
  // });
  
  server.listen(_config.port, function () {
      /* eslint-disable no-console */
      console.log('The server is running at http://localhost:' + _config.port + '/');
  });
  
  exports.default = server;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

  module.exports = require("path");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

  module.exports = require("https");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

  module.exports = require("fs");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

  module.exports = require("express");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

  module.exports = require("body-parser");

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _express = __webpack_require__(4);
  
  var router = new _express.Router();
  
  router.get('/ui/*', function (req, res) {
    res.sendFile('/dist/public/index.html', { root: '.' });
  });
  
  exports.default = router;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
        value: true
  });
  
  var _express = __webpack_require__(4);
  
  var _appsController = __webpack_require__(8);
  
  var _appsController2 = _interopRequireDefault(_appsController);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var router = new _express.Router(),
      appsController = new _appsController2.default();
  
  // Experiences
  router.get('/test', appsController.show);
  
  exports.default = router;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
      value: true
  });
  
  var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
  
  var _lodash = __webpack_require__(9);
  
  var _lodash2 = _interopRequireDefault(_lodash);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
  
  var AppsController = function () {
      function AppsController() {
          _classCallCheck(this, AppsController);
      }
  
      _createClass(AppsController, [{
          key: 'show',
          value: function show(req, res, callback) {
              req.clients.appClient.show(req.params.id).catch(function (err) {
                  callback(err);
              }).then(function (app) {
                  res.json(app);
              });
          }
      }, {
          key: 'create',
          value: function create(req, res, callback) {
              AppClient(undefined, req).create(req.body).catch(function (err) {
                  callback(err);
              }).then(function (app) {
                  res.json(app);
              });
          }
      }, {
          key: 'update',
          value: function update(req, res, callback) {
              AppClient(undefined, req).update(req.body, req.params.id).catch(function (err) {
                  callback(err);
              }).then(function (app) {
                  res.json(app);
              });
          }
      }, {
          key: 'delete',
          value: function _delete(req, res, callback) {
              AppClient(undefined, req).delete(req.params.id).catch(function (err) {
                  callback(err);
              }).then(function () {
                  res.sendStatus(202);
              });
          }
      }]);
  
      return AppsController;
  }();
  
  exports.default = AppsController;

/***/ }),
/* 9 */
/***/ (function(module, exports) {

  module.exports = require("lodash");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

  "use strict";
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var port = exports.port = process.env.PORT || 3000;
  var host = exports.host = process.env.WEBSITE_HOSTNAME || "localhost:" + port;

/***/ }),
/* 11 */
/***/ (function(module, exports) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
      value: true
  });
  var env = {};
  
  // session store
  env.redis = {
      hostname: 'localhost',
      port: '6379'
  };
  
  // sprinklr api host addresses
  env.sprinklr = {
      hostname: 'localhost',
      port: '8443',
      protocol: 'https:'
  };
  
  // sprinklr auth host addresses (this lives on UI as of this writing)
  env.sprinklr_auth = {
      hostname: 'localhost',
      port: '8443',
      protocol: 'https:'
  };
  
  // app internal host
  env.app = {
      hostname: 'localhost',
      port: '5000',
      protocol: 'http:'
  };
  
  // app public host
  env.host = {
      hostname: 'localhost',
      port: '5000',
      protocol: 'http:'
  };
  
  exports.default = env;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
      value: true
  });
  
  var _appClient = __webpack_require__(13);
  
  var _appClient2 = _interopRequireDefault(_appClient);
  
  var _containerClient = __webpack_require__(14);
  
  var _containerClient2 = _interopRequireDefault(_containerClient);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  exports.default = function (app, req) {
      return {
          // Client instances:
          appClient: (0, _appClient2.default)(app, req),
          containerClient: (0, _containerClient2.default)(app, req)
      };
  };

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
      value: true
  });
  
  var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
  
  var _lodash = __webpack_require__(9);
  
  var _lodash2 = _interopRequireDefault(_lodash);
  
  var _containerClient = __webpack_require__(14);
  
  var _containerClient2 = _interopRequireDefault(_containerClient);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
  
  exports.default = function (app, req) {
      var AppClient = function () {
          function AppClient() {
              _classCallCheck(this, AppClient);
          }
  
          _createClass(AppClient, [{
              key: 'show',
              value: function show(id) {
                  return req.dataloader.get('/ui/rest/user/status');
              }
          }, {
              key: 'create',
              value: function create(attributes) {
                  var _this = this;
  
                  var containerClient = new _containerClient2.default(this.db);
  
                  attributes = _lodash2.default.extend({
                      id: null,
                      projectId: null,
                      slug: null,
                      settings: {}
                  }, attributes);
  
                  return new Promise(function (resolve, reject) {
                      _this.collection.insert(attributes).catch(function (err) {
                          reject(err);
                      }).then(function (app) {
                          containerClient.create({ appId: app.ops[0].id }).catch(function (err) {
                              reject(err);
                          }).then(function (container) {
                              resolve(_lodash2.default.merge(app.ops[0], {
                                  container: container
                              }));
                          });
                      });
                  });
              }
          }, {
              key: 'update',
              value: function update(attributes, id) {
                  var _this2 = this;
  
                  return new Promise(function (resolve, reject) {
                      delete attributes._id; // eslint-disable-line no-underscore-dangle
  
                      _this2.collection.findOneAndUpdate({ id: id }, { $set: attributes }, { returnOriginal: false }).catch(function (err) {
                          reject(err);
                      }).then(function (app) {
                          resolve(app.value);
                      });
                  });
              }
          }, {
              key: 'delete',
              value: function _delete(id) {
                  var _this3 = this;
  
                  var containerClient = new _containerClient2.default(this.db);
  
                  return new Promise(function (resolve, reject) {
                      containerClient.index(id).catch(function (err) {
                          reject(err);
                      }).then(function (containers) {
                          _lodash2.default.each(containers, function (container) {
                              return containerClient.delete(container.id);
                          });
                      });
  
                      _this3.collection.deleteOne({ id: id }).catch(function (err) {
                          reject(err);
                      }).then(function () {
                          resolve();
                      });
                  });
              }
          }, {
              key: 'import',
              value: function _import(app) {
                  app = _lodash2.default.omit(app, '_id');
                  return this.collection.insert(app);
              }
          }]);
  
          return AppClient;
      }();
  
      return new AppClient();
  };

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
      value: true
  });
  
  var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
  
  var _lodash = __webpack_require__(9);
  
  var _lodash2 = _interopRequireDefault(_lodash);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
  
  exports.default = function (app, req) {
      var ContainerClient = function () {
          function ContainerClient() {
              _classCallCheck(this, ContainerClient);
          }
  
          _createClass(ContainerClient, [{
              key: 'index',
              value: function index(projectId) {
                  var pathname = '/projects/' + projectId + '/containers';
                  return req.dataloader.get(pathname);
              }
          }, {
              key: 'show',
              value: function show(id) {
                  var pathname = '/containers/' + id;
                  return req.dataloader.get(pathname);
              }
  
              // 'private' method
  
          }, {
              key: 'createContainer',
              value: function createContainer(attributes) {
                  var pathname = '/containers';
  
                  attributes = _lodash2.default.extend({
                      name: 'UntitledContainer',
                      projectId: null,
                      type: 'PAGE',
                      settings: {
                          title: 'Default',
                          path: 'untitledPath',
                          javascriptUrls: [],
                          stylesheetUrls: [],
                          meta: {}
                      }
                  }, attributes);
  
                  return req.dataloader.post(pathname, { body: attributes });
              }
          }, {
              key: 'create',
              value: function create(attributes) {
                  return this.createContainer(attributes).then(function (container) {
                      var resource = {
                          containerId: container.containerId,
                          projectId: container.projectId,
                          templateType: attributes.templateType
                      };
  
                      if (container.type === 'FRAGMENT') {
                          resource.name = container.name;
                      }
  
                      return req.clients.resourceClient.create(resource).then(function () {
                          return container;
                      });
                  });
              }
          }, {
              key: 'update',
              value: function update(container) {
                  var pathname = '/containers/' + container.containerId;
                  return req.dataloader.put(pathname, { body: container });
              }
          }, {
              key: 'delete',
              value: function _delete(containerId) {
                  var pathname = '/containers/' + containerId;
                  return req.dataloader.delete(pathname);
              }
  
              // FIXME - this no longer works since the migration to the core API
              //         we will need new endpoints for this
  
          }, {
              key: 'import',
              value: function _import(container) {
                  console.log(container);
              }
          }]);
  
          return ContainerClient;
      }();
  
      return new ContainerClient();
  };

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
      value: true
  });
  
  var _lodash = __webpack_require__(9);
  
  var _lodash2 = _interopRequireDefault(_lodash);
  
  var _dataloader = __webpack_require__(16);
  
  var _dataloader2 = _interopRequireDefault(_dataloader);
  
  var _superagent = __webpack_require__(17);
  
  var _superagent2 = _interopRequireDefault(_superagent);
  
  var _url = __webpack_require__(18);
  
  var _url2 = _interopRequireDefault(_url);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  exports.default = function (app, req) {
      function formatUrl(pathname) {
          var config = req.config.sprinklr;
  
          return _url2.default.format({
              protocol: config.protocol,
              hostname: config.hostname,
              pathname: '/api/micro/service/xb' + pathname,
              port: config.port
          });
      }
  
      function request(pathname) {
          var method = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'get';
          var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  
          return new Promise(function (resolve, reject) {
  
              if (!pathname) {
                  return reject(new Error('A pathname is required to make a request.'));
              }
  
              var url = formatUrl(pathname);
  
              var headers = _lodash2.default.defaults({}, options.headers, {
                  'Content-Type': 'application/json',
                  // 'X-SPR-Authorization': `Bearer ${req.session.accessToken.text}`,
                  'Cookie': req.headers.cookie
              });
  
              var request = _superagent2.default[method](url).set(headers);
  
              if (options.body) {
                  request.send(options.body);
              }
  
              request.end(function (err, res) {
                  if (err) {
                      return reject(err);
                  }
  
                  return resolve(res.body);
              });
          });
      }
  
      var dataloader = new _dataloader2.default(function (args) {
          // NOTE: Only to be used by GET requests
          return Promise.all(args.map(function (args) {
              return request(args.pathname, 'get', args.options);
          }));
      });
  
      return {
          delete: function _delete(pathname) {
              var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  
              return request(pathname, 'delete', options);
          },
          get: function get(pathname) {
              var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  
              // Cache all GET request made in a single Express.js request
              return dataloader.load({ pathname: pathname, options: options });
              // return request(pathname);
          },
          head: function head(pathname) {
              var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  
              return request(pathname, 'head', options);
          },
          post: function post(pathname) {
              var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  
              return request(pathname, 'post', options);
          },
          put: function put(pathname) {
              var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  
              return request(pathname, 'put', options);
          }
      };
  };

/***/ }),
/* 16 */
/***/ (function(module, exports) {

  module.exports = require("dataloader");

/***/ }),
/* 17 */
/***/ (function(module, exports) {

  module.exports = require("superagent");

/***/ }),
/* 18 */
/***/ (function(module, exports) {

  module.exports = require("url");

/***/ })
/******/ ]);
//# sourceMappingURL=server.js.map