import {
  FlattenSimpleInterpolation,
  css
} from 'styled-components';

import {
  mixinTextWhite,
  mixinTextDanger,
  mixinTextAccent,
  mixinBgDanger,
  mixinBorderDangerColor,
  mixinBorderAccentColor
} from '@alicloud/console-base-theme';

import {
  EMarkType
} from '../const';

const CSS_NEW = css`
  letter-spacing: 2px;
  ${mixinTextWhite}
  ${mixinBgDanger}
`;
const CSS_HOT = CSS_NEW;
const CSS_UPDATE = css`
  background-color: rgba(255, 255, 255, 0.05);
  ${mixinTextAccent}
  ${mixinBorderAccentColor}
`;
const CSS_ALPHA = css`
  background-color: rgba(255, 255, 255, 0.05);
  ${mixinTextDanger}
  ${mixinBorderDangerColor}
`;
const CSS_BETA = CSS_ALPHA;
const CSS_PUBLIC_BETA = CSS_ALPHA;

export default function getCssOfType(type: EMarkType): FlattenSimpleInterpolation | null {
  switch (type) {
    case EMarkType.NEW:
      return CSS_NEW;
    case EMarkType.HOT:
      return CSS_HOT;
    case EMarkType.UPDATE:
      return CSS_UPDATE;
    case EMarkType.ALPHA:
      return CSS_ALPHA;
    case EMarkType.BETA:
      return CSS_BETA;
    case EMarkType.PUBLIC_BETA:
      return CSS_PUBLIC_BETA;
    default:
      return null;
  }
}
