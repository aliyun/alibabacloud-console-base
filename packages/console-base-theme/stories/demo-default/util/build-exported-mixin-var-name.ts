import _camelCase from 'lodash/camelCase';

export default function buildExportedMixinVarName(...parts: string[]): string {
  return _camelCase(['mixin', ...parts].filter(v => v).join('-'));
}
