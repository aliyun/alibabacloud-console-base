import _isUndefined from 'lodash/isUndefined';

const EOF = 1;

const RULES = [
  /^\s+/,
  /^(-?([0-9]|[1-9][0-9]+))(\.[0-9]+)?([eE][-+]?[0-9]+)?\b/,
  /^"(?:\\[\\"bfnrt\/]|\\u[a-fA-F0-9]{4}|[^\\\0-\x09\x0a-\x1f"])*"/, // eslint-disable-line
  /^{/,
  /^}/,
  /^\[/,
  /^]/,
  /^,/,
  /^:/,
  /^true\b/,
  /^false\b/,
  /^null\b/,
  /^$/,
  /^./
];
const CONDITIONS = {
  INITIAL: {
    rules: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
    inclusive: true
  }
};

function performAction(yy, yy_, avoidingNameCollisions) {
  switch (avoidingNameCollisions) {
    case 0:// skip whitespace
      break;
    case 1:
      return 6;
    case 2:
      yy_.yytext = yy_.yytext.substr(1, yy_.yyleng - 2);
      
      return 4;
    case 3:
      return 17;
    case 4:
      return 18;
    case 5:
      return 23;
    case 6:
      return 24;
    case 7:
      return 22;
    case 8:
      return 21;
    case 9:
      return 10;
    case 10:
      return 11;
    case 11:
      return 8;
    case 12:
      return 14;
    case 13:
      return 'INVALID';
    default:
      break;
  }
}

const lexer = {
  options: {},
  parseError(str, hash) {
    if (this.yy.parseError) {
      this.yy.parseError(str, hash);
    } else {
      throw new Error(str);
    }
  },
  setInput(input) {
    this._input = input;
    this._more = false;
    this.done = false;
    this.yylineno = 0;
    this.yyleng = 0;
    this.yytext = '';
    this.matched = '';
    this.match = '';
    this.conditionStack = ['INITIAL'];
    this.yylloc = {
      firstLine: 1,
      firstColumn: 0,
      lastLine: 1,
      lastColumn: 0
    };
    
    return this;
  },
  input() {
    const ch = this._input[0];
    
    this.yytext += ch;
    this.yyleng += 1;
    this.match += ch;
    this.matched += ch;
    const lines = ch.match(/\n/);
    
    if (lines) {
      this.yylineno += 1;
    }
    
    this._input = this._input.slice(1);
    
    return ch;
  },
  more() {
    this._more = true;
    
    return this;
  },
  less(n) {
    this._input = this.match.slice(n) + this._input;
  },
  pastInput() {
    const past = this.matched.substr(0, this.matched.length - this.match.length);
    
    return (past.length > 20 ? '...' : '') + past.substr(-20).replace(/\n/g, '');
  },
  upcomingInput() {
    let next = this.match;
    
    if (next.length < 20) {
      next += this._input.substr(0, 20 - next.length);
    }
    
    return (next.substr(0, 20) + (next.length > 20 ? '...' : '')).replace(/\n/g, '');
  },
  showPosition() {
    const pre = this.pastInput();
    const c = new Array(pre.length + 1).join('-');
    
    return `${pre + this.upcomingInput()}\n${c}^`;
  },
  next() {
    if (this.done) {
      return EOF;
    }
    
    if (!this._input) {
      this.done = true;
    }
    
    let token;
    let match;
    let tempMatch;
    let index;
    let lines;
    
    if (!this._more) {
      this.yytext = '';
      this.match = '';
    }
    
    const rules = this._currentRules();
    
    for (let i = 0; i < rules.length; i++) {
      tempMatch = this._input.match(RULES[rules[i]]);
      
      if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
        match = tempMatch;
        index = i;
        
        if (!this.options.flex) {
          break;
        }
      }
    }
    
    if (match) {
      lines = match[0].match(/\n.*/g);
      
      if (lines) {
        this.yylineno += lines.length;
      }
      
      this.yylloc = {
        firstLine: this.yylloc.lastLine,
        lastLine: this.yylineno + 1,
        firstColumn: this.yylloc.lastColumn,
        lastColumn: lines ? lines[lines.length - 1].length - 1 : this.yylloc.lastColumn + match[0].length
      };
      this.yytext += match[0];
      this.match += match[0];
      this.yyleng = this.yytext.length;
      this._more = false;
      this._input = this._input.slice(match[0].length);
      this.matched += match[0];
      
      token = performAction(this.yy, this, rules[index], this.conditionStack[this.conditionStack.length - 1]);
      
      if (this.done && this._input) {
        this.done = false;
      }
      
      if (token) {
        return token;
      }
      
      return;
    }
    
    if (this._input === '') {
      return EOF;
    }
    
    this.parseError(`Lexical error on line ${this.yylineno + 1}. Unrecognized text.\n${this.showPosition()}`, {
      text: '',
      token: null,
      line: this.yylineno
    });
  },
  lex() {
    const r = this.next();
    
    return _isUndefined(r) ? this.lex() : r;
  },
  _currentRules() {
    return CONDITIONS[this.conditionStack[this.conditionStack.length - 1]].rules;
  }
};

export default lexer;
