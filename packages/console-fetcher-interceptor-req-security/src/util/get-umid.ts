import {
  IWindow
} from '../types';

/**
 * 获取 umid 参数，控制台下通用
 */
export default function getUmid(): string | undefined {
  try {
    return (window as IWindow)?.um?.getToken();
  } catch (err) {
    return undefined;
  }
}
