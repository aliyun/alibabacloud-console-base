import {
  css
} from 'styled-components';

// codemirror/addon/fold/foldgutter.css
export default css`
  /* stylelint-disable selector-class-pattern */
  .CodeMirror-foldmarker {
    line-height: 0.3;
    cursor: pointer;
    font-family: Arial, sans-serif;
    text-shadow: #b9f 1px 1px 2px, #b9f -1px -1px 2px, #b9f 1px -1px 2px, #b9f -1px 1px 2px;
    color: #00f;
  }
  
  .CodeMirror-foldgutter {
    width: 0.7em;
  }
  
  .CodeMirror-foldgutter-open,
  .CodeMirror-foldgutter-folded {
    cursor: pointer;
  }
  
  .CodeMirror-foldgutter-open:after {
    content: '\\25BE';
  }
  
  .CodeMirror-foldgutter-folded:after {
    content: '\\25B8';
  }
`;
