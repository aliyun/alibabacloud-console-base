import { useEffect, useMemo } from 'react';
import { text, select, boolean, number } from '@storybook/addon-knobs';
import { URLS } from '../../const';
export default function Knobs(_ref) {
  var _ref$urls = _ref.urls,
      urls = _ref$urls === void 0 ? URLS : _ref$urls,
      _ref$defaults = _ref.defaults,
      defaults = _ref$defaults === void 0 ? {} : _ref$defaults,
      onChange = _ref.onChange;
  var url0 = select('config.url', Object.values(urls), defaults.url || urls[0]);
  var urlCustom = boolean('custom url', false);
  var urlCustomized = text('url (custom)', '');
  var url = urlCustom ? urlCustomized : url0;
  var method = select('config.method', ['GET', 'DELETE', 'POST', 'PUT', 'PATCH', 'JSONP'], defaults.method);
  var timeout0 = number('config.timeout (ms)', defaults.timeout || 0);
  var timeoutEnabled = boolean('timeout enabled', false);
  var timeout = timeoutEnabled ? timeout0 : undefined;
  var config = useMemo(function () {
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
  useEffect(function () {
    onChange(config);
  }, [config, onChange]);
  return null;
}