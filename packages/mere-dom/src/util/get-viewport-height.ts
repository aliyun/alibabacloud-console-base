export default function getViewportHeight(): number {
  return window.innerHeight || document.documentElement.clientHeight;
}