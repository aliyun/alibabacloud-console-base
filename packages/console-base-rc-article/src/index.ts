import styled from 'styled-components';

import {
  COLOR
} from '@alicloud/console-base-theme';

export default styled.article`
  a:link {
    text-decoration: none;
    color: ${COLOR.LINK_PRIMARY};
    color: var(--cb-color-link-primary, ${COLOR.LINK_PRIMARY});
    
    &:hover {
      text-decoration: underline;
      color: ${COLOR.LINK_PRIMARY};
      color: var(--cb-color-link-primary, ${COLOR.LINK_PRIMARY});
    }
  }
  
  a:visited,
  a:visited:hover {
    color: ${COLOR.LINK_PRIMARY};
    color: var(--cb-color-link-primary, ${COLOR.LINK_PRIMARY});
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
    padding: 0 1.2em;
    border-left: 4px solid ${COLOR.LINE_BORDER};
    border-left: 4px solid var(--cb-color-line-border, ${COLOR.LINE_BORDER});
    color: ${COLOR.TEXT_CAPTION};
    color: var(--cb-color-text-caption, ${COLOR.TEXT_CAPTION});
  }
  
  em {
    font-style: normal;
    color: ${COLOR.TEXT_EMPHASIS};
    color: var(--cb-color-text-emphasis, ${COLOR.TEXT_EMPHASIS});
  }
  
  code {
    padding: 2px;
    border-radius: 3px;
    background-color: ${COLOR.FILL_LIGHT_FADED};
    background-color: var(--cb-color-fill-light-faded, ${COLOR.FILL_LIGHT_FADED});
    font-size: 0.9em;
    
    &.clean {
      background-color: transparent;
    }
  }
  
  pre,
  code {
    font-family: 'Operator Mono A', Menlo, Consolas, Monaco, monospace;
  }
  
  strong {
    font-weight: 600;
    color: ${COLOR.TEXT_PRIMARY};
    color: var(--cb-color-text-primary, ${COLOR.TEXT_PRIMARY});
  }
  
  kbd {
    display: inline-block;
    padding: 3px 5px;
    border: 1px solid ${COLOR.LINE_BORDER};
    border: 1px solid var(--cb-color-line-border, ${COLOR.LINE_BORDER});
    border-radius: 3px;
    box-shadow: inset 0 -1px 0 #bbb;
    background-color: ${COLOR.FILL_LIGHT};
    background-color: var(--cb-color-fill-light, ${COLOR.FILL_LIGHT});
    line-height: 10px;
    font-size: 11px;
    color: ${COLOR.TEXT_SECONDARY};
    color: var(--cb-color-text-secondary, ${COLOR.TEXT_SECONDARY});
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
    color: ${COLOR.TEXT_PRIMARY};
    color: var(--cb-color-text-primary, ${COLOR.TEXT_PRIMARY});
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
    border-bottom: 1px solid ${COLOR.LINE_BORDER};
    border-bottom: 1px solid var(--cb-color-line-border, ${COLOR.LINE_BORDER});
    height: 0;
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
        background-color: ${COLOR.FILL_TABLE_TH};
        background-color: var(--cb-color-fill-table-th, ${COLOR.FILL_TABLE_TH});
      }
    }
    
    tr {
      background-color: #fff;
    }
    
    th,
    td {
      padding: 8px 12px;
      border: 1px solid ${COLOR.LINE_BORDER};
      border: 1px solid var(--cb-color-line-border, ${COLOR.LINE_BORDER});
      font-size: 0.9em;
      text-align: left;
      color: inherit;
      
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
