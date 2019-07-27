"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = router;

var _server = require("react-dom/server");

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

var _routes = _interopRequireDefault(require("./routes"));

var _renderFullPage = _interopRequireDefault(require("./renderFullPage"));

var _getPokemon = _interopRequireDefault(require("../services/getPokemon"));

var _App = _interopRequireDefault(require("../components/App"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function router(req, res) {
  var match = _routes["default"].reduce(function (acc, route) {
    return (0, _reactRouterDom.matchPath)(req.url, {
      path: route,
      exact: true
    }) || acc;
  }, null);

  if (!match) {
    res.status(404).send('page not found');
    return;
  }

  return _getPokemon["default"].withAbility('telepathy').then(function (resp) {
    var pokemon = {
      list: resp.data.pokemon
    };
    var context = {};
    var html = (0, _server.renderToString)(_react["default"].createElement(_reactRouterDom.StaticRouter, {
      context: context,
      location: req.url
    }, _react["default"].createElement(_App["default"], {
      pokemon: pokemon
    })));
    res.status(200).send((0, _renderFullPage["default"])(html, pokemon));
  })["catch"](function (err) {
    return res.status(404).send("".concat(err, ": Oh No! I cannot find the telepathic pokemon... maybe they knew we were coming!"));
  });
}

;