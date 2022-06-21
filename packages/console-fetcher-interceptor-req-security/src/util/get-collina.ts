import {
  IWindow
} from '../types';

/**
 * 获取 collina 参数
 */
export default function getCollina(): string | undefined {
  try {
    const win: IWindow = window as unknown as IWindow;
    
    // 我试了一下没问题...废代码留存一段时间
    // 实际操作的情况下，每获取一次下边的这个值，它就会变化，下边几行代码理论上是可以废了的
    // UAOpt.Token = `${Date.now()}:${Math.random()}`;
    // UAOpt.reload();
    return (win as any)[win.UA_Opt.LogVal]; // eslint-disable-line @typescript-eslint/no-explicit-any
  } catch (err) {
    return undefined;
  }
}
