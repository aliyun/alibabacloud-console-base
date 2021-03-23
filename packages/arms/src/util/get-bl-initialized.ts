import {
  IWindowWithBl,
  IBl
} from '../types';

import isBlInitialized from './is-bl-initialized';

/**
 * 获取初始化完毕的 window.__bl 对象，保证类型为初始化完成后的，返回 null 表示可能未安装或未完成初始化
 */
export default function getBlInitialized(): IBl | null {
  const {
    __bl
  } = window as IWindowWithBl;
  
  if (isBlInitialized(__bl)) {
    return __bl;
  }
  
  return null;
}
