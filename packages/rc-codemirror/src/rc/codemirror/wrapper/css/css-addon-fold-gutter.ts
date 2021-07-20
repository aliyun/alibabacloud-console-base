import {
  css
} from 'styled-components';

// codemirror/addon/fold/foldgutter.css
export default css`.CodeMirror-foldmarker {
  color: blue;
  text-shadow: #b9f 1px 1px 2px, #b9f -1px -1px 2px, #b9f 1px -1px 2px, #b9f -1px 1px 2px;
  font-family: Arial, sans-serif;
  line-height: .3;
  cursor: pointer;
}

  .CodeMirror-foldgutter {
    width: .7em;
  }

  .CodeMirror-foldgutter-open, .CodeMirror-foldgutter-folded {
    cursor: pointer;
  }

  .CodeMirror-foldgutter-open:after {
    content: "\\25BE";
  }

  .CodeMirror-foldgutter-folded:after {
    content: "\\25B8";
  }`;
