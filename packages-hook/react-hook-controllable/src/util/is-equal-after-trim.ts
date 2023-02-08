import safeTrim from './safe-trim';

export default function isEqualAfterTrim(value1: string, value2: string): boolean {
  return safeTrim(value1) === safeTrim(value2);
}