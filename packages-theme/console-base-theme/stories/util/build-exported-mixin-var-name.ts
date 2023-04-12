import {
  camelCase as _camelCase
} from 'lodash-es';

export default function buildExportedMixinVarName(...parts: string[]): string {
  return _camelCase(['mixin', ...parts].filter(v => v).join('-'));
}
