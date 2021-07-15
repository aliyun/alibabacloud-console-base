import {
  css
} from 'styled-components';

interface IProps {
  minHeight: number;
  maxHeight: number;
}

export default css<IProps>`.CodeMirror {
  height: auto;
  
  .CodeMirror-scroll {
    min-height: ${props => props.minHeight}px;
    max-height: ${props => props.maxHeight}px;
  }
  
  .cm-tab {
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAMCAYAAAAkuj5RAAAAAXNSR0IArs4c6QAAAGFJREFUSMft1LsRQFAQheHPowAKoACx3IgEKtaEHujDjORSgWTH/ZOdnZOcM/sgk/kFFWY0qV8foQwS4MKBCS3qR6ixBJvElOobYAtivseIE120FaowJPN75GMu8j/LfMwNjh4HUpwg4LUAAAAASUVORK5CYII=) no-repeat right;
  }
}`;
