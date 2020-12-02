/**
 * 获取 collina 参数（TODO 做设么用的？），控制台通用
 */
export default function getCollina() {
  try {
    // 因为下边要拿 win[UAOpt.LogVal] 这个没法在 type 下定义，于是用 any
    var win = window;
    var UAOpt = win.UA_Opt;

    if (!UAOpt) {
      return undefined;
    } // 我试了一下没问题...废代码留存一段时间
    // 实际操作的情况下，每获取一次下边的这个值，它就会变化，下边几行代码理论上是可以废了的
    // UAOpt.Token = `${Date.now()}:${Math.random()}`;
    // UAOpt.reload();


    return win[UAOpt.LogVal];
  } catch (e) {
    return undefined;
  }
}