import {
  IWindow
} from '../types';

/**
 * 获取 collina 参数
 */
export default function getCollina(): string | undefined {
  try {
    // 因为下边要拿 win[UAOpt.LogVal] 这个没法在 type 下定义，于是用 any
    const win: IWindow = window as unknown as IWindow;
    const UaOpt = win.UA_Opt;
    const collinaFromRiskInfo = win.RISK_INFO.GETUA(); // 基于 RISK_INFO 暴露的 GETUA 方法获取 collina
    let collinaFromUaOpt;
    
    // 我试了一下没问题...废代码留存一段时间
    // 实际操作的情况下，每获取一次下边的这个值，它就会变化，下边几行代码理论上是可以废了的
    // UAOpt.Token = `${Date.now()}:${Math.random()}`;
    // UAOpt.reload();
    if (UaOpt && (win as any)[UaOpt.LogVal]) { // eslint-disable-line @typescript-eslint/no-explicit-any
      collinaFromUaOpt = (win as any)[UaOpt.LogVal]; // eslint-disable-line @typescript-eslint/no-explicit-any
    }
    
    return collinaFromUaOpt || collinaFromRiskInfo;
  } catch (err) {
    return undefined;
  }
}
