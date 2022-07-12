import styled from 'styled-components';

import {
  mixinTypoFontBase,
  mixinTypoBlockquote,
  mixinTypoEm,
  mixinTypoCode,
  mixinTypoFontFamilyMono,
  mixinTypoStrong,
  mixinTypoKbd,
  mixinTextPrimary,
  mixinTextSecondary,
  mixinTextInverse,
  mixinLinkPrimary,
  mixinBorderTertiary,
  mixinBgPrimary,
  mixinBgSecondary,
  mixinBgInverse,
  mixinBorderSecondaryBottom
} from '@alicloud/console-base-theme';

export default styled.article`
  ${mixinTypoFontBase}
  ${mixinTextSecondary}
  
  a {
    ${mixinLinkPrimary}
  }
  
  em {
    ${mixinTypoEm}
  }
  
  code {
    ${mixinTypoCode}
    
    &.clean {
      background-color: transparent;
    }
  }
  
  strong {
    ${mixinTypoStrong}
  }
  
  kbd {
    ${mixinTypoKbd}
  }
  
  br {
    content: '';
    display: block;
  }
  
  ul,
  ol,
  dl {
    padding: 0;
    line-height: inherit;
    font-size: inherit;
    color: inherit;
    
    li {
      margin: 0.5em 0;
      list-style: inherit;
    }
  }
  
  ul {
    list-style: disc inside;
    
    ul {
      list-style-type: circle;
      
      ul {
        list-style-type: disc;
      }
    }
  }
  
  ol {
    list-style: decimal inside;
    
    ol {
      list-style-type: lower-roman;
    }
  }
  
  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  blockquote,
  fieldset,
  figure {
    line-height: inherit;
    font-size: inherit;
    color: inherit;
  }
  
  blockquote {
    ${mixinTypoBlockquote}
  }
  
  pre,
  code {
    ${mixinTypoFontFamilyMono}
  }
  
  p {
    word-break: break-word;
  }
  
  h1,
  h2,
  h3,
  h4,
  h5 {
    font-weight: 600;
    ${mixinTextPrimary}
  }
  
  h1 {
    font-size: 1.75em;
  }
  
  h2 {
    font-size: 1.5em;
  }
  
  h3 {
    font-size: 1.2em;
  }
  
  h4 {
    font-size: 1em;
  }
  
  hr {
    margin: 16px 0;
    border: 0;
    height: 0;
    ${mixinBorderSecondaryBottom}
  }
  
  dl {
    dt {
      margin-top: 16px;
      padding: 0;
      font-weight: 600;
    }
    
    dd {
      margin: 0 0 1em 0;
    }
  }
  
  pre {
    padding: 16px;
    line-height: 1.6;
    overflow: auto;
    font-size: 0.95em;
    white-space: pre-wrap;
    word-break: break-word;
    ${mixinTextInverse}
    ${mixinBgInverse}
    
    code {
      padding: unset;
      border: unset;
      border-radius: unset;
      background: unset;
      font-size: inherit;
      color: unset;
    }
  }
  
  img {
    display: block;
    border: 0;
    max-width: 100%;
  }
  
  video {
    width: 100%;
    height: 100%;
  }
  
  iframe {
    border: 0;
    width: 100%;
    height: 1024px;
  }
  
  figcaption,
  caption {
    margin-bottom: 0.25em;
    font-style: italic;
    text-align: left;
  }
  
  table {
    display: table;
    border-collapse: collapse;
    border-spacing: 0;
    width: 100%;
    word-wrap: break-word;
    color: inherit;
    
    &::-webkit-scrollbar {
      display: none;
    }
    
    tr {
      ${mixinBgPrimary}
    }
    
    thead {
      tr {
        ${mixinBgSecondary}
      }
    }
    
    th,
    td {
      ${mixinBorderTertiary}
    }
  
    /* stylelint-disable no-duplicate-selectors */
    th,
    td {
      padding: 8px 12px;
      font-size: 0.95em;
      text-align: left;
      color: inherit;
      
      &:first-child {
        border-left-width: 0;
        text-align: left;
      }
      
      &:last-child {
        border-right-width: 0;
        text-align: left;
      }
    }
    
    th {
      font-weight: 600;
      
      &[colspan] {
        text-align: center;
      }
    }
  }
  
  p,
  section,
  h1,
  h2,
  h3,
  h4,
  h5,
  ul,
  ol,
  dl,
  li,
  pre,
  table,
  blockquote,
  fieldset,
  figure {
    margin: 1em 0;
    
    &:first-child {
      margin-top: 0;
    }
    
    &:last-child {
      margin-bottom: 0;
    }
  }
  
  ul,
  ol,
  dl {
    margin: 1em 0 1em 1em;
  }
`;
