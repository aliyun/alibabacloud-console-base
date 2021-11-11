import {
  Extension,
  Code,
  State
} from 'micromark-util-types';
import {
  codes
} from 'micromark-util-symbol/codes';
import {
  types
} from 'micromark-util-symbol/types';

import {
  VARIABLE_TYPES
} from './const';

export default function syntax(): Extension {
  return {
    text: {
      [`${codes.leftCurlyBrace}`]: {
        name: 'variables',
        tokenize(effects, ok, nok): State {
          function inside(code: Code): State | void {
            switch (code) {
              case null:
              case codes.carriageReturn:
              case codes.lineFeed:
              case codes.carriageReturnLineFeed:
                return nok(code);
              case codes.backslash:
                effects.consume(code);
                
                // eslint-disable-next-line @typescript-eslint/no-use-before-define
                return insideEscape;
              case codes.rightCurlyBrace:
                effects.exit(types.chunkString);
                effects.exit(VARIABLE_TYPES.STRING);
                effects.enter(VARIABLE_TYPES.MARKER_END);
                effects.consume(code);
                effects.exit(VARIABLE_TYPES.MARKER_END);
                effects.exit(VARIABLE_TYPES._);
                
                return ok;
              default:
                effects.consume(code);
                
                return inside;
            }
          }
          
          function insideEscape(code: Code): State | void {
            if (code === codes.backslash || code === codes.rightCurlyBrace) {
              effects.consume(code);
              
              return inside;
            }
            
            return inside(code);
          }
          
          function begin(code: Code): State | void {
            return code === codes.rightCurlyBrace ? nok(code) : inside(code);
          }
          
          return (code: Code): State => {
            console.info('start', code);
            
            effects.enter(VARIABLE_TYPES._);
            effects.enter(VARIABLE_TYPES.MARKER_START);
            effects.consume(code);
            effects.exit(VARIABLE_TYPES.MARKER_START);
            effects.enter(VARIABLE_TYPES.STRING);
            effects.enter(types.chunkString, {
              contentType: 'string'
            });
            
            return begin;
          };
        }
      }
    }
  };
}