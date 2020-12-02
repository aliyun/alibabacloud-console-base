import CONF_ENV from '@alicloud/console-base-conf-env';
var REG_ONE_API = /^\/data\/(multi)?(inner)?(api|call)\.json/i;
var MOCK_PREFIX = 'https://mocks.alibaba-inc.com/mock'; // 只能 https

export default function createInterceptor() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$one = _ref.one,
      one = _ref$one === void 0 ? {} : _ref$one,
      _ref$others = _ref.others,
      others = _ref$others === void 0 ? [] : _ref$others;

  return function (config) {
    // 这个包不应该被打包到应用，而只应该在 demo 中使用，若有**笨蛋🥚**很认真地把它放到项目代码里边...也不要对线上功能产生干扰
    // 同时，如果指定了 urlBase 的...忽略
    if (!CONF_ENV.ENV_IS_DEV || config.urlBase) {
      return;
    }

    for (var i = 0; i < others.length; i++) {
      var _others$i = others[i],
          id = _others$i.id,
          check = _others$i.check;
      var checkResult = check(config);

      if (checkResult === true) {
        return {
          urlBase: "".concat(MOCK_PREFIX, "/").concat(id)
        };
      }

      if (checkResult) {
        return {
          url: checkResult,
          urlBase: "".concat(MOCK_PREFIX, "/").concat(id)
        };
      }
    }

    if (REG_ONE_API.test(config.url)) {
      var _config$body;

      var product = (_config$body = config.body) === null || _config$body === void 0 ? void 0 : _config$body.product;
      return {
        url: "".concat(MOCK_PREFIX, "/oneconsole/data/").concat(RegExp.$1 ? 'multiApi' : 'api', ".json"),
        body: {
          product: one[product] || product
        }
      };
    }
  };
}