import limitString from './limit-string';

export default function stringifyCallback(fn: (...args: unknown[]) => unknown): string {
  try {
    return limitString(fn.toString());
  } catch (e) {
    return e.message;
  }
}
