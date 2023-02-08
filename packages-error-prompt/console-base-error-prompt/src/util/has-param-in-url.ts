export default function hasParamInUrl(key: string): boolean {
  try {
    const {
      searchParams
    } = new URL(location.href);
    
    return searchParams.has(key);
  } catch (err) {
    return false;
  }
}