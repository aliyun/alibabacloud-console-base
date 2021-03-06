// 对 __bl.js 提供的方法的封装，不必判断是否初始化完成（但必须已安装）
export { default as armsSetConfig } from './util/arms/set-config';
export { default as armsSetPage } from './util/arms/set-page';
export { default as armsSetCommonInfo } from './util/arms/set-common-info';
export { default as armsCustom } from './util/arms/custom';
export { default as armsApi } from './util/arms/api';
export { default as armsApiSuccess } from './util/arms/api-success';
export { default as armsApiFail } from './util/arms/api-fail';
export { default as armsError } from './util/arms/error';
export { default as armsSpeed } from './util/arms/speed';
export { default as armsSum } from './util/arms/sum';
export { default as armsAvg } from './util/arms/avg';
export { default as armsPercent } from './util/arms/percent';
export { default as armsResource } from './util/arms/resource';

// 其他方法
export { default as getBlConfig } from './util/get-bl-config';
export { default as installBl } from './util/install-bl';

export type {
  IBlConfigBeforeReady as ArmsBlConfigBeforeReady,
  IBlConfig as ArmsBlConfig,
  IErrorInfo as ArmsErrorInfo,
  IErrorPosition as ArmsErrorPosition,
  TSpeedPoint as ArmsSpeedPoint,
  IResourceData as ArmsResourceData
} from './types';
