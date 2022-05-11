import {
  css
} from 'styled-components';

import {
  IPropsEllipsisLines
} from '../types';
import {
  TYPO,
  COLOR
} from '../var';

import {
  mixinTextPrimary,
  mixinTextEmphasis,
  mixinTextCode,
  mixinTextSecondary,
  mixinTextTertiary
} from './text';
import {
  mixinBgSecondary,
  mixinBgSecondaryFade
} from './bg';
import {
  mixinBorderTertiary,
  mixinBorderTertiaryColor
} from './border';

// 日文专属
export const mixinTypoFontFamilyBaseJa = css`
  font-family: ${TYPO.FONT_FAMILY_BASE_JA};
  font-family: var(--cb-typo-font-family-base-ja, ${TYPO.FONT_FAMILY_BASE_JA});
`;

// lang-ja 是 console-base 注入到 body 的 className，虽然有些耦合，但比较实用
export const mixinTypoFontFamilyBase = css`
  font-family: ${TYPO.FONT_FAMILY_BASE};
  font-family: var(--cb-typo-font-family-base, ${TYPO.FONT_FAMILY_BASE});
  
  body.lang-ja & {
    ${mixinTypoFontFamilyBaseJa}
  }
`;

export const mixinTypoFontFamilyMono = css`
  font-family: ${TYPO.FONT_FAMILY_MONOSPACE};
  font-family: var(--cb-typo-font-family-monospace, ${TYPO.FONT_FAMILY_MONOSPACE});
`;

export const mixinTypoFontBase = css`
  line-height: 1.5;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  ${mixinTypoFontFamilyBase}
`;

export const mixinTypoStrong = css`
  font-weight: 600;
  ${mixinTextPrimary}
`;

export const mixinTypoEm = css`
  font-style: normal;
  ${mixinTextEmphasis}
`;

export const mixinTypoSmall = css`
  font-size: inherit;
  ${mixinTextTertiary}
`;

export const mixinTypoCode = css`
  padding: 2px 4px;
  border-radius: 2px;
  ${mixinTextCode}
  ${mixinBgSecondaryFade}
`;

export const mixinTypoKbd = css`
  display: inline-block;
  padding: 2px 4px;
  border-radius: 3px;
  box-shadow: inset 0 -1px 0 ${COLOR.SHADOW};
  box-shadow: inset 0 -1px 0 var(--cb-color-shadow, ${COLOR.SHADOW});
  line-height: 1.2;
  ${mixinTextSecondary}
  ${mixinBgSecondary}
  ${mixinBorderTertiary}
`;

export const mixinTypoBlockquote = css`
  padding: 8px 16px;
  border-left-width: 4px;
  border-left-style: solid;
  ${mixinBorderTertiaryColor}
  ${mixinTextTertiary}
`;

export const mixinTypoLineWrap = css`
  white-space: normal;
  word-wrap: break-word;
`;

export const mixinTypoNoWrap = css`
  white-space: nowrap;
`;

// 你需要为之设定一个宽度
export const mixinTypoEllipsis = css`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const mixinTypoEllipsisLines = css<IPropsEllipsisLines>`
  /* stylelint-disable */
  display: -webkit-box;
  line-height: ${props => props.lineHeight}px;
  overflow: hidden;
  -webkit-line-clamp: ${props => props.lines};
  -webkit-box-orient: vertical;
  ${props => {
    const h = props.lineHeight * props.lines;
    
    return props.withMaxHeight ? css`
      max-height: ${h}px;
    ` : css`
      height: ${h}px;
    `;
  }}
`;
