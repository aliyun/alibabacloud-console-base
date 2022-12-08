import React, {
  useState
} from 'react';

import CodeMirror from '../../src';

const TEXT = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8" />
<title>Storybook</title>
<meta name="viewport" content="width=device-width, initial-scale=1" />
<style>
  html,
  body {
    overflow: hidden;
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
  }
</style>
<script>
  /* globals window */
  /* eslint-disable no-underscore-dangle */
  try {
    if (window.top !== window) {
      window.__REACT_DEVTOOLS_GLOBAL_HOOK__ = window.top.__REACT_DEVTOOLS_GLOBAL_HOOK__;
    }
  } catch (err) {
    // eslint-disable-next-line no-console
    console.warn('unable to connect to top frame for connecting dev tools');
  }
</script>
<style>
  #root[hidden],
  #docs-root[hidden] {
    display: none !important;
  }
</style>
</head>
<body>
<div id="root"></div>
<div id="docs-root"></div>
<script>
  window['VERSIONCHECK'] = "{\\"success\\":false,\\"data\\":{},\\"time\\":1631516552701}";
</script>
<script src="runtime~main.b8a28d93f0146f9317b2.bundle.js"></script>
<script src="vendors~main.4e01507078aa4c4a54ce.bundle.js"></script>
<script src="main.53c5760008011c6fd8ac.bundle.js"></script>
</body>
</html>`;

export default function DemoHtml(): JSX.Element {
  const [stateValue, setStateValue] = useState<string>(TEXT);

  return <CodeMirror {...{
    conf: {
      mode: 'text/html'
    },
    value: stateValue,
    onChange: setStateValue
  }} />;
}
