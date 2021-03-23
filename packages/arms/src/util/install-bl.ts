import {
  IBlConfigBeforeReady,
  IWindowWithBl
} from '../types';

/**
 * 如果未安装（即没有 window.__bl 对象），则根据传入的 pid 等信息创建全局对象并加载 bl.js
 */
export default function installBl(pid: string, uid: string, options?: Omit<IBlConfigBeforeReady, 'pid' | 'uid' | 'imgUrl'>): void {
  if ((window as IWindowWithBl).__bl) {
    return;
  }
  
  const config: IBlConfigBeforeReady = {
    pid,
    uid,
    tag: uid,
    useFmp: true,
    disableHook: true,
    enableSPA: true,
    imgUrl: 'https://arms-retcode.aliyuncs.com/r.png?',
    environment: 'prod',
    ...options
  };
  
  (window as IWindowWithBl).__bl = {
    config
  };
  
  const sc = document.createElement('script');
  
  sc.setAttribute('crossorigin', '');
  sc.src = '//retcode.alicdn.com/retcode/bl.js';
  
  (document.head || document.getElementsByTagName('head')[0]).appendChild(sc);
}
