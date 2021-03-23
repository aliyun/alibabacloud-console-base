import {
  IWindowWithBl,
  IBlFnSetConfig,
  IBlFnSetPage,
  IBlFnSetCommonInfo,
  IBlFnCustom,
  IBlFnApi,
  IBlFnError,
  IBlFnSpeed,
  IBlFnSum,
  IBlFnAvg,
  IBlFnPercent,
  IBlFnResource,
  TBlPipe
} from '../types';

function pipe(method: 'setConfig', args: Parameters<IBlFnSetConfig>): void;
function pipe(method: 'setPage', args: Parameters<IBlFnSetPage>): void;
function pipe(method: 'setCommonInfo', args: Parameters<IBlFnSetCommonInfo>): void;
function pipe(method: 'custom', args: Parameters<IBlFnCustom>): void;
function pipe(method: 'api', args: Parameters<IBlFnApi>): void;
function pipe(method: 'error', args: Parameters<IBlFnError>): void;
function pipe(method: 'speed', args: Parameters<IBlFnSpeed>): void;
function pipe(method: 'sum', args: Parameters<IBlFnSum>): void;
function pipe(method: 'avg', args: Parameters<IBlFnAvg>): void;
function pipe(method: 'percent', args: Parameters<IBlFnPercent>): void;
function pipe(method: 'resource', args: Parameters<IBlFnResource>): void;

/**
 * __bl.js 对 pipe 做了 defineProperty 的动作，只要设置了它，就会触发相关的日志上报动作，上报完成后会重置为 undefined
 * 同时，在 bl 初始化完成之前也可以设置全局的 __bl.pipe 它会在初始化后对里边的日志进行上报
 */
function pipe(method: string, args: unknown[]): void {
  const {
    __bl
  } = window as IWindowWithBl;

  if (!__bl) { // 如果没有 __bl 可以通过 installBl 进行安装，这里不会创建该全局变量
    return;
  }

  __bl.pipe = __bl.pipe || [];

  __bl.pipe.push([method, ...args] as TBlPipe);
}

export default pipe;
