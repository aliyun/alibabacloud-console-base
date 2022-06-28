import {
  getWindow
} from '@alicloud/sandbox-escape';

import {
  IConsoleBase,
  IWindowWithConsoleBase
} from '../types';

/**
 * 获取 window 上的全局变量
 */
export default function getGlobalVarFromWindow(): IConsoleBase | undefined {
  return getWindow<IWindowWithConsoleBase>().ConsoleBase;
}