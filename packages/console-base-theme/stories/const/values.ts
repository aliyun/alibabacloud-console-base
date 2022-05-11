const CODE_FRAGMENT_IMPORT_CSS = `import {
  css
} from 'styled-components';
`;
const CODE_FRAGMENT_IMPORT_CSS_AND_COLOR = `${CODE_FRAGMENT_IMPORT_CSS}
import {
  COLOR
} from '../var';
`;
const CODE_FRAGMENT_IMPORT_CSS_AND_SIZE = `${CODE_FRAGMENT_IMPORT_CSS}
import {
  SIZE
} from '../var';
`;

export const CODE_BEGIN_GLOBAL_STYLE = `import {
  DefaultTheme,
  GlobalStyleComponent,
  createGlobalStyle
} from 'styled-components';

import {
  ThemeColors,
  ThemeTypo,
  ThemeSize
} from '../var';

interface ITheme {
  COLOR: ThemeColors;
  TYPO: ThemeTypo;
  SIZE: ThemeSize;
}

export default function createThemeGlobalStyle({
  COLOR,
  TYPO,
  SIZE
}: ITheme): GlobalStyleComponent<any, DefaultTheme> { // eslint-disable-line @typescript-eslint/no-explicit-any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return createGlobalStyle<any>\`
    :root {`;
export const CODE_END_GLOBAL_STYLE = `    }
  \`;
}`;
export const CODE_INDENT_GLOBAL_STYLE = 3;
export const CODE_BEGIN_RESET = CODE_FRAGMENT_IMPORT_CSS_AND_COLOR;
export const CODE_BEGIN_TEXT = CODE_FRAGMENT_IMPORT_CSS_AND_COLOR;
export const CODE_BEGIN_BG = CODE_FRAGMENT_IMPORT_CSS_AND_COLOR;
export const CODE_BEGIN_BORDER = CODE_FRAGMENT_IMPORT_CSS_AND_COLOR;
export const CODE_BEGIN_ORDER_RADIUS = CODE_FRAGMENT_IMPORT_CSS_AND_SIZE;
export const CODE_BEGIN_INPUT = CODE_FRAGMENT_IMPORT_CSS_AND_COLOR;
export const CODE_BEGIN_SHADOW = CODE_FRAGMENT_IMPORT_CSS_AND_COLOR;
export const CODE_BEGIN_LINK = `${CODE_FRAGMENT_IMPORT_CSS_AND_COLOR}
const linkCommon = css\`
  transition: all ease-in-out 0.3s;
  
  &:link {
    text-decoration: none;
  }
  
  &:hover {
    text-decoration: underline;
  }
\`;
`;

export const CODE_BEGIN_TS_BUTTON = `${CODE_FRAGMENT_IMPORT_CSS}
import {
  COLOR,
  SIZE
} from '../var';

import {
  mixinShadowLDown
} from './shadow';

export const mixinButtonShadow = css\`
  &:hover,
  &:focus {
    \${mixinShadowLDown}
  }
  
  &:active,
  &:disabled {
    box-shadow: none;
  }
\`;`;
