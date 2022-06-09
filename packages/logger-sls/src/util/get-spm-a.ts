export default function getSpmA(): string {
  try {
    return document.querySelector('meta[name=data-spm]')?.getAttribute('content') || '';
  } catch (err) {
    return 'E'; // 表示出错
  }
}