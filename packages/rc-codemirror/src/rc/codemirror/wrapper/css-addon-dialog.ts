import {
  css
} from 'styled-components';

// codemirror/addon/dialog/dialog.css
export default css`
  /* stylelint-disable selector-class-pattern */
  .CodeMirror-dialog {
    position: absolute;
    right: 0;
    left: 0;
    z-index: 15;
    padding: 0.1em 0.8em;
    background: inherit;
    overflow: hidden;
    color: inherit;
    
    input {
      border: none;
      outline: none;
      background: transparent;
      width: 20em;
      font-family: monospace;
      color: inherit;
    }
    
    button {
      font-size: 70%;
    }
  }
  
  .CodeMirror-dialog-top {
    top: 0;
    border-bottom: 1px solid #eee;
  }
  
  .CodeMirror-dialog-bottom {
    bottom: 0;
    border-top: 1px solid #eee;
  }
`;
