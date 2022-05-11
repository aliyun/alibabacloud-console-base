import {
  IConsoleBase,
  IWindowWithConsoleBase
} from '../types';

/**
 * 获取 window 上的全局变量
 */
export default function getGlobalVarFromWindow(): IConsoleBase | undefined {
  return (window as IWindowWithConsoleBase).ConsoleBase;
}