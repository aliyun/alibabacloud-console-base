// 此文件手动编辑

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
  mixinLinkPrimary
} from './link';
import {
  mixinBgSecondaryFade,
  mixinBgTertiary
} from './bg';
import {
  mixinBorderPrimary,
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
  margin: 0 0.1em;
  padding: 0.1em 0.6em;
  border-radius: 3px;
  box-shadow: 0 1px 0 ${COLOR.SHADOW}, 0 0 0 2px ${COLOR.TEXT_INVERSE} inset;
  box-shadow: 0 1px 0 var(--cb-color-shadow, ${COLOR.SHADOW}), 0 0 0 2px var(--cb-color-text-inverse, ${COLOR.TEXT_INVERSE}) inset;
  font: 600 12px/1.4 Arial, 'Helvetica Neue', Helvetica, sans-serif;
  white-space: nowrap;
  ${mixinTextSecondary}
  ${mixinBgTertiary}
  ${mixinBorderPrimary}
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

/**
 * 当某元素内部有各种 inline 元素需要有样式的时候，用它
 */
export const mixinTypoElementsInline = css`
  a {
    text-decoration: none;
    ${mixinLinkPrimary}
    
    &:link:hover {
      text-decoration: underline;
    }
  }
  
  em {
    ${mixinTypoEm}
  }
  
  strong {
    font-weight: 600;
  }
  
  small {
    font-size: inherit;
    ${mixinTextTertiary}
  }
  
  code {
    ${mixinTypoCode}
    ${mixinTypoFontFamilyMono}
  }
  
  kbd {
    ${mixinTypoKbd}
  }
  
  br {
    content: '';
    display: block;
  }
`;

/**
 * 当某元素内部有 ul\ol\dl 元素需要有样式的时候，用它
 */
export const mixinTypoElementsList = css`
  ul,
  ol,
  dl {
    margin: 1em 0 1em 2em;
    padding: 0;
    line-height: 1.5 !important;
    font-size: inherit;
    color: inherit;
    
    &:first-child {
      margin-top: 0;
    }
    
    &:last-child {
      margin-bottom: 0;
    }
    
    li {
      margin: 0.5em 0;
      list-style: inherit;
    }
  }
  
  ul {
    list-style: disc outside;
    
    ul {
      list-style-type: circle;
      
      ul {
        list-style-type: disc;
      }
    }
  }
  
  ol {
    list-style: decimal outside;
    
    ol {
      list-style-type: lower-roman;
    }
  }
  
  dl {
    dt {
      margin-top: 1em;
      padding: 0;
      font-weight: 600;
    }
    
    dd {
      margin: 0 0 1em 0;
    }
  }
`;
