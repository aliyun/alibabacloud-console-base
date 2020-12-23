import {
  css
} from 'styled-components';

import {
  COLOR,
  TYPO
} from '@alicloud/console-base-theme';

interface IPropsEllipsisLines {
  lines: number;
  lineHeight: number;
}

// 基础字体
export const baseFont = css`
  line-height: 1.5;
  font-family: var(--cb-typo-font-family-base, ${TYPO.FONT_FAMILY_BASE});
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
`;

// 主链接
export const linkPrimary = css`
  transition: all linear 0.25s;
  
  &,
  &:link {
    text-decoration: none;
    color: ${COLOR.LINK_PRIMARY};
    color: var(--cb-color-link-primary, ${COLOR.LINK_PRIMARY});
  }
  
  &:hover {
    text-decoration: underline;
    color: ${COLOR.LINK_PRIMARY_HOVERED};
    color: var(--cb-color-link-primary-hovered, ${COLOR.LINK_PRIMARY_HOVERED});
  }
  
  &:active {
    color: ${COLOR.LINK_PRIMARY_ACTIVE};
    color: var(--cb-color-link-primary-active, ${COLOR.LINK_PRIMARY_ACTIVE});
  }
  
  &:visited {
    color: ${COLOR.LINK_PRIMARY_VISITED};
    color: var(--cb-color-link-primary-visited, ${COLOR.LINK_PRIMARY_VISITED});
  }
`;

// 次链接
export const linkSecondary = css`
  transition: all linear 0.25s;
  
  &,
  &:link {
    text-decoration: none;
    color: ${COLOR.LINK_SECONDARY};
    color: var(--cb-color-link-secondary, ${COLOR.LINK_SECONDARY});
  }
  
  &:hover {
    text-decoration: underline;
    color: ${COLOR.LINK_SECONDARY_HOVERED};
    color: var(--cb-color-link-secondary-hovered, ${COLOR.LINK_SECONDARY_HOVERED});
  }
  
  &:active {
    color: ${COLOR.LINK_SECONDARY_ACTIVE};
    color: var(--cb-color-link-secondary-active, ${COLOR.LINK_SECONDARY_ACTIVE});
  }
  
  &:visited {
    color: ${COLOR.LINK_SECONDARY_VISITED};
    color: var(--cb-color-link-secondary-visited, ${COLOR.LINK_SECONDARY_VISITED});
  }
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
