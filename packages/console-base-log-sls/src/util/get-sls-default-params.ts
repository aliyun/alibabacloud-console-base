import CONF_PRODUCT_ID from '@alicloud/console-base-conf-product-id';
import {
  getProductId
} from '@alicloud/console-base-global';

import getConsoleBaseVersions from './get-console-base-versions';

const [loaderVersions, consoleBaseVersions] = getConsoleBaseVersions();
const versionOfLoader = loaderVersions.join('~') || 'NONE'; // 本地的时候可能是 NONE
const versionOfConsoleBase = consoleBaseVersions.join('~') || 'NONE'; // 本地的时候可能是 NONE

export default function getSlsDefaultParams(): Record<string, unknown> {
  return {
    product: getProductId() || CONF_PRODUCT_ID,
    versionOfLoader,
    versionOfConsoleBase
  };
}