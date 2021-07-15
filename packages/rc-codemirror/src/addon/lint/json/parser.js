/* eslint-disable prefer-destructuring, max-depth, complexity */
import _isUndefined from 'lodash/isUndefined';
import _isFinite from 'lodash/isFinite';
import _isFunction from 'lodash/isFunction';
import _isArray from 'lodash/isArray';

import lexer from './lexer';

const SYMBOLS = {
  error: 2,
  STRING: 4,
  EOF: 14,
  NUMBER: 6,
  NULL: 8,
  TRUE: 10,
  FALSE: 11,
  JSONString: 3,
  JSONNumber: 5,
  JSONNullLiteral: 7,
  JSONBooleanLiteral: 9,
  JSONText: 12,
  JSONValue: 13,
  JSONObject: 15,
  JSONArray: 16,
  JSONMemberList: 19,
  JSONMember: 20,
  JSONElementList: 25,
  '{': 17,
  '}': 18,
  ':': 21,
  ',': 22,
  '[': 23,
  ']': 24,
  $accept: 0,
  $end: 1
};
const TERMINALS = {
  2: 'error',
  4: 'STRING',
  6: 'NUMBER',
  8: 'NULL',
  10: 'TRUE',
  11: 'FALSE',
  14: 'EOF',
  17: '{',
  18: '}',
  21: ':',
  22: ',',
  23: '[',
  24: ']'
};
const PRODUCTIONS = [
  0,
  [3, 1],
  [5, 1],
  [7, 1],
  [9, 1],
  [9, 1],
  [12, 2],
  [13, 1],
  [13, 1],
  [13, 1],
  [13, 1],
  [13, 1],
  [13, 1],
  [15, 2],
  [15, 3],
  [20, 3],
  [19, 1],
  [19, 3],
  [16, 2],
  [16, 3],
  [25, 1],
  [25, 3]
];
const TABLE = [{
  3: 5,
  4: [1, 12],
  5: 6,
  6: [1, 13],
  7: 3,
  8: [1, 9],
  9: 4,
  10: [1, 10],
  11: [1, 11],
  12: 1,
  13: 2,
  15: 7,
  16: 8,
  17: [1, 14],
  23: [1, 15]
}, {
  1: [3]
}, {
  14: [1, 16]
}, {
  14: [2, 7],
  18: [2, 7],
  22: [2, 7],
  24: [2, 7]
}, {
  14: [2, 8],
  18: [2, 8],
  22: [2, 8],
  24: [2, 8]
}, {
  14: [2, 9],
  18: [2, 9],
  22: [2, 9],
  24: [2, 9]
}, {
  14: [2, 10],
  18: [2, 10],
  22: [2, 10],
  24: [2, 10]
}, {
  14: [2, 11],
  18: [2, 11],
  22: [2, 11],
  24: [2, 11]
}, {
  14: [2, 12],
  18: [2, 12],
  22: [2, 12],
  24: [2, 12]
}, {
  14: [2, 3],
  18: [2, 3],
  22: [2, 3],
  24: [2, 3]
}, {
  14: [2, 4],
  18: [2, 4],
  22: [2, 4],
  24: [2, 4]
}, {
  14: [2, 5],
  18: [2, 5],
  22: [2, 5],
  24: [2, 5]
}, {
  14: [2, 1],
  18: [2, 1],
  21: [2, 1],
  22: [2, 1],
  24: [2, 1]
}, {
  14: [2, 2],
  18: [2, 2],
  22: [2, 2],
  24: [2, 2]
}, {
  3: 20,
  4: [1, 12],
  18: [1, 17],
  19: 18,
  20: 19
}, {
  3: 5,
  4: [1, 12],
  5: 6,
  6: [1, 13],
  7: 3,
  8: [1, 9],
  9: 4,
  10: [1, 10],
  11: [1, 11],
  13: 23,
  15: 7,
  16: 8,
  17: [1, 14],
  23: [1, 15],
  24: [1, 21],
  25: 22
}, {
  1: [2, 6]
}, {
  14: [2, 13],
  18: [2, 13],
  22: [2, 13],
  24: [2, 13]
}, {
  18: [1, 24],
  22: [1, 25]
}, {
  18: [2, 16],
  22: [2, 16]
}, {
  21: [1, 26]
}, {
  14: [2, 18],
  18: [2, 18],
  22: [2, 18],
  24: [2, 18]
}, {
  22: [1, 28],
  24: [1, 27]
}, {
  22: [2, 20],
  24: [2, 20]
}, {
  14: [2, 14],
  18: [2, 14],
  22: [2, 14],
  24: [2, 14]
}, {
  3: 20,
  4: [1, 12],
  20: 29
}, {
  3: 5,
  4: [1, 12],
  5: 6,
  6: [1, 13],
  7: 3,
  8: [1, 9],
  9: 4,
  10: [1, 10],
  11: [1, 11],
  13: 30,
  15: 7,
  16: 8,
  17: [1, 14],
  23: [1, 15]
}, {
  14: [2, 19],
  18: [2, 19],
  22: [2, 19],
  24: [2, 19]
}, {
  3: 5,
  4: [1, 12],
  5: 6,
  6: [1, 13],
  7: 3,
  8: [1, 9],
  9: 4,
  10: [1, 10],
  11: [1, 11],
  13: 31,
  15: 7,
  16: 8,
  17: [1, 14],
  23: [1, 15]
}, {
  18: [2, 17],
  22: [2, 17]
}, {
  18: [2, 15],
  22: [2, 15]
}, {
  22: [2, 21],
  24: [2, 21]
}];
const DEFAULT_ACTIONS = {
  16: [2, 6]
};

export default {
  yy: {},
  
  performAction(yytext, yyleng, yylineno, yy, yystate, $$) {
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
        this.$[$$[$0][0]] = $$[$0][1];
        
        break;
      case 17:
        this.$ = $$[$0 - 2];
        $$[$0 - 2][$$[$0][0]] = $$[$0][1];
        
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
        $$[$0 - 2].push($$[$0]);
        
        break;
      default:
        break;
    }
  },
  parseError(str) {
    throw new Error(str);
  },
  parse(input) {
    const TERROR = 2;
    const EOF = 1;
    let stack = [0];
    let vstack = [null]; // semantic value stack
    let lstack = []; // location stack
    let yytext = '';
    let yylineno = 0;
    let yyleng = 0;
    let recovering = 0;
    
    lexer.setInput(input);
    lexer.yy = this.yy;
    this.yy.lexer = lexer;
    
    if (_isUndefined(lexer.yylloc)) {
      lexer.yylloc = {};
    }
    
    let yyloc = lexer.yylloc;
    
    lstack.push(yyloc);
    
    if (_isFunction(this.yy.parseError)) {
      this.parseError = this.yy.parseError;
    }
    
    function popStack(n) {
      stack.length -= 2 * n;
      vstack.length -= n;
      lstack.length -= n;
    }
    
    function lex() {
      let token;
      
      token = lexer.lex() || 1; // $end = 1
      
      // if token isn't its numeric value, convert
      if (!_isFinite(token)) {
        token = SYMBOLS[token] || token;
      }
      
      return token;
    }
    
    const yyval = {};
    let symbol;
    let preErrorSymbol;
    let state;
    let action;
    let r;
    let p;
    let len;
    let newState;
    let expected;
    let errStr;
    
    while (true) { // eslint-disable-line
      // retrieve state number from top of stack
      state = stack[stack.length - 1];
      
      // use default actions if available
      if (DEFAULT_ACTIONS[state]) {
        action = DEFAULT_ACTIONS[state];
      } else {
        if (symbol == null) {
          symbol = lex();
        }
        
        // read action for current state and first input
        action = TABLE[state] && TABLE[state][symbol];
      }
      
      // handle parse error
      if (_isUndefined(action) || !action.length || !action[0]) {
        if (!recovering) {
          // Report error
          expected = [];
          
          for (p in TABLE[state]) {
            if (TERMINALS[p] && p > 2) {
              expected.push(`'${TERMINALS[p]}'`);
            }
          }
          
          if (lexer.showPosition) {
            errStr = `Parse error on line ${yylineno + 1}:\n${lexer.showPosition()}\nExpecting ${expected.join(', ')}, got '${TERMINALS[symbol]}'`;
          } else {
            errStr = `Parse error on line ${yylineno + 1}: Unexpected ${symbol === 1 /* EOF */ ? 'end of input' : `'${TERMINALS[symbol] || symbol}'`}`;
          }
          
          this.parseError(errStr, {
            text: lexer.match,
            token: TERMINALS[symbol] || symbol,
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
          yyleng = lexer.yyleng;
          yytext = lexer.yytext;
          yylineno = lexer.yylineno;
          yyloc = lexer.yylloc;
          symbol = lex();
        }
        
        // try to recover from error
        while (true) { // eslint-disable-line no-constant-condition
          // check for error recovery rule in this state
          if (TERROR.toString() in TABLE[state]) {
            break;
          }
          
          if (state === 0) {
            throw new Error(errStr || 'Parsing halted.');
          }
          
          popStack(1);
          state = stack[stack.length - 1];
        }
        
        preErrorSymbol = symbol; // save the lookahead token
        symbol = TERROR; // insert generic error symbol as new lookahead
        state = stack[stack.length - 1];
        action = TABLE[state] && TABLE[state][TERROR];
        recovering = 3; // allow 3 real symbols to be shifted before reporting a new error
      }
      
      // this shouldn't happen, unless resolve defaults are off
      if (_isArray(action[0]) && action.length > 1) {
        throw new Error(`Parse Error: multiple actions possible at state: ${state}, token: ${symbol}`);
      }
      
      switch (action[0]) {
        case 1: // shift
          stack.push(symbol);
          vstack.push(lexer.yytext);
          lstack.push(lexer.yylloc);
          stack.push(action[1]); // push state
          symbol = null;
          
          if (!preErrorSymbol) { // normal execution/no error
            yyleng = lexer.yyleng;
            yytext = lexer.yytext;
            yylineno = lexer.yylineno;
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
          len = PRODUCTIONS[action[1]][1];
          
          // perform semantic action
          yyval.$ = vstack[vstack.length - len]; // default to $$ = $1
          // default location, uses first token for firsts, last for lasts
          yyval._$ = {
            firstLine: lstack[lstack.length - (len || 1)].firstLine,
            lastLine: lstack[lstack.length - 1].lastLine,
            firstColumn: lstack[lstack.length - (len || 1)].firstColumn,
            lastColumn: lstack[lstack.length - 1].lastColumn
          };
          r = this.performAction.call(yyval, yytext, yyleng, yylineno, this.yy, action[1], vstack, lstack);
          
          if (!_isUndefined(r)) {
            return r;
          }
          
          // pop off stack
          if (len) {
            stack = stack.slice(0, -1 * len * 2);
            vstack = vstack.slice(0, -1 * len);
            lstack = lstack.slice(0, -1 * len);
          }
          
          stack.push(PRODUCTIONS[action[1]][0]); // push nonterminal (reduce)
          vstack.push(yyval.$);
          lstack.push(yyval._$);
          newState = TABLE[stack[stack.length - 2]][stack[stack.length - 1]];
          stack.push(newState);
          
          break;
        case 3: // accept
          return true;
        default:
          break;
      }
    }
  }
};