import React from 'react';

import {
  H1,
  CodeViewerHtml,
  CodeViewerJson,
  CodeViewerJs,
  CodeViewerTs,
  CodeViewerLess,
  CodeViewerMarkdown
} from '../../src';
import Shared from '../_shared';

const CODE_HTML = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8" />
<title>Console</title>
<meta name="viewport" content="width=device-width, initial-scale=1" />
<link rel="stylesheet" href="/index.css" />
<style>
html, body {
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
}
</style>
<script>
(function() {
  window.CONSOLE_BASE_SETTINGS = { PRODUCT_ID: 'xx' };
})();
</script>
</head>
<body>
<script src="//g.alicdn.com/aliyun/console-base-loader/index.js"></script>
<div id="root"></div>
<script src="/index.js"></script>
</body>
</html>`;

const CODE_JSON = `{
  "str": "i am a string",
  "num": 1,
  "bool": true,
  "obj": {
    "key1": "value1"
  },
  "null": null,
  "arr": [1, null, false, ""]
}`;

const CODE_JS = `var hasOwnProperty = Object.prototype.hasOwnProperty;

module.exports = function extend(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];
    
    for (var key in source) {
      if (hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }
  
  return target;
};`;

const CODE_TS = `import React from 'react';

import CodeViewer from './_code-viewer';

interface IProps {
  code: string;
}

export default function CodeHtml({
  code
}: IProps): JSX.Element {
  return <CodeViewerViewer {...{
    code,
    type: 'html'
  }} />;
}`;

const CODE_LESS = `/* Based on https://github.com/dempfi/ayu */

.cm-s-ayu-dark.CodeMirror { background: #0a0e14; color: #b3b1ad; }
.cm-s-ayu-dark div.CodeMirror-selected { background: #273747; }
.cm-s-ayu-dark .CodeMirror-line::selection, .cm-s-ayu-dark .CodeMirror-line > span::selection, .cm-s-ayu-dark .CodeMirror-line > span > span::selection { background: rgba(39, 55, 71, 99); }
.cm-s-ayu-dark .CodeMirror-line::-moz-selection, .cm-s-ayu-dark .CodeMirror-line > span::-moz-selection, .cm-s-ayu-dark .CodeMirror-line > span > span::-moz-selection { background: rgba(39, 55, 71, 99); }
.cm-s-ayu-dark .CodeMirror-gutters { background: #0a0e14; border-right: 0; }
.cm-s-ayu-dark .CodeMirror-guttermarker { color: white; }
.cm-s-ayu-dark .CodeMirror-guttermarker-subtle { color: #3d424d; }
.cm-s-ayu-dark .CodeMirror-linenumber { color: #3d424d; }
.cm-s-ayu-dark .CodeMirror-cursor { border-left: 1px solid #e6b450; }
.cm-s-ayu-dark.cm-fat-cursor .CodeMirror-cursor { background-color: #a2a8a175 !important; }
.cm-s-ayu-dark .cm-animate-fat-cursor { background-color: #a2a8a175 !important; }

.cm-s-ayu-dark {
  span.cm-comment { color: #626a73; }
  span.cm-atom { color: #ae81ff; }
  span.cm-number { color: #e6b450; }

  span.cm-comment.cm-attribute { color: #ffb454; }
  span.cm-comment.cm-def { color: rgba(57, 186, 230, 80); }
  span.cm-comment.cm-tag { color: #39bae6; }
  span.cm-comment.cm-type { color: #5998a6; }

  span.cm-property,
  span.cm-attribute { color: #ffb454; }  
  span.cm-keyword { color: #ff8f40; } 
  span.cm-builtin { color: #e6b450; }
  span.cm-string { color: #c2d94c; }

  span.cm-variable { color: #b3b1ad; }
  span.cm-variable-2 { color: #f07178; }
  span.cm-variable-3 { color: #39bae6; }
  span.cm-type { color: #ff8f40; }
  span.cm-def { color: #ffee99; }
  span.cm-bracket { color: #f8f8f2; }
  span.cm-tag { color: rgba(57, 186, 230, 80); }
  span.cm-header { color: #c2d94c; }
  span.cm-link { color: #39bae6; }
  span.cm-error { color: #ff3333; }
}

.cm-s-ayu-dark .CodeMirror-activeline-background { background: #01060e; }
.cm-s-ayu-dark .CodeMirror-matchingbracket {
  text-decoration: underline;
  color: white !important;
}`;

const CODE_MARKDOWN = `Markdown
===

## 标题

段落

* 列表 1
* 列表 2

![图片](//fdsafdas.com/jj)

[](//fdsafdas.com/jj)
`;

export default function DemoCodeViewer(): JSX.Element {
  return <>
    <Shared />
    <H1>HTML</H1>
    <CodeViewerHtml>{CODE_HTML}</CodeViewerHtml>
    <H1>JSON</H1>
    <CodeViewerJson>{CODE_JSON}</CodeViewerJson>
    <H1>JS</H1>
    <CodeViewerJs>{CODE_JS}</CodeViewerJs>
    <H1>TS</H1>
    <CodeViewerTs>{CODE_TS}</CodeViewerTs>
    <H1>CSS / LESS</H1>
    <CodeViewerLess>{CODE_LESS}</CodeViewerLess>
    <H1>Markdwon</H1>
    <CodeViewerMarkdown>{CODE_MARKDOWN}</CodeViewerMarkdown>
  </>;
}
