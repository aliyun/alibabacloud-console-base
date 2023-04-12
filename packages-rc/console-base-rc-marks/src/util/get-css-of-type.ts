import {
  FlattenSimpleInterpolation,
  css
} from 'styled-components';

import {
  mixinTextWhite,
  mixinTextHelp,
  mixinTextDanger,
  mixinTextAccent,
  mixinBgAccent,
  mixinBgDanger,
  mixinBgHelp,
  mixinBorderHelpColor,
  mixinBorderDangerColor,
  mixinBorderAccentColor
} from '@alicloud/console-base-theme';

import {
  TMarkType
} from '../types';

const CSS_NEW_HOLLOW = css`
  background-color: rgba(255, 255, 255, 0.05);
  ${mixinTextDanger}
  ${mixinBorderDangerColor}
`;
const CSS_HOT_HOLLOW = CSS_NEW_HOLLOW;
const CSS_PUBLIC_BETA_HOLLOW = css`
  background-color: rgba(255, 255, 255, 0.05);
  ${mixinTextHelp}
  ${mixinBorderHelpColor}
`;
const CSS_BETA_HOLLOW = CSS_PUBLIC_BETA_HOLLOW;
const CSS_ALPHA_HOLLOW = CSS_PUBLIC_BETA_HOLLOW;
const CSS_UPDATE_HOLLOW = css`
  background-color: rgba(255, 255, 255, 0.05);
  ${mixinTextAccent}
  ${mixinBorderAccentColor}
`;

const CSS_NEW_FILLED = css`
  ${mixinTextWhite}
  ${mixinBgDanger}
`;
const CSS_HOT_FILLED = CSS_NEW_FILLED;
const CSS_PUBLIC_BETA_FILLED = css`
  ${mixinTextWhite}
  ${mixinBgHelp}
`;
const CSS_BETA_FILLED = CSS_PUBLIC_BETA_FILLED;
const CSS_ALPHA_FILLED = CSS_PUBLIC_BETA_FILLED;
const CSS_UPDATE_FILLED = css`
  ${mixinTextWhite}
  ${mixinBgAccent}
`;

const MAP_HOLLOW = {
  NEW: CSS_NEW_HOLLOW,
  HOT: CSS_HOT_HOLLOW,
  PUBLIC_BETA: CSS_PUBLIC_BETA_HOLLOW,
  BETA: CSS_BETA_HOLLOW,
  ALPHA: CSS_ALPHA_HOLLOW,
  UPDATE: CSS_UPDATE_HOLLOW
};
const MAP_FILLED = {
  NEW: CSS_NEW_FILLED,
  HOT: CSS_HOT_FILLED,
  PUBLIC_BETA: CSS_PUBLIC_BETA_FILLED,
  BETA: CSS_BETA_FILLED,
  ALPHA: CSS_ALPHA_FILLED,
  UPDATE: CSS_UPDATE_FILLED
};

export default function getCssOfType(type: TMarkType, hollow?: boolean): FlattenSimpleInterpolation {
  return hollow ? MAP_HOLLOW[type] : MAP_FILLED[type];
}
