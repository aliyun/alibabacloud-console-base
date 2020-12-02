import limitString from './limit-string';
export default function stringifyPayload(payload) {
  try {
    return limitString(typeof payload === 'string' ? payload : JSON.stringify(payload));
  } catch (e) {
    return e.message;
  }
}