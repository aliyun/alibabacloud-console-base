"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = useModelContext;

var _react = require("react");

var _provider = require("../provider");

function useModelContext() {
  return (0, _react.useContext)(_provider.Context);
}