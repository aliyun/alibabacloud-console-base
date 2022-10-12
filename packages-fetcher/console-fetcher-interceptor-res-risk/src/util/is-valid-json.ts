export default function(str: unknown): boolean {
  if (typeof str !== 'string') {
    return false;
  }

  try {
    JSON.parse(str);

    return true;
  } catch (error) {
    return false;
  }
}