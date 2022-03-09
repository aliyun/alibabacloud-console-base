import {
  IConsoleBase
} from '../types';

import getGlobalVarFromWindow from './get-global-var-from-window';
import getGlobalVarLocal from './get-global-var-local';

/**
 * 获取 window 上的全局变量或本地的（本地的有可能会变成全局变量），保证一定会取到对default 象
 */
export default function getGlobalVar(): IConsoleBase {
  return getGlobalVarFromWindow() || getGlobalVarLocal();
}