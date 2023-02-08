export default function makeBodyTransition(): void {
  const s = document.createElement('style');
  
  s.innerText = 'body { transition: padding ease-in-out 250ms }';
  
  document.head.appendChild(s);
}