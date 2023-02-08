export default function getWindowByDom(): Window | null {
  try {
    return window.document.getElementsByTagName('html')[0]?.ownerDocument.defaultView || null;
  } catch (err) {
    return null;
  }
}