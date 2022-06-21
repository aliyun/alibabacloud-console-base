import {
  IWindow
} from '../types';

/**
 * 获取 umid 参数，控制台下通用
 * 
 * 注意：如果绑定 g.alicdn.com 的 host 会没有 getToken
 */
export default function getUmid(): string | undefined {
  try {
    const win: IWindow = window as unknown as IWindow;
    
    return win.um.getToken();
  } catch (err) {
    return undefined;
  }
}
