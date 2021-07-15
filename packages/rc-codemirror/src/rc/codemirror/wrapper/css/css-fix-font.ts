import {
  css
} from 'styled-components';

import {
  FONT_SIZE,
  FONT_LINE_HEIGHT
} from '../../../../const';

export default css`.CodeMirror {
  .CodeMirror-code {
    font-family: 'Operator Mono', Consolas, Monaco, 'Courier New', monospace;
    font-size: ${FONT_SIZE}px;
    line-height: ${FONT_LINE_HEIGHT}px;
  }
}`;
