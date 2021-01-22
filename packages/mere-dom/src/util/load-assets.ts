/**
 * 加载 JS/CSS 文件
 */
export default function loadAssets(urls: string[]): void {
  if (!urls) {
    return;
  }
  
  const p = document.head || document.getElementsByTagName('head')[0] || document.body;
  
  urls.forEach(v => {
    const url = v && v.trim();
    
    if (!url) {
      return;
    }
    
    let el: HTMLScriptElement | HTMLLinkElement;
    
    if (/\.css$/g.test(url)) {
      el = document.createElement('link');
      el.rel = 'stylesheet';
      el.href = url;
    } else {
      el = document.createElement('script');
      el.src = url;
    }
    
    p.appendChild(el);
  });
}
