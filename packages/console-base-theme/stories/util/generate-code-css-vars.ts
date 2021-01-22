import _forEach from 'lodash/forEach';

import {
  COLOR,
  TYPO,
  SHADOW
} from '../../src';
import {
  ICodeGenerator
} from '../types';

import pushCode from './push-code';
import toCode from './to-code';
import buildCssVarName from './build-css-var-name';

// 生成 doc/console-base.less 的代码（供 IDE 快速参考）
export default function generateCodeCssVars(): string {
  const generator: ICodeGenerator = {
    begin: `// 由 demo-default 生成，仅做参考，且放在仓库里 IDE 可以有提示
:root {`,
    end: '}',
    indent: 1
  };
  
  _forEach({
    COLOR,
    TYPO,
    SHADOW
  }, (variables: Record<string, string>, upperWhatKey: string) => {
    _forEach(variables, (realValue: string, variableKey: string): void => pushCode(generator, `${buildCssVarName(upperWhatKey, variableKey)}: ${realValue};`));
  });
  
  return toCode(generator);
}
