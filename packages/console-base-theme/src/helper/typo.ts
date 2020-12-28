import {
  css
} from 'styled-components';

import {
  COLOR,
  TYPO
} from '../theme-default';
import {
  mixinTextCode,
  mixinBorderPrimary,
  mixinTextSecondary,
  mixinBgSecondary,
  mixinBorderSecondary,
  mixinTextEmphasis,
  mixinTextPrimary,
  mixinTextTertiary
} from '../mixin';

interface IPropsEllipsisLines {
  lines: number;
  lineHeight: number;
}

// 基础字体
export const baseFont = css`
  line-height: 1.5;
  font-family: ${TYPO.FONT_FAMILY_BASE};
  font-family: var(--cb-typo-font-family-base, ${TYPO.FONT_FAMILY_BASE});
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
`;

export const fontFamilyMono = css`
  font-family: ${TYPO.FONT_FAMILY_MONOSPACE};
  font-family: var(--cb-typo-font-family-monospace, ${TYPO.FONT_FAMILY_MONOSPACE});
`;

export const tagStrong = css`
  font-weight: 600;
  ${mixinTextPrimary};
`;

export const tagEm = css`
  font-style: normal;
  ${mixinTextEmphasis};
`;

export const tagCode = css`
  padding: 0 4px;
  border-radius: 2px;
  ${mixinTextCode};
  ${mixinBorderPrimary};
`;

export const tagKbd = css`
  display: inline-block;
  padding: 3px 5px;
  border-radius: 3px;
  box-shadow: inset 0 -1px 0 #bbb;
  line-height: 1.2;
  ${mixinTextSecondary};
  ${mixinBgSecondary};
  ${mixinBorderSecondary};
`;

export const tagBlockquote = css`
  padding: 0 1.2em;
  border-left: 4px solid ${COLOR.BORDER_SECONDARY};
  border-left: 4px solid var(--cb-color-border-secondary, ${COLOR.BORDER_SECONDARY});
  ${mixinTextTertiary};
`;

// 你需要为之设定一个宽度
export const ellipsis = css`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const ellipsisLines = css<IPropsEllipsisLines>`
  display: -webkit-box;
  min-height: ${props => props.lineHeight * props.lines}px;
  line-height: ${props => props.lineHeight}px;
  overflow: hidden;
  -webkit-line-clamp: ${props => props.lines};
  -webkit-box-orient: vertical;
`;

export const lineWrap = css`
  white-space: normal;
  word-wrap: break-word;
  word-break: break-all;
`;

export const clearfix = css`
  *zoom: 1;
  
  &:before,
  &:after {
    content: ' ';
    display: table;
  }
  
  &:after {
    clear: both;
  }
`;
