import _forEach from 'lodash/forEach';

import {
  COLOR,
  TYPO,
  SHADOW
} from '../../../src';
import {
  ICodeGenerator
} from '../types';

import pushCode from './push-code';
import buildCssVarName from './build-css-var-name';
import toCode from './to-code';
import buildInterpolation from './build-interpolation';

/**
 * 生成 global-style.ts 的代码
 */
export default function generateCodeGlobalStyle(): string {
  const generator: ICodeGenerator = {
    begin: `import {
  createGlobalStyle
} from 'styled-components';

import {
  COLOR,
  TYPO,
  SHADOW
} from './_var';

export default createGlobalStyle\`
  :root {`,
    end: `  }
\`;`,
    indent: 2
  };
  
  _forEach({
    COLOR,
    TYPO,
    SHADOW
  }, (variables: Record<string, string>, upperWhatKey: string) => {
    _forEach(variables, (_v: string, variableKey: string): void => {
      if (/line-|fill-/i.test(variableKey)) { // 忽略
        return;
      }
      
      pushCode(generator, `${buildCssVarName(upperWhatKey, variableKey)}: ${buildInterpolation(upperWhatKey, variableKey)};`);
    });
  });
  
  return toCode(generator);
}
