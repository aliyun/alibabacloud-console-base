import CONF_ENV from '@alicloud/console-base-conf-env';

interface IOtherStores {
  dev?: string;
  daily?: string;
  pre?: string;
}

function choosePossibleStore({
  dev,
  daily,
  pre
}: IOtherStores): string | undefined {
  if (CONF_ENV.ENV_IS_DEV) { // 必须第一个判定
    return dev;
  }
  
  if (CONF_ENV.ENV_IS_DAILY) {
    return daily;
  }
  
  if (CONF_ENV.ENV_IS_PRE) {
    return pre;
  }
}

/**
 * 根据当前的判定环境选择不同的 store，提供给外部使用的工具方法
 */
export default function chooseStoreByEnv(logstore: string, otherStores: IOtherStores): string {
  return choosePossibleStore(otherStores) || logstore;
}
