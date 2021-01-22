import {
  IColorText,
  IColorBg,
  IColorBorder,
  IThemeColors,
  IColorEssential
} from '../types';
import {
  COLOR_ESSENTIAL
} from '../const';

import createConstColorBaseText from './create-const-color-base-text';
import createConstColorBaseBg from './create-const-color-base-bg';
import createConstColorBaseBorder from './create-const-color-base-border';
import createConstColorShadow from './create-const-color-base-shadow';
import createConstColorLink from './create-const-color-link';
import createConstColorInput from './create-const-color-input';
import createConstColorButton from './create-const-color-button';

export default function createThemeColor(colorEssentialOverride?: Partial<IColorEssential>): IThemeColors {
  const E = {
    ...COLOR_ESSENTIAL,
    ...colorEssentialOverride
  };
  const COLOR_TEXT: IColorText = createConstColorBaseText(E);
  const COLOR_BG: IColorBg = createConstColorBaseBg(E);
  const COLOR_BORDER: IColorBorder = createConstColorBaseBorder(E);
  
  return {
    ...COLOR_TEXT,
    ...COLOR_BG,
    ...COLOR_BORDER,
    ...createConstColorShadow(E),
    ...createConstColorLink(COLOR_TEXT),
    ...createConstColorInput(COLOR_TEXT, COLOR_BG, COLOR_BORDER),
    ...createConstColorButton(COLOR_TEXT, COLOR_BG, COLOR_BORDER)
  };
}
