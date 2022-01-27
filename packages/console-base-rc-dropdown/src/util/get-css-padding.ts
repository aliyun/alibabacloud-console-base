import {
  css,
  FlattenSimpleInterpolation
} from 'styled-components';

const CSS_PADDING_ALL = css`
  padding: 8px 12px;
`;
const CSS_PADDING_BOTH = css`
  padding: 8px 0;
`;
const CSS_PADDING_TOP = css`
  padding-top: 8px;
`;
const CSS_PADDING_BOTTOM = css`
  padding-bottom: 8px;
`;

/**
 * 标准化的 padding 行为，不喜欢的话，可以自己在内容上设置
 */
export default function getCssPadding(padding?: 'none' | 'all' | 'both' | 'top' | 'bottom'): FlattenSimpleInterpolation | null {
  switch (padding) {
    case 'all':
      return CSS_PADDING_ALL;
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