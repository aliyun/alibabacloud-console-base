import {
  FlattenSimpleInterpolation,
  css
} from 'styled-components';

import {
  mixinBgDanger,
  mixinTextWhite,
  mixinBgWarning,
  mixinTextDanger,
  mixinBorderDanger
} from '@alicloud/console-base-theme';

import {
  EMarkType
} from '../const';

const CSS_NEW = css`
  ${mixinBgDanger}
  ${mixinTextWhite}
`;
const CSS_HOT = CSS_NEW;
const CSS_UPDATE = css`
  ${mixinBgWarning}
  ${mixinTextWhite}
`;
const CSS_ALPHA = css`
  ${mixinBorderDanger}
  ${mixinTextDanger}
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
