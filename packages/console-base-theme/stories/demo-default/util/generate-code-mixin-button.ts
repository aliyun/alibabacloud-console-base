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

const SIZES = ['XS', 'S', 'M', 'L', 'XL'];
const THEMES = [
  'BUTTON_DANGER',
  'BUTTON_PRIMARY', 'BUTTON_SECONDARY', 'BUTTON_TERTIARY',
  'BUTTON_BRAND_PRIMARY', 'BUTTON_BRAND_SECONDARY', 'BUTTON_BRAND_TERTIARY',
  'BUTTON_TEXT_PRIMARY', 'BUTTON_TEXT_SECONDARY', 'BUTTON_TEXT_TERTIARY'
];
const STATES = ['hover', 'active', 'disabled'];

function insertShadowMixin(theme: string): string {
  if (/^BUTTON_TEXT_/.test(theme) || /TERTIARY/.test(theme)) { // 文字和三级按钮没有阴影
    return '';
  }
  
  return '${mixinButtonShadow}\n  '; // eslint-disable-line no-template-curly-in-string
}

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
  
  SIZES.forEach(v => {
    pushCode(generator, `export const mixinButtonSize${v} = css\`
  padding: 0 \${SIZE.PADDING_X_FORM_CONTROL_${v}}px;
  height: \${SIZE.HEIGHT_FORM_CONTROL_${v}}px;
  line-height: \${SIZE.HEIGHT_FORM_CONTROL_${v} - 2}px;
\`;`);
  });
  
  THEMES.forEach(v => {
    function buildStatus(state: string): string {
      return `${state === 'hover' ? '&:hover,\n  &:focus' : `&:${state}`} {
${buildButtonStyle(v, state)}
  }`;
    }
    
    pushCode(generator, `export const ${buildExportedMixinVarName(v)} = css\`
${buildButtonStyle(v, '')}
  ${insertShadowMixin(v)}
  ${STATES.map(buildStatus).join('\n  \n  ')}
\`;`);
  });
  
  return toCode(generator);
}
