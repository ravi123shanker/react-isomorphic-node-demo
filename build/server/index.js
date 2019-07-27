"use strict";

var _app = _interopRequireDefault(require("./app"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var port = process.env.PORT || 8080;

_app["default"].listen(port);

console.log("Listening at http://localhost:".concat(port));