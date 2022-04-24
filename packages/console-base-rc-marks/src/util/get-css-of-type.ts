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
  EMarkType
} from '../enum';

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
  [EMarkType.NEW]: CSS_NEW_HOLLOW,
  [EMarkType.HOT]: CSS_HOT_HOLLOW,
  [EMarkType.PUBLIC_BETA]: CSS_PUBLIC_BETA_HOLLOW,
  [EMarkType.BETA]: CSS_BETA_HOLLOW,
  [EMarkType.ALPHA]: CSS_ALPHA_HOLLOW,
  [EMarkType.UPDATE]: CSS_UPDATE_HOLLOW
};
const MAP_FILLED = {
  [EMarkType.NEW]: CSS_NEW_FILLED,
  [EMarkType.HOT]: CSS_HOT_FILLED,
  [EMarkType.PUBLIC_BETA]: CSS_PUBLIC_BETA_FILLED,
  [EMarkType.BETA]: CSS_BETA_FILLED,
  [EMarkType.ALPHA]: CSS_ALPHA_FILLED,
  [EMarkType.UPDATE]: CSS_UPDATE_FILLED
};

export default function getCssOfType(type: EMarkType, hollow?: boolean): FlattenSimpleInterpolation | null {
  return (hollow ? MAP_HOLLOW[type] : MAP_FILLED[type]) || null;
}
