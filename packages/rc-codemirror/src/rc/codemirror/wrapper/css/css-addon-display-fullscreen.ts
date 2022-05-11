import {
  css
} from 'styled-components';

// codemirror/addon/display/fullscreen.css
export default css`
  /* stylelint-disable selector-class-pattern */
  .CodeMirror-fullscreen {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 9;
    height: auto;
  }
`;
