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

enum EButtonState {
  NORMAL = 'normal',
  HOVER = 'hover',
  ACTIVE = 'active',
  DISABLED = 'disabled'
}

const SIZES = ['XS', 'S', 'M', 'L', 'XL'];
const THEMES = [
  'BUTTON_DANGER', 'BUTTON_MENU', 'BUTTON_MENU_ACTIVE',
  'BUTTON_PRIMARY', 'BUTTON_SECONDARY', 'BUTTON_TERTIARY',
  'BUTTON_BRAND_PRIMARY', 'BUTTON_BRAND_SECONDARY', 'BUTTON_BRAND_TERTIARY',
  'BUTTON_TEXT_PRIMARY', 'BUTTON_TEXT_SECONDARY', 'BUTTON_TEXT_TERTIARY',
  'BUTTON_TEXT_BRAND_PRIMARY', 'BUTTON_TEXT_BRAND_SECONDARY'
];

function buildMixinButtonStateName(theme: string, state: EButtonState): string {
  return buildExportedMixinVarName(theme, 'State', state);
}

function buildCodeMixinButtonSize(size: string): string {
  return `export const ${buildExportedMixinVarName('BUTTON_SIZE', size)} = css\`
  padding: 0 \${SIZE.PADDING_X_FORM_CONTROL_${size}}px;
  height: \${SIZE.HEIGHT_FORM_CONTROL_${size}}px;
  line-height: \${SIZE.HEIGHT_FORM_CONTROL_${size} - 2}px;
  font-size: \${SIZE.FONT_SIZE_FORM_CONTROL_${size}}px;
\`;`;
}

function buildCodeButtonStyle(theme: string, state: EButtonState): string {
  const stateString = state === EButtonState.NORMAL ? '' : state;
  const cssCodeText = buildCssCode({
    attr: 'color',
    keys: ['COLOR', theme, 'TEXT', stateString]
  });
  const cssCodeBg = buildCssCode({
    attr: 'background-color',
    keys: ['COLOR', theme, 'BG', stateString]
  });
  const cssCodeBorder = buildCssCode({
    attr: 'border-color',
    keys: ['COLOR', theme, 'BORDER', stateString]
  });
  
  return `${cssCodeBorder}
${cssCodeBg}
${cssCodeText}`;
}

function buildCodeMixinButtonThemeState(theme: string, state: EButtonState): string {
  return `export const ${buildMixinButtonStateName(theme, state)} = css\`
${buildCodeButtonStyle(theme, state)}
\`;`;
}

function buildCodeMixinButtonFull(theme: string): string {
  return `export const ${buildExportedMixinVarName(theme)} = css\`
  \${${buildMixinButtonStateName(theme, EButtonState.NORMAL)}}
  
  &:hover,
  &:focus {
    \${${buildMixinButtonStateName(theme, EButtonState.HOVER)}}
  }
  
  &:active {
    \${${buildMixinButtonStateName(theme, EButtonState.ACTIVE)}}
  }
  
  &:disabled {
    \${${buildMixinButtonStateName(theme, EButtonState.DISABLED)}}
  }
\`;`;
}

// 生成 mixin/button.ts
export default function generateCodeMixinButton(): string {
  const generator: ICodeGenerator = {
    begin: CODE_BEGIN_TS_BUTTON
  };
  
  pushCode(generator, '');
  pushCode(generator, '// size mixins');
  SIZES.forEach(v => pushCode(generator, buildCodeMixinButtonSize(v)));
  
  pushCode(generator, '');
  pushCode(generator, '// theme mixins');
  THEMES.forEach(theme => {
    pushCode(generator, buildCodeMixinButtonThemeState(theme, EButtonState.NORMAL));
    pushCode(generator, buildCodeMixinButtonThemeState(theme, EButtonState.HOVER));
    pushCode(generator, buildCodeMixinButtonThemeState(theme, EButtonState.ACTIVE));
    pushCode(generator, buildCodeMixinButtonThemeState(theme, EButtonState.DISABLED));
    pushCode(generator, buildCodeMixinButtonFull(theme));
  });
  
  return toCode(generator);
}
