"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var getPokemon = {
  withAbility: function withAbility(ability) {
    var baseUrl = 'http://pokeapi.co/api/v2/ability';
    return _axios["default"].get("".concat(baseUrl, "/").concat(ability));
  }
};
var _default = getPokemon;
exports["default"] = _default;