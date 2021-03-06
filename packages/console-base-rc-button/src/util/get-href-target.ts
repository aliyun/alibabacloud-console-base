export default function getHrefTarget(href: string, target?: string): string | undefined {
  if (target) {
    return target;
  }
  
  try {
    const {
      host
    } = new URL(href, window.location.href);
    
    return host === window.location.host ? undefined : '_blank';
  } catch (e) {
    return undefined;
  }
}
