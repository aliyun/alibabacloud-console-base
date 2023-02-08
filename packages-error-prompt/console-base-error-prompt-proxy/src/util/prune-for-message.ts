/**
 * o 有可能带无法序列化的信息，比如 JSX、function 等，这种场景下 promptError 调用会报错
 * 所以这里对它简简单单做一下「净化」，但还是可能在 postMessage 的时候抛错，仍需要 try-catch
 */
export default function pruneForMessage<T>(o: T): T {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const safeInfo: any = {
    ...o
  };
  
  Object.keys(safeInfo).forEach(v => {
    if (typeof safeInfo[v] === 'function') {
      delete safeInfo[v];
    }
  });
  
  return safeInfo;
}
