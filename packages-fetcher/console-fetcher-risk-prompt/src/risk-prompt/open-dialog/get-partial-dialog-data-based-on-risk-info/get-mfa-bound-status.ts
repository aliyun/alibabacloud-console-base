export default function getMfaBoundStatus(verifyDetail?: string | boolean): boolean {
  if (typeof verifyDetail === 'boolean') {
    return verifyDetail;
  }

  if (typeof verifyDetail === 'string') {
    return verifyDetail === 'true';
  }

  // 默认是已绑定
  return true;
}