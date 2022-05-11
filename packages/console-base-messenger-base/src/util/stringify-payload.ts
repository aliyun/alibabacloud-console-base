import limitString from './limit-string';

export default function stringifyPayload(payload: unknown): string {
  try {
    return limitString(typeof payload === 'string' ? payload : JSON.stringify(payload));
  } catch (err) {
    return (err as Error).message;
  }
}
