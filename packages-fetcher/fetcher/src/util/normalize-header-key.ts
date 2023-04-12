import {
  capitalize as _capitalize
} from 'lodash-es';

export default function normalizeHeaderKey(key: string): string {
  return key.split('-').map(_capitalize).join('-');
}
