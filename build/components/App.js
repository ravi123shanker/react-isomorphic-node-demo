"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = App;

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

var _List = _interopRequireDefault(require("./List"));

var _Home = _interopRequireDefault(require("./Home"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function App(props) {
  var pokemon = props.pokemon;
  return _react["default"].createElement("div", null, "Your SSR React Router Node App initialised with data!", _react["default"].createElement(_reactRouterDom.Switch, null, _react["default"].createElement(_reactRouterDom.Route, {
    path: "/",
    exact: true,
    component: _Home["default"]
  }), _react["default"].createElement(_reactRouterDom.Route, {
    path: "/pokemon",
    exact: true,
    render: function render() {
      return _react["default"].createElement(_reactRouterDom.Redirect, {
        to: "/pokemon/ability/telepathy"
      });
    }
  }), _react["default"].createElement(_reactRouterDom.Route, {
    path: "/pokemon/ability/:ability",
    render: function render(location) {
      return _react["default"].createElement(_List["default"], {
        pokemon: pokemon.list,
        location: location
      });
    }
  })));
}

;