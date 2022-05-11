import {
  css
} from 'styled-components';

// codemirror/theme/oceanic-next.css
export default css`
  /* stylelint-disable selector-class-pattern */
  .cm-s-oceanic-next.CodeMirror {
    background: #304148;
    color: #f8f8f2;
  }
  
  .cm-s-oceanic-next div.CodeMirror-selected {
    background: rgba(101, 115, 126, 0.33);
  }
  
  .cm-s-oceanic-next .CodeMirror-line::selection,
  .cm-s-oceanic-next .CodeMirror-line > span::selection,
  .cm-s-oceanic-next .CodeMirror-line > span > span::selection {
    background: rgba(101, 115, 126, 0.33);
  }
  
  .cm-s-oceanic-next .CodeMirror-gutters {
    border-right: 10px;
    background: #304148;
  }
  
  .cm-s-oceanic-next .CodeMirror-guttermarker {
    color: #fff;
  }
  
  .cm-s-oceanic-next .CodeMirror-guttermarker-subtle {
    color: #d0d0d0;
  }
  
  .cm-s-oceanic-next .CodeMirror-linenumber {
    color: #d0d0d0;
  }
  
  .cm-s-oceanic-next .CodeMirror-cursor {
    border-left: 1px solid #f8f8f0;
  }
  
  .cm-s-oceanic-next.cm-fat-cursor .CodeMirror-cursor {
    background-color: #a2a8a175 !important;
  }
  
  .cm-s-oceanic-next .cm-animate-fat-cursor {
    background-color: #a2a8a175 !important;
  }
  
  .cm-s-oceanic-next span.cm-comment {
    color: #65737e;
  }
  
  .cm-s-oceanic-next span.cm-atom {
    color: #c594c5;
  }
  
  .cm-s-oceanic-next span.cm-number {
    color: #f99157;
  }
  
  .cm-s-oceanic-next span.cm-property {
    color: #99c794;
  }
  
  .cm-s-oceanic-next span.cm-attribute,
  .cm-s-oceanic-next span.cm-keyword {
    color: #c594c5;
  }
  
  .cm-s-oceanic-next span.cm-builtin {
    color: #66d9ef;
  }
  
  .cm-s-oceanic-next span.cm-string {
    color: #99c794;
  }
  
  .cm-s-oceanic-next span.cm-variable,
  .cm-s-oceanic-next span.cm-variable-2,
  .cm-s-oceanic-next span.cm-variable-3 {
    color: #f8f8f2;
  }
  
  .cm-s-oceanic-next span.cm-def {
    color: #69c;
  }
  
  .cm-s-oceanic-next span.cm-bracket {
    color: #5fb3b3;
  }
  
  .cm-s-oceanic-next span.cm-tag {
    color: #c594c5;
  }
  
  .cm-s-oceanic-next span.cm-header {
    color: #c594c5;
  }
  
  .cm-s-oceanic-next span.cm-link {
    color: #c594c5;
  }
  
  .cm-s-oceanic-next span.cm-error {
    background: #c594c5;
    color: #f8f8f0;
  }
  
  .cm-s-oceanic-next .CodeMirror-activeline-background {
    background: rgba(101, 115, 126, 0.33);
  }
  
  .cm-s-oceanic-next .CodeMirror-matchingbracket {
    text-decoration: underline;
    color: #fff !important;
  }
`;
