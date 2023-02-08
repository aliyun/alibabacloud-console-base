import makeSureString from './make-sure-string';

export default function safeTrim(value: unknown = ''): string {
  return makeSureString(value).trim();
}