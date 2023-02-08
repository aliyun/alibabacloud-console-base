export default function getButtonHrefTarget(href: string, target?: string): string | undefined {
  if (target) {
    return target;
  }
  
  try {
    const {
      host
    } = new URL(href, window.location.href);
    
    return host === window.location.host ? undefined : '_blank';
  } catch (err) {
    return undefined;
  }
}