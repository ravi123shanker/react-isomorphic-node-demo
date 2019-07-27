"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function List(props) {
  var pokemon = props.pokemon,
      location = props.location;
  var ability = location.match.params.ability;
  return _react["default"].createElement("div", null, _react["default"].createElement("h3", null, ability), _react["default"].createElement("ul", null, pokemon.map(function (poke) {
    var pokemon = poke.pokemon;
    return _react["default"].createElement("li", {
      key: pokemon.name
    }, pokemon.name);
  })));
}

var _default = List;
exports["default"] = _default;