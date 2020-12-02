export default function injectScript(src) {
  var sc = document.createElement('script');
  sc.src = src; // 不要随便加 crossorigin 否则会报「CORS Missing Allow Origin」

  document.head.appendChild(sc);
}