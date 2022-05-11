// 对 __bl.js 提供的方法的封装，不必判断是否初始化完成（但必须已安装）
export { default as armsSetConfig } from './arms-set-config';
export { default as armsSetPage } from './arms-set-page';
export { default as armsSetCommonInfo } from './arms-set-common-info';
export { default as armsCustom } from './arms-custom';
export { default as armsApi } from './arms-api';
export { default as armsApiSuccess } from './arms-api-success';
export { default as armsApiFail } from './arms-api-fail';
export { default as armsError } from './arms-error';
export { default as armsSpeed } from './arms-speed';
export { default as armsSum } from './arms-sum';
export { default as armsAvg } from './arms-avg';
export { default as armsPercent } from './arms-percent';
export { default as armsResource } from './arms-resource';

// 其他方法
export { default as getBlConfig } from './get-bl-config';
export { default as installBl } from './install-bl';