import {
  FlattenSimpleInterpolation,
  css
} from 'styled-components';

import {
  mixinTextWhite,
  mixinTextDanger,
  mixinBgDanger,
  mixinBgSuccess,
  mixinBgWhite,
  mixinBorderDangerColor,
  mixinBorderSuccessColor
} from '@alicloud/console-base-theme';

import {
  EMarkType
} from '../const';

const CSS_NEW = css`
  ${mixinTextWhite}
  ${mixinBgDanger}
`;
const CSS_HOT = CSS_NEW;
const CSS_UPDATE = css`
  ${mixinTextWhite}
  ${mixinBgSuccess}
  ${mixinBorderSuccessColor}
`;
const CSS_ALPHA = css`
  ${mixinTextDanger}
  ${mixinBgWhite}
  ${mixinBorderDangerColor}
`;
const CSS_BETA = CSS_ALPHA;
const CSS_PUBLIC_BETA = CSS_ALPHA;

export default function getCssOfType(type: EMarkType): FlattenSimpleInterpolation {
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
