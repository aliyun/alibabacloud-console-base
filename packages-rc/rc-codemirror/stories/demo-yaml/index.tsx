import React, {
  useState
} from 'react';

import CodeMirror from '../../src';

const TEXT = `# refer to https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md
# https://github.com/DavidAnson/markdownlint/blob/main/schema/.markdownlint.yaml

# MD004/ul-style - Unordered list style
MD004:
  style: "sublist"

# MD013/line-length - Line length
MD013:
  line_length: 200
  heading_line_length: 128
  code_block_line_length: 200

# MD024/no-duplicate-heading/no-duplicate-header - Multiple headings with the same content
MD024:
  allow_different_nesting: true

# MD047/single-trailing-newline
MD047: false`;

export default function DemoYaml(): JSX.Element {
  const [stateValue, setStateValue] = useState<string>(TEXT);

  return <CodeMirror {...{
    conf: {
      mode: 'text/yaml'
    },
    value: stateValue,
    onChange: setStateValue
  }} />;
}
