export default function injectScript(src: string): void {
  const sc = document.createElement('script');
  
  sc.src = src;
  sc.setAttribute('crossorigin', '');
  document.head.appendChild(sc);
}
