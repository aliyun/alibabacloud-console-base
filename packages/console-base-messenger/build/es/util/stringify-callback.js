import limitString from './limit-string';
export default function stringifyCallback(fn) {
  try {
    return limitString(fn.toString());
  } catch (e) {
    return e.message;
  }
}