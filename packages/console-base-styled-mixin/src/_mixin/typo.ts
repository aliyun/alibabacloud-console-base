import {
  css
} from 'styled-components';

import {
  COLOR,
  TYPO,
  BORDER
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
    color: ${COLOR.LINK_PRIMARY_HOVER};
    color: var(--cb-color-link-primary-hover, ${COLOR.LINK_PRIMARY_HOVER});
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
    color: ${COLOR.LINK_SECONDARY_HOVER};
    color: var(--cb-color-link-secondary-hover, ${COLOR.LINK_SECONDARY_HOVER});
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

export const tagStrong = css`
  font-weight: 600;
  color: ${COLOR.TEXT_PRIMARY};
  color: var(--cb-color-text-primary, ${COLOR.TEXT_PRIMARY});
`;

export const tagEm = css`
  font-style: normal;
  color: ${COLOR.TEXT_EMPHASIS};
  color: var(--cb-color-text-emphasis, ${COLOR.TEXT_EMPHASIS});
`;

export const tagCode = css`
  padding: 0 4px;
  border-radius: 2px;
  background-color: ${COLOR.FILL_LIGHT_FADE};
  background-color: var(--cb-color-fill-light-fade, ${COLOR.FILL_LIGHT_FADE});
  color: ${COLOR.TEXT_CODE};
  color: var(--cb-color-text-code, ${COLOR.TEXT_CODE});
`;

export const tagKbd = css`
  display: inline-block;
  padding: 3px 5px;
  border: ${BORDER.DIVIDER_FADE};
  border: var(--cb-border-divider-fade, ${BORDER.DIVIDER_FADE});
  border-radius: 3px;
  box-shadow: inset 0 -1px 0 #bbb;
  background-color: ${COLOR.FILL_LIGHT};
  background-color: var(--cb-color-fill-light, ${COLOR.FILL_LIGHT});
  line-height: 1.2;
  color: ${COLOR.TEXT_SECONDARY};
  color: var(--cb-color-text-secondary, ${COLOR.TEXT_SECONDARY});
`;

export const tagBlockquote = css`
  padding: 0 1.2em;
  border-left: 4px solid ${COLOR.LINE_BORDER};
  border-left: 4px solid var(--cb-color-line-border, ${COLOR.LINE_BORDER});
  color: ${COLOR.TEXT_CAPTION};
  color: var(--cb-color-text-caption, ${COLOR.TEXT_CAPTION});
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
