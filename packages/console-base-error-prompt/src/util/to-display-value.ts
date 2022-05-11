export default function toDisplayValue(v: unknown): string {
  try {
    return JSON.stringify(v);
  } catch (err) {
    return '!JSON.stringify - ERROR!';
  }
}