import {
  getWindow
} from '@alicloud/sandbox-escape';

import {
  IWindowWithConsoleBase
} from '../types';

import getGlobalVarFromWindow from './get-global-var-from-window';
import getGlobalVarLocal from './get-global-var-local';

/**
 * 这个包不会去设置全局变量，而是由 ConsoleBase 主体代码通过调用此方法来设置
 * 
 * 只有调用此方法后，控制台应用才得以
 */
export default function setGlobalVar(forApp: Record<string, unknown>): void {
  const globalVar = getGlobalVarFromWindow();
  const globalVarLocal = getGlobalVarLocal();
  
  if (globalVar === globalVarLocal) {
    return;
  }
  
  if (globalVar) { // 避免调用两次以上，一般来说不会有这种情况发生
    throw new Error('[@alicloud/console-base-global] cannot re-set the global variable with a different object');
  }
  
  /**
   * messenger 下提供的 forApp 会依赖 SLS，而 SLS 获取产品 ID 会依赖 global，如果这里直接依赖 forApp 将导致循环依赖，即
   * 
   * global ---> messenger ---> forApp ---> sls ---> global
   * 
   * 所以，forApp 的塞入动作放到 console-base 主体代码
   */
  globalVarLocal.forApp = forApp;
  
  getWindow<IWindowWithConsoleBase>().ConsoleBase = globalVarLocal;
}