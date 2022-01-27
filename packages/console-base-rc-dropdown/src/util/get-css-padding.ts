import {
  css,
  FlattenSimpleInterpolation
} from 'styled-components';

const CSS_PADDING_BOTH = css`
  padding: 8px 0;
`;
const CSS_PADDING_TOP = css`
  padding-top: 8px;
`;
const CSS_PADDING_BOTTOM = css`
  padding-bottom: 8px;
`;

export default function getCssPadding(padding?: 'both' | 'top' | 'bottom' | 'none'): FlattenSimpleInterpolation | null {
  switch (padding) {
    case 'both':
      return CSS_PADDING_BOTH;
    case 'top':
      return CSS_PADDING_TOP;
    case 'bottom':
      return CSS_PADDING_BOTTOM;
    default:
      return null;
  }
}