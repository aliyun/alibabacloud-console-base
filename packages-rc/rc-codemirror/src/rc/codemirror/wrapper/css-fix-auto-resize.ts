import {
  css
} from 'styled-components';

import {
  ILinesMinMax
} from '../../../types';
import {
  computeScrollHeight
} from '../../../util';

// CodeMirror 并没有 auto-resize 的配置，只能通过 CSS 来搞 https://codemirror.net/5/demo/resize.html
export default css<Required<ILinesMinMax>>`
  /* stylelint-disable selector-class-pattern */
  .CodeMirror {
    height: auto;
  
    ${props => (props.linesMin > 0 ? css`
      .CodeMirror-scroll {
        min-height: ${computeScrollHeight(props.linesMin)}px;
      }
    ` : null)}
    ${props => (props.linesMax > 0 ? css`
      .CodeMirror-scroll {
        max-height: ${computeScrollHeight(props.linesMax)}px;
      }
    ` : null)}
    
    .cm-tab {
      background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAMCAYAAAAkuj5RAAAAAXNSR0IArs4c6QAAAGFJREFUSMft1LsRQFAQheHPowAKoACx3IgEKtaEHujDjORSgWTH/ZOdnZOcM/sgk/kFFWY0qV8foQwS4MKBCS3qR6ixBJvElOobYAtivseIE120FaowJPN75GMu8j/LfMwNjh4HUpwg4LUAAAAASUVORK5CYII=) no-repeat right;
    }
  }
`;
