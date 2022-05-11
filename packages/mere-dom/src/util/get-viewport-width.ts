export default function getViewportWidth(): number {
  return window.innerWidth || document.documentElement.clientWidth;
}