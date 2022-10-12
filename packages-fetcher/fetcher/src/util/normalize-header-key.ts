import _capitalize from 'lodash/capitalize';

export default function normalizeHeaderKey(key: string): string {
  return key.split('-').map(_capitalize).join('-');
}
