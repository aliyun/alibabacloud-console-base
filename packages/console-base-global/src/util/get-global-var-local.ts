import {
  IConsoleBase
} from '../types';

/**
 * 内部对象，有可能会被设置到 window.ConsoleBase
 */
const GLOBAL_VAR_LOCAL: IConsoleBase = {
  forApp: {},
  PROXY_ERROR_PROMPT: false,
  PROXY_FETCHER: false,
  PRODUCT_ID: ''
};

/**
 * 本地单例全局变量，有可能会被设到 window 上
 */
export default function getGlobalVarLocal(): IConsoleBase {
  return GLOBAL_VAR_LOCAL;
}