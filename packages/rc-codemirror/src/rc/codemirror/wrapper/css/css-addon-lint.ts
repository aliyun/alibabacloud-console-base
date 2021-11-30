import {
  css
} from 'styled-components';

// codemirror/addon/lint/lint.css
export default css`
  /* stylelint-disable selector-class-pattern */
  .CodeMirror-lint-markers {
    width: 16px;
  }
  
  .CodeMirror-lint-tooltip {
    position: fixed;
    opacity: 0;
    z-index: 100;
    padding: 2px 5px;
    border: 1px solid #000;
    border-radius: 4px 4px 4px 4px;
    background-color: #ffd;
    max-width: 600px;
    overflow: hidden;
    font-family: monospace;
    font-size: 10px;
    white-space: pre-wrap;
    color: #000;
    transition: opacity 0.4s;
  }
  
  .CodeMirror-lint-mark {
    background-position: left bottom;
    background-repeat: repeat-x;
  }
  
  .CodeMirror-lint-mark-warning {
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAADCAYAAAC09K7GAAAAAXNSR0IArs4c6QAAAAZiS0dEAP8A/wD/oL2nkwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAAd0SU1FB9sJFhQXEbhTg7YAAAAZdEVYdENvbW1lbnQAQ3JlYXRlZCB3aXRoIEdJTVBXgQ4XAAAAMklEQVQI12NkgIIvJ3QXMjAwdDN+OaEbysDA4MPAwNDNwMCwiOHLCd1zX07o6kBVGQEAKBANtobskNMAAAAASUVORK5CYII=);
  }
  
  .CodeMirror-lint-mark-error {
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAADCAYAAAC09K7GAAAAAXNSR0IArs4c6QAAAAZiS0dEAP8A/wD/oL2nkwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAAd0SU1FB9sJDw4cOCW1/KIAAAAZdEVYdENvbW1lbnQAQ3JlYXRlZCB3aXRoIEdJTVBXgQ4XAAAAHElEQVQI12NggIL/DAz/GdA5/xkY/qPKMDAwAADLZwf5rvm+LQAAAABJRU5ErkJggg==);
  }
  
  .CodeMirror-lint-marker {
    display: inline-block;
    position: relative;
    background-position: center center;
    background-repeat: no-repeat;
    width: 16px;
    height: 16px;
    cursor: pointer;
    vertical-align: middle;
  }
  
  .CodeMirror-lint-message {
    padding-left: 18px;
    background-position: top left;
    background-repeat: no-repeat;
  }
  
  .CodeMirror-lint-marker-warning,
  .CodeMirror-lint-message-warning {
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAANlBMVEX/uwDvrwD/uwD/uwD/uwD/uwD/uwD/uwD/uwD6twD/uwAAAADurwD2tQD7uAD+ugAAAAD/uwDhmeTRAAAADHRSTlMJ8mN1EYcbmiixgACm7WbuAAAAVklEQVR42n3PUQqAIBBFUU1LLc3u/jdbOJoW1P08DA9Gba8+YWJ6gNJoNYIBzAA2chBth5kLmG9YUoG0NHAUwFXwO9LuBQL1giCQb8gC9Oro2vp5rncCIY8L8uEx5ZkAAAAASUVORK5CYII=);
  }
  
  .CodeMirror-lint-marker-error,
  .CodeMirror-lint-message-error {
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAHlBMVEW7AAC7AACxAAC7AAC7AAAAAAC4AAC5AAD///+7AAAUdclpAAAABnRSTlMXnORSiwCK0ZKSAAAATUlEQVR42mWPOQ7AQAgDuQLx/z8csYRmPRIFIwRGnosRrpamvkKi0FTIiMASR3hhKW+hAN6/tIWhu9PDWiTGNEkTtIOucA5Oyr9ckPgAWm0GPBog6v4AAAAASUVORK5CYII=);
  }
  
  .CodeMirror-lint-marker-multiple {
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAHCAMAAADzjKfhAAAACVBMVEUAAAAAAAC/v7914kyHAAAAAXRSTlMAQObYZgAAACNJREFUeNo1ioEJAAAIwmz/H90iFFSGJgFMe3gaLZ0od+9/AQZ0ADosbYraAAAAAElFTkSuQmCC);
    background-position: right bottom;
    background-repeat: no-repeat;
    width: 100%;
    height: 100%;
  }
  
  .CodeMirror-lint-line-error {
    background-color: rgba(183, 76, 81, 0.08);
  }
  
  .CodeMirror-lint-line-warning {
    background-color: rgba(255, 211, 0, 0.1);
  }
`;
