import _forEach from 'lodash/forEach';

import {
  COLOR,
  TYPO,
  SIZE
} from '../../src';
import {
  ICodeGenerator
} from '../types';
import {
  CODE_BEGIN_GLOBAL_STYLE,
  CODE_END_GLOBAL_STYLE,
  CODE_INDENT_GLOBAL_STYLE
} from '../const';

import pushCode from './push-code';
import buildCssVarName from './build-css-var-name';
import toCode from './to-code';
import buildInterpolation from './build-interpolation';

/**
 * 生成 global-style.ts 的代码
 */
export default function generateCodeGlobalStyle(): string {
  const generator: ICodeGenerator = {
    generator: 'generate-code-global-style',
    begin: CODE_BEGIN_GLOBAL_STYLE,
    end: CODE_END_GLOBAL_STYLE,
    indent: CODE_INDENT_GLOBAL_STYLE
  };
  
  _forEach({
    COLOR,
    TYPO
  }, (variables, upperWhatKey: string) => {
    _forEach(variables, (_v: string, variableKey: string): void => {
      pushCode(generator, `${buildCssVarName(upperWhatKey, variableKey)}: ${buildInterpolation([upperWhatKey, variableKey])};`);
    });
  });
  
  _forEach(SIZE, (_v, key: string) => {
    if (/^BORDER_RADIUS_/.test(key)) { // TODO 所有 size？
      pushCode(generator, `${buildCssVarName('SIZE', key)}: ${buildInterpolation(['SIZE', key], 'px')};`);
    }
  });
  
  return toCode(generator);
}
