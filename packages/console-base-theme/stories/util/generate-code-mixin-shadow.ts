import _forEach from 'lodash/forEach';

import {
  ICodeGenerator
} from '../types';
import {
  CODE_BEGIN_SHADOW
} from '../const';

import pushCode from './push-code';
import toCode from './to-code';
import buildExportedMixinVarName from './build-exported-mixin-var-name';
import buildCssCode from './build-css-code';

const SIZES = { // 注意每一个有末尾是空格
  S: '0 0 2px 0 ',
  S_UP: '0 -1px 2px 0 ',
  S_RIGHT: '1px 0 2px 0 ',
  S_DOWN: '0 1px 2px 0 ',
  S_LEFT: '-1px 0 2px 0 ',
  M: '0 0 4px 0 ',
  M_UP: '0 -2px 4px 0 ',
  M_RIGHT: '2px 0 4px 0 ',
  M_DOWN: '0 2px 4px 0 ',
  M_LEFT: '-2px 0 4px 0 ',
  L: '0 0 8px 0 ',
  L_UP: '0 -4px 8px 0 ',
  L_RIGHT: '4px 0 8px 0 ',
  L_DOWN: '0 4px 8px 0 ',
  L_LEFT: '-4px 0 8px 0 ',
  XL: '0 0 16px 0 ',
  XL_UP: '0 -8px 16px 0 ',
  XL_RIGHT: '8px 0 16px 0 ',
  XL_DOWN: '0 8px 16px 0 ',
  XL_LEFT: '-8px 0 16px 0 '
};

// 生成 mixin/shadow.ts 的代码
export default function generateCodeMixinShadow(): string {
  const generator: ICodeGenerator = {
    generator: 'generator-code-mixin-shadow',
    begin: CODE_BEGIN_SHADOW
  };
  
  _forEach(SIZES, (v: string, variableKey: string): void => {
    const cssCode = buildCssCode({
      attr: 'box-shadow',
      keys: ['COLOR', 'SHADOW'],
      before: v
    });
    
    pushCode(generator, `export const ${buildExportedMixinVarName('SHADOW', variableKey)} = css\`
${cssCode}
\`;`);
  });
  
  return toCode(generator);
}
