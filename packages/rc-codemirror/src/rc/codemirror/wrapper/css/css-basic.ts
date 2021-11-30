import {
  css
} from 'styled-components';

// codemirror/lib/codemirror.css
export default css`
  /* stylelint-disable selector-class-pattern */
  .CodeMirror {
    position: relative;
    background: #fff;
    height: 300px;
    overflow: hidden;
    font-family: monospace;
    color: #000;
    direction: ltr;
  }
  
  .CodeMirror-lines {
    padding: 4px 0;
    min-height: 1px;
    cursor: text;
  }
  
  .CodeMirror pre.CodeMirror-line,
  .CodeMirror pre.CodeMirror-line-like {
    position: relative;
    z-index: 2;
    margin: 0;
    padding: 0 4px;
    border-width: 0;
    border-radius: 0;
    background: transparent;
    line-height: inherit;
    overflow: visible;
    font-family: inherit;
    font-size: inherit;
    white-space: pre;
    word-wrap: normal;
    color: inherit;
    font-variant-ligatures: contextual;
    -webkit-tap-highlight-color: transparent;
  }
  
  .CodeMirror-scrollbar-filler,
  .CodeMirror-gutter-filler {
    background-color: #fff;
  }
  
  .CodeMirror-gutters {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 3;
    border-right: 1px solid #ddd;
    background-color: #f7f7f7;
    min-height: 100%;
    white-space: nowrap;
  }
  
  .CodeMirror-linenumber {
    padding: 0 3px 0 5px;
    min-width: 20px;
    text-align: right;
    white-space: nowrap;
    color: #999;
  }
  
  .CodeMirror-guttermarker {
    color: #000;
  }
  
  .CodeMirror-guttermarker-subtle {
    color: #999;
  }
  
  .CodeMirror-cursor {
    position: absolute;
    border-right: none;
    border-left: 1px solid #000;
    width: 0;
    pointer-events: none;
  }
  
  .CodeMirror div.CodeMirror-secondarycursor {
    border-left: 1px solid #c0c0c0;
  }
  
  .cm-fat-cursor .CodeMirror-cursor {
    border: 0 !important;
    background: #7e7;
    width: auto;
  }
  
  .cm-fat-cursor div.CodeMirror-cursors {
    z-index: 1;
  }
  
  .cm-fat-cursor-mark {
    background-color: rgba(20, 255, 20, 0.5);
    animation: blink 1.06s steps(1) infinite;
  }
  
  .cm-animate-fat-cursor {
    border: 0;
    background-color: #7e7;
    width: auto;
    animation: blink 1.06s steps(1) infinite;
  }
  
  @keyframes blink {
    50% {
      background-color: transparent;
    }
  }
  
  .cm-tab {
    display: inline-block;
    text-decoration: inherit;
  }
  
  .CodeMirror-rulers {
    position: absolute;
    top: -50px;
    right: 0;
    bottom: 0;
    left: 0;
    overflow: hidden;
  }
  
  .CodeMirror-ruler {
    position: absolute;
    top: 0;
    bottom: 0;
    border-left: 1px solid #ccc;
  }
  
  .cm-s-default .cm-header {
    color: #00f;
  }
  
  .cm-s-default .cm-quote {
    color: #090;
  }
  
  .cm-negative {
    color: #d44;
  }
  
  .cm-positive {
    color: #292;
  }
  
  .cm-header,
  .cm-strong {
    font-weight: 600;
  }
  
  .cm-em {
    font-style: italic;
  }
  
  .cm-link {
    text-decoration: underline;
  }
  
  .cm-strikethrough {
    text-decoration: line-through;
  }
  
  .cm-s-default .cm-keyword {
    color: #708;
  }
  
  .cm-s-default .cm-atom {
    color: #219;
  }
  
  .cm-s-default .cm-number {
    color: #164;
  }
  
  .cm-s-default .cm-def {
    color: #00f;
  }
  
  .cm-s-default .cm-variable-2 {
    color: #05a;
  }
  
  .cm-s-default .cm-variable-3,
  .cm-s-default .cm-type {
    color: #085;
  }
  
  .cm-s-default .cm-comment {
    color: #a50;
  }
  
  .cm-s-default .cm-string {
    color: #a11;
  }
  
  .cm-s-default .cm-string-2 {
    color: #f50;
  }
  
  .cm-s-default .cm-meta {
    color: #555;
  }
  
  .cm-s-default .cm-qualifier {
    color: #555;
  }
  
  .cm-s-default .cm-builtin {
    color: #30a;
  }
  
  .cm-s-default .cm-bracket {
    color: #997;
  }
  
  .cm-s-default .cm-tag {
    color: #170;
  }
  
  .cm-s-default .cm-attribute {
    color: #00c;
  }
  
  .cm-s-default .cm-hr {
    color: #999;
  }
  
  .cm-s-default .cm-link {
    color: #00c;
  }
  
  .cm-s-default .cm-error {
    color: #f00;
  }
  
  .cm-invalidchar {
    color: #f00;
  }
  
  .CodeMirror-composing {
    border-bottom: 2px solid;
  }
  
  div.CodeMirror span.CodeMirror-matchingbracket {
    color: #0b0;
  }
  
  div.CodeMirror span.CodeMirror-nonmatchingbracket {
    color: #a22;
  }
  
  .CodeMirror-matchingtag {
    background: rgba(255, 150, 0, 0.3);
  }
  
  .CodeMirror-activeline-background {
    background: #e8f2ff;
  }
  
  .CodeMirror-scroll {
    position: relative;
    margin-right: -50px;
    margin-bottom: -50px;
    padding-bottom: 50px;
    outline: none;
    height: 100%;
    overflow: scroll !important;
  }
  
  .CodeMirror-sizer {
    position: relative;
    border-right: 50px solid transparent;
  }
  
  .CodeMirror-vscrollbar,
  .CodeMirror-hscrollbar,
  .CodeMirror-scrollbar-filler,
  .CodeMirror-gutter-filler {
    display: none;
    position: absolute;
    z-index: 6;
    outline: none;
  }
  
  .CodeMirror-vscrollbar {
    top: 0;
    right: 0;
    overflow-x: hidden;
    overflow-y: scroll;
  }
  
  .CodeMirror-hscrollbar {
    bottom: 0;
    left: 0;
    overflow-x: scroll;
    overflow-y: hidden;
  }
  
  .CodeMirror-scrollbar-filler {
    right: 0;
    bottom: 0;
  }
  
  .CodeMirror-gutter-filler {
    bottom: 0;
    left: 0;
  }
  
  .CodeMirror-gutter {
    display: inline-block;
    margin-bottom: -50px;
    height: 100%;
    vertical-align: top;
    white-space: normal;
  }
  
  .CodeMirror-gutter-wrapper {
    position: absolute;
    z-index: 4;
    border: none !important;
    background: none !important;
  }
  
  .CodeMirror-gutter-background {
    position: absolute;
    top: 0;
    bottom: 0;
    z-index: 4;
  }
  
  .CodeMirror-gutter-elt {
    position: absolute;
    z-index: 4;
    cursor: default;
  }
  
  .CodeMirror-gutter-wrapper ::selection {
    background-color: transparent;
  }
  
  .CodeMirror-wrap pre.CodeMirror-line,
  .CodeMirror-wrap pre.CodeMirror-line-like {
    white-space: pre-wrap;
    word-wrap: break-word;
    word-break: normal;
  }
  
  .CodeMirror-linebackground {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 0;
  }
  
  .CodeMirror-linewidget {
    position: relative;
    z-index: 2;
    padding: 0.1px;
  }
  
  .CodeMirror-rtl pre {
    direction: rtl;
  }
  
  .CodeMirror-code {
    outline: none;
  }
  
  .CodeMirror-scroll,
  .CodeMirror-sizer,
  .CodeMirror-gutter,
  .CodeMirror-gutters,
  .CodeMirror-linenumber {
    box-sizing: content-box;
  }
  
  .CodeMirror-measure {
    position: absolute;
    visibility: hidden;
    width: 100%;
    height: 0;
    overflow: hidden;
    
    pre {
      position: static;
    }
  }
  
  div.CodeMirror-cursors {
    position: relative;
    visibility: hidden;
    z-index: 3;
  }
  
  div.CodeMirror-dragcursors {
    visibility: visible;
  }
  
  .CodeMirror-focused div.CodeMirror-cursors {
    visibility: visible;
  }
  
  .CodeMirror-selected {
    background: #d9d9d9;
  }
  
  .CodeMirror-focused .CodeMirror-selected {
    background: #d7d4f0;
  }
  
  .CodeMirror-crosshair {
    cursor: crosshair;
  }
  
  .CodeMirror-line::selection,
  .CodeMirror-line > span::selection,
  .CodeMirror-line > span > span::selection {
    background: #d7d4f0;
  }
  
  .cm-searching {
    background-color: #ffa;
    background-color: rgba(255, 255, 0, 0.4);
  }
  
  .cm-force-border {
    padding-right: 0.1px;
  }
  
  @media print {
    .CodeMirror div.CodeMirror-cursors {
      visibility: hidden;
    }
  }
  
  .cm-tab-wrap-hack:after {
    content: '';
  }
  
  span.CodeMirror-selectedtext {
    background: none;
  }
`;
