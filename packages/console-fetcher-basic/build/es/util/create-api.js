import { ETypeApi } from '../const';
import composeApiUrl from './compose-api-url';

function getApiUrl(type) {
  switch (type) {
    case ETypeApi.OPEN:
      return '/data/api.json';

    case ETypeApi.INNER:
      return '/data/innerApi.json';

    case ETypeApi.CONTAINER:
      return '/data/call.json';

    default:
      throw new Error("OneAPI type ".concat(type, " not supported!"));
  }
}

export default function createApi(fetcherPost, type) {
  var url = getApiUrl(type);
  return function (product, action, params) {
    var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
    return fetcherPost(options, composeApiUrl(url, product, action), {
      product: product,
      action: action,
      params: params ? JSON.stringify(params) : undefined
    });
  };
}