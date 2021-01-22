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

enum EButtonPart {
  COLOR = 'color',
  BG = 'bg',
  BORDER = 'border'
}

const SIZES = ['XS', 'S', 'M', 'L', 'XL'];
const THEMES = [
  'BUTTON_DANGER', 'BUTTON_MENU',
  'BUTTON_PRIMARY', 'BUTTON_SECONDARY', 'BUTTON_TERTIARY',
  'BUTTON_BRAND_PRIMARY', 'BUTTON_BRAND_SECONDARY', 'BUTTON_BRAND_TERTIARY',
  'BUTTON_TEXT_PRIMARY', 'BUTTON_TEXT_SECONDARY', 'BUTTON_TEXT_TERTIARY',
  'BUTTON_TEXT_BRAND_PRIMARY', 'BUTTON_TEXT_BRAND_SECONDARY'
];

function buildMixinButtonStateName(theme: string, state: EButtonState): string {
  return buildExportedMixinVarName(theme, 'State', state);
}

function buildMixinButtonPartStateName(theme: string, part: EButtonPart, state: EButtonState): string {
  return buildExportedMixinVarName(theme, part, 'State', state);
}

function buildCodeMixinButtonSize(size: string): string {
  return `export const ${buildExportedMixinVarName('BUTTON_SIZE', size)} = css\`
  padding: 0 \${SIZE.PADDING_X_FORM_CONTROL_${size}}px;
  height: \${SIZE.HEIGHT_FORM_CONTROL_${size}}px;
  line-height: \${SIZE.HEIGHT_FORM_CONTROL_${size} - 2}px;
  font-size: \${SIZE.FONT_SIZE_FORM_CONTROL_${size}}px;
\`;`;
}

function buildCodeButtonColorStyle(theme: string, state: EButtonState): string {
  return buildCssCode({
    attr: 'color',
    keys: ['COLOR', theme, 'TEXT', state === EButtonState.NORMAL ? '' : state]
  });
}

function buildCodeButtonBgStyle(theme: string, state: EButtonState): string {
  return buildCssCode({
    attr: 'background-color',
    keys: ['COLOR', theme, 'BG', state === EButtonState.NORMAL ? '' : state]
  });
}

function buildCodeButtonBorderStyle(theme: string, state: EButtonState): string {
  return buildCssCode({
    attr: 'border-color',
    keys: ['COLOR', theme, 'BORDER', state === EButtonState.NORMAL ? '' : state]
  });
}

function buildCodeMixinButtonThemeColorState(theme: string, state: EButtonState): string {
  return `export const ${buildMixinButtonPartStateName(theme, EButtonPart.COLOR, state)} = css\`
${buildCodeButtonColorStyle(theme, state)}
\`;`;
}

function buildCodeMixinButtonThemeBgState(theme: string, state: EButtonState): string {
  return `export const ${buildMixinButtonPartStateName(theme, EButtonPart.BG, state)} = css\`
${buildCodeButtonBgStyle(theme, state)}
\`;`;
}

function buildCodeMixinButtonThemeBorderState(theme: string, state: EButtonState): string {
  return `export const ${buildMixinButtonPartStateName(theme, EButtonPart.BORDER, state)} = css\`
${buildCodeButtonBorderStyle(theme, state)}
\`;`;
}

function buildCodeMixinButtonThemeState(theme: string, state: EButtonState): string {
  return `export const ${buildMixinButtonStateName(theme, state)} = css\`
  \${${buildMixinButtonPartStateName(theme, EButtonPart.COLOR, state)}}
  \${${buildMixinButtonPartStateName(theme, EButtonPart.BG, state)}}
  \${${buildMixinButtonPartStateName(theme, EButtonPart.BORDER, state)}}
\`;`;
}

function buildCodeMixinButtonFull(theme: string): string {
  return `export const ${buildExportedMixinVarName(theme)} = css\`
  \${${buildMixinButtonStateName(theme, EButtonState.NORMAL)}}
  
  &:link,
  &:visited {
    \${${buildMixinButtonPartStateName(theme, EButtonPart.COLOR, EButtonState.NORMAL)}}
  }
  
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
    Object.values(EButtonState).forEach(v => {
      pushCode(generator, buildCodeMixinButtonThemeColorState(theme, v));
      pushCode(generator, buildCodeMixinButtonThemeBgState(theme, v));
      pushCode(generator, buildCodeMixinButtonThemeBorderState(theme, v));
      pushCode(generator, buildCodeMixinButtonThemeState(theme, v));
    });
    pushCode(generator, buildCodeMixinButtonFull(theme));
  });
  
  return toCode(generator);
}
