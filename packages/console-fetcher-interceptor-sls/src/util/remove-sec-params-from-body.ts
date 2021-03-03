/**
 * 安全相关的参数不记录，尤其是 collina，它很大
 */
export default function removeSecParamsFromBody(b?: Record<string, unknown> | string | null): Record<string, unknown> | string | undefined {
  if (!b) {
    return;
  }
  
  if (typeof b === 'string') {
    return b;
  }
  
  const o = {
    ...b
  };
  
  delete o.collina;
  delete o.umid;
  delete o.sec_token;
  
  return o;
}
