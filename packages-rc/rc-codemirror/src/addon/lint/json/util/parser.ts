import {
  isUndefined as _isUndefined,
  isFinite as _isFinite,
  isFunction as _isFunction,
  isArray as _isArray
} from 'lodash-es';

import {
  IHash,
  IHashLoc,
  IParseError
} from '../types';
import {
  EOF,
  ERROR,
  PARSER_SYMBOLS,
  PARSER_TERMINALS,
  PARSER_PRODUCTIONS,
  PARSER_TABLE,
  PARSER_DEFAULT_ACTIONS
} from '../const';

import Lexer from './lexer';

interface IYy {
  lexer?: Lexer;
  parseError?: IParseError;
}

interface IYyVal {
  $?: string | null;
  _$?: IHashLoc;
}

const lexer = new Lexer();

class Parser {
  yy: IYy = {};
  
  $: any;
  
  performAction(yytext: string, _yyleng: number, _yylineno: number, _yy: IYy, yystate: number, $$: any[][]) {
    const $0 = $$.length - 1;
    
    switch (yystate) {
      case 1: // replace escaped characters with actual character
        this.$ = yytext.replace(/\\(\\|")/g, '$1')
            .replace(/\\n/g, '\n')
            .replace(/\\r/g, '\r')
            .replace(/\\t/g, '\t')
            .replace(/\\v/g, '\v')
            .replace(/\\f/g, '\f')
            .replace(/\\b/g, '\b');
        
        break;
      case 2:
        this.$ = Number(yytext);
        
        break;
      case 3:
        this.$ = null;
        
        break;
      case 4:
        this.$ = true;
        
        break;
      case 5:
        this.$ = false;
        
        break;
      case 6:
        this.$ = $$[$0 - 1];
        
        return this.$;
      case 13:
        this.$ = {};
        
        break;
      case 14:
        this.$ = $$[$0 - 1];
        
        break;
      case 15:
        this.$ = [$$[$0 - 2], $$[$0]];
        
        break;
      case 16:
        this.$ = {};
        this.$[$$[$0]![0]] = $$[$0]![1];
        
        break;
      case 17:
        this.$ = $$[$0 - 2];
        $$[$0 - 2]![$$[$0]![0]] = $$[$0]![1];
        
        break;
      case 18:
        this.$ = [];
        
        break;
      case 19:
        this.$ = $$[$0 - 1];
        
        break;
      case 20:
        this.$ = [$$[$0]];
        
        break;
      case 21:
        this.$ = $$[$0 - 2];
        $$[$0 - 2]!.push($$[$0]);
        
        break;
      default:
        break;
    }
  }
  
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  parseError(str: string, _hash: IHash): never {
    throw new Error(str);
  }
  
  parse(input: string) {
    let stack = [0];
    let vStack: (string | null)[] = [null]; // semantic value stack
    let lStack = []; // location stack
    let yyText = '';
    let yyLineNo = 0;
    let yyLength = 0;
    let recovering = 0;
    
    lexer.setInput(input);
    lexer.yy = this.yy;
    
    this.yy.lexer = lexer;
    
    if (_isUndefined(lexer.yylloc)) {
      lexer.yylloc = {};
    }
    
    let yyloc = lexer.yylloc;
    
    lStack.push(yyloc);
    
    if (_isFunction(this.yy.parseError)) {
      this.parseError = this.yy.parseError;
    }
    
    function popStack(n: number): void {
      stack.length -= 2 * n;
      vStack.length -= n;
      lStack.length -= n;
    }
    
    function lex(): number | 'INVALID' | undefined {
      let token;
      
      token = lexer.lex() || EOF; // $end = 1
      
      // if token isn't its numeric value, convert
      if (!_isFinite(token)) {
        token = PARSER_SYMBOLS[token] || token;
      }
      
      return token;
    }
    
    const yyVal: IYyVal = {};
    let symbol;
    let preErrorSymbol;
    let state: number;
    let action;
    let r;
    let p;
    let len;
    let newState;
    let expected;
    let errStr;
    
    while (true) { // eslint-disable-line
      // retrieve state number from top of stack
      state = stack[stack.length - 1]!;
      
      // use default actions if available
      if (PARSER_DEFAULT_ACTIONS[state]) {
        action = PARSER_DEFAULT_ACTIONS[state];
      } else {
        if (symbol === null || symbol === undefined) {
          symbol = lex();
        }
        
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        action = PARSER_TABLE[state]?.[symbol]; // read action for current state and first input
      }
      
      // handle parse error
      if (_isUndefined(action) || !action.length || !action[0]) {
        if (!recovering) {
          // Report error
          expected = [];
          
          for (p in PARSER_TABLE[state]) {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            if (PARSER_TERMINALS[p] && p > 2) {
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-ignore
              expected.push(`'${PARSER_TERMINALS[p]}'`);
            }
          }
          
          if (lexer.showPosition) {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            errStr = `Parse error on line ${yyLineNo + 1}:\n${lexer.showPosition()}\nExpecting ${expected.join(', ')}, got '${PARSER_TERMINALS[symbol]}'`;
          } else {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            errStr = `Parse error on line ${yyLineNo + 1}: Unexpected ${symbol === 1 /* EOF */ ? 'end of input' : `'${PARSER_TERMINALS[symbol] || symbol}'`}`;
          }
          
          this.parseError(errStr, {
            text: lexer.match,
            token: PARSER_TERMINALS[symbol as number] || symbol,
            line: lexer.yylineno,
            loc: yyloc,
            expected
          });
        }
        
        // just recovered from another error
        if (recovering === 3) {
          if (symbol === EOF) {
            throw new Error(errStr || 'Parsing halted.');
          }
          
          // discard current lookahead and grab another
          yyLength = lexer.yyleng;
          yyText = lexer.yytext;
          yyLineNo = lexer.yylineno;
          yyloc = lexer.yylloc;
          symbol = lex();
        }
        
        // try to recover from error
        while (true) { // eslint-disable-line no-constant-condition
          // check for error recovery rule in this state
          if (ERROR.toString() in PARSER_TABLE[state]!) {
            break;
          }
          
          if (state === 0) {
            throw new Error(errStr || 'Parsing halted.');
          }
          
          popStack(1);
          state = stack[stack.length - 1]!;
        }
        
        preErrorSymbol = symbol; // save the lookahead token
        symbol = ERROR; // insert generic error symbol as new lookahead
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        state = stack[stack.length - 1];
        action = PARSER_TABLE[state]?.[ERROR];
        recovering = 3; // allow 3 real symbols to be shifted before reporting a new error
      }
      
      // this shouldn't happen, unless resolve defaults are off
      if (_isArray(action[0]) && action.length > 1) {
        throw new Error(`Parse Error: multiple actions possible at state: ${state}, token: ${symbol}`);
      }
      
      switch (action[0]) {
        case 1: // shift
          stack.push(symbol as any);
          vStack.push(lexer.yytext);
          lStack.push(lexer.yylloc);
          stack.push(action[1]); // push state
          symbol = null;
          
          if (!preErrorSymbol) { // normal execution/no error
            yyLength = lexer.yyleng;
            yyText = lexer.yytext;
            yyLineNo = lexer.yylineno;
            yyloc = lexer.yylloc;
            
            if (recovering > 0) {
              recovering -= 1;
            }
          } else { // error just occurred, resume old lookahead f/ before error
            symbol = preErrorSymbol;
            preErrorSymbol = null;
          }
          
          break;
        case 2: // reduce
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          len = PARSER_PRODUCTIONS[action[1]][1];
          
          // perform semantic action
          yyVal.$ = vStack[vStack.length - len]; // default to $$ = $1
          // default location, uses first token for firsts, last for lasts
          yyVal._$ = {
            firstLine: lStack[lStack.length - (len || 1)]?.firstLine,
            lastLine: lStack[lStack.length - 1]?.lastLine,
            firstColumn: lStack[lStack.length - (len || 1)]?.firstColumn,
            lastColumn: lStack[lStack.length - 1]?.lastColumn
          };
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          r = this.performAction.call(yyVal, yyText, yyLength, yyLineNo, this.yy, action[1], vStack, lStack);
          
          if (!_isUndefined(r)) {
            return r;
          }
          
          // pop off stack
          if (len) {
            stack = stack.slice(0, -1 * len * 2);
            vStack = vStack.slice(0, -1 * len);
            lStack = lStack.slice(0, -1 * len);
          }
          
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          stack.push(PARSER_PRODUCTIONS[action[1]][0]); // push non-terminal (reduce)
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          vStack.push(yyVal.$);
          lStack.push(yyVal._$);
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          newState = PARSER_TABLE[stack[stack.length - 2]][stack[stack.length - 1]];
          stack.push(newState);
          
          break;
        case 3: // accept
          return true;
        default:
          break;
      }
    }
  }
}

export default new Parser();
