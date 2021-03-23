import {
  IWindowWithBl
} from '../types';

import isBlInitialized from './is-bl-initialized';
import isBlInitializing from './is-bl-initializing';

/**
 * 检查 ARMS 是否已配置
 */
export default function getBlPid(): string {
  const {
    __bl
  } = window as IWindowWithBl;
  
  if (isBlInitialized(__bl)) {
    return __bl._conf?.pid || '';
  }
  
  if (isBlInitializing(__bl)) {
    return __bl.config?.pid || '';
  }
  
  return '';
}
