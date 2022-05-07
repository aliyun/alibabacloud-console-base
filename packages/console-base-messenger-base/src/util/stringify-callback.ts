import limitString from './limit-string';

export default function stringifyCallback(fn: (...args: unknown[]) => unknown): string {
  try {
    return limitString(fn.toString());
  } catch (err) {
    return (err as Error).message;
  }
}
