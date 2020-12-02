import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

import { createFetcher } from '@alicloud/fetcher';
import interceptSecurity from '@alicloud/console-fetcher-interceptor-req-security';
import interceptFecs from '@alicloud/console-fetcher-interceptor-fecs';
import interceptErrorMessage from '@alicloud/console-fetcher-interceptor-res-error-message';
import interceptBiz from '@alicloud/console-fetcher-interceptor-res-biz';
import interceptArms from '@alicloud/console-fetcher-interceptor-arms';
import interceptSls from '@alicloud/console-fetcher-interceptor-sls';
import { ETypeApi, ETypeApiMulti } from '../const';
import createApi from './create-api';
import createMultiApi from './create-multi-api';
export default (function (config) {
  var interceptorOptions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var slsConfig = interceptorOptions.slsConfig,
      armsConfig = interceptorOptions.armsConfig;
  var fetcher = createFetcher(config);
  interceptSecurity(fetcher);
  interceptFecs(fetcher);
  interceptErrorMessage(fetcher);
  interceptBiz(fetcher);
  interceptArms(fetcher, armsConfig);

  if (slsConfig) {
    interceptSls(fetcher, slsConfig);
  }

  return _objectSpread(_objectSpread({}, fetcher), {}, {
    callOpenApi: createApi(fetcher.post, ETypeApi.OPEN),
    callInnerApi: createApi(fetcher.post, ETypeApi.INNER),
    callContainerApi: createApi(fetcher.post, ETypeApi.CONTAINER),
    callMultiOpenApi: createMultiApi(fetcher.post, ETypeApiMulti.OPEN)
  });
});