import styled from 'styled-components';

import {
  mixinBorderSecondaryBottom,
  mixinTextPrimary,
  mixinLinkPrimary,
  mixinBorderTertiary,
  mixinBgPrimary,
  mixinBgSecondary,
  typo
} from '@alicloud/console-base-theme';

export default styled.article`
  a {
    ${mixinLinkPrimary};
  }
  
  ul,
  ol,
  dl {
    margin: 1em 0 0 1.75em;
    padding: 0;
    line-height: inherit;
    font-size: inherit;
    color: inherit;
    
    li {
      margin: 0.5em 0;
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
  
  p,
  h1,
  h2,
  h3,
  h4,
  blockquote,
  fieldset,
  figure {
    margin: 1em 0;
    line-height: inherit;
    font-size: inherit;
    color: inherit;
  }
  
  blockquote {
    ${typo.tagBlockquote};
  }
  
  em {
    ${typo.tagEm};
  }
  
  code {
    ${typo.tagCode};
    
    &.clean {
      background-color: transparent;
    }
  }
  
  pre,
  code {
    ${typo.fontFamilyMono};
  }
  
  strong {
    ${typo.tagStrong};
  }
  
  kbd {
    ${typo.tagKbd};
  }
  
  br {
    content: '';
    display: block;
  }
  
  h1,
  h2,
  h3,
  h4 {
    font-weight: 600;
    ${mixinTextPrimary}
  }
  
  h1 {
    font-size: 2em;
  }
  
  h2 {
    font-size: 1.8em;
  }
  
  h3 {
    font-size: 1.5em;
  }
  
  h4 {
    font-size: 1.2em;
  }
  
  hr {
    margin: 16px 0;
    border: 0;
    height: 0;
    ${mixinBorderSecondaryBottom};
  }
  
  section {
    margin: 2em 0 1em 0;
  }
  
  p {
    margin: 0 0 1em 0;
    word-break: break-all;
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
    margin: 0;
    padding: 16px;
    background-color: #333;
    line-height: 1.6;
    overflow: auto;
    font-size: 0.9em;
    color: #fff;
    
    ol {
      margin: 0 0 0 3em;
      list-style: decimal outside;
      
      li {
        margin: 0;
      }
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
    
    thead {
      tr {
        ${mixinBgSecondary};
      }
    }
    
    tr {
      ${mixinBgPrimary};
    }
    
    th,
    td {
      padding: 8px 12px;
      font-size: 0.9em;
      text-align: left;
      color: inherit;
      ${mixinBorderTertiary};
      
      &:first-child {
        border-left: none;
        text-align: left;
      }
      
      &:last-child {
        border-right: none;
        text-align: left;
      }
    }
    
    th {
      border-top: none;
      border-bottom: none;
      font-weight: 600;
    }
    
    ul {
      li {
        p {
          margin: 0;
        }
      }
    }
  }
`;
