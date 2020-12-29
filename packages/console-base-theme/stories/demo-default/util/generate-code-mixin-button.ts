import {
  ICodeGenerator
} from '../types';
import {
  CODE_BEGIN_TS_BUTTON
} from '../const';

import pushCode from './push-code';
import buildExportedMixinVarName from './build-exported-mixin-var-name';
import buildCssCode from './build-css-code';
import toCode from './to-code';

const THEMES = ['BUTTON_DANGER', 'BUTTON_PRIMARY', 'BUTTON_SECONDARY', 'BUTTON_TERTIARY', 'BUTTON_TEXT_PRIMARY', 'BUTTON_TEXT_SECONDARY', 'BUTTON_TEXT_TERTIARY'];
const STATES = ['hover', 'active', 'disabled'];
const SHADOW_INTERPOLATION = '${mixinButtonShadow}\n  '; // eslint-disable-line no-template-curly-in-string

function buildButtonStyle(theme: string, state: string): string {
  const indent = state ? 2 : 1;
  const cssCodeText = buildCssCode({
    attr: 'color',
    keys: ['COLOR', theme, 'TEXT', state],
    indent
  });
  const cssCodeBg = buildCssCode({
    attr: 'background-color',
    keys: ['COLOR', theme, 'BG', state],
    indent
  });
  const cssCodeBorder = buildCssCode({
    attr: 'border-color',
    keys: ['COLOR', theme, 'BORDER', state],
    indent
  });
  
  return `${cssCodeBorder}
${cssCodeBg}
${cssCodeText}`;
}

// 生成 mixin/button.ts
export default function generateCodeMixinButton(): string {
  const generator: ICodeGenerator = {
    begin: CODE_BEGIN_TS_BUTTON
  };
  
  THEMES.forEach(v => {
    function buildStatus(state: string): string {
      return `${state === 'hover' ? '&:hover,\n  &:focus' : `&:${state}`} {
${buildButtonStyle(v, state)}
  }`;
    }
    
    pushCode(generator, `export const ${buildExportedMixinVarName(v)} = css\`
${buildButtonStyle(v, '')}
  ${/^BUTTON_TEXT_/.test(v) ? '' : SHADOW_INTERPOLATION}
  ${STATES.map(buildStatus).join('\n  \n  ')}
\`;`);
  });
  
  return toCode(generator);
}
