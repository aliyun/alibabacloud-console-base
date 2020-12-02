"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Knobs;

var _react = require("react");

var _addonKnobs = require("@storybook/addon-knobs");

var _const = require("../../const");

function Knobs(_ref) {
  var _ref$urls = _ref.urls,
      urls = _ref$urls === void 0 ? _const.URLS : _ref$urls,
      _ref$defaults = _ref.defaults,
      defaults = _ref$defaults === void 0 ? {} : _ref$defaults,
      onChange = _ref.onChange;
  var url0 = (0, _addonKnobs.select)('config.url', Object.values(urls), defaults.url || urls[0]);
  var urlCustom = (0, _addonKnobs.boolean)('custom url', false);
  var urlCustomized = (0, _addonKnobs.text)('url (custom)', '');
  var url = urlCustom ? urlCustomized : url0;
  var method = (0, _addonKnobs.select)('config.method', ['GET', 'DELETE', 'POST', 'PUT', 'PATCH', 'JSONP'], defaults.method);
  var timeout0 = (0, _addonKnobs.number)('config.timeout (ms)', defaults.timeout || 0);
  var timeoutEnabled = (0, _addonKnobs.boolean)('timeout enabled', false);
  var timeout = timeoutEnabled ? timeout0 : undefined;
  var config = (0, _react.useMemo)(function () {
    var o = {
      url: url
    };

    if (method) {
      o.method = method;
    }

    if (timeout !== undefined) {
      o.timeout = timeout;
    }

    return o;
  }, [url, method, timeout]);
  (0, _react.useEffect)(function () {
    onChange(config);
  }, [config, onChange]);
  return null;
}