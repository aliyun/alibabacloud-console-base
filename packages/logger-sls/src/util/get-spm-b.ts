export default function getSpmB(): string {
  try {
    return document.body.getAttribute('data-spm') || '';
  } catch (err) {
    return 'E'; // 表示出错，显然不太可能
  }
}