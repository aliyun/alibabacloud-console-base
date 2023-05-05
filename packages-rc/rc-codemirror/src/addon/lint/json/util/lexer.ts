import {
  isUndefined as _isUndefined
} from 'lodash-es';

import {
  IHash,
  IHashLoc,
  IParseError
} from '../types';
import {
  EOF,
  LEXER_RULES,
  LEXER_CONDITIONS
} from '../const';

import performAction from './perform-action';

interface ILexerOptions {
  flex?: boolean;
}

interface IYy {
  // eslint-disable-next-line @typescript-eslint/no-use-before-define
  lexer?: Lexer;
  parseError?: IParseError;
}

export default class Lexer {
  options: ILexerOptions = {};
  
  _input = '';
  
  done = false;
  
  match = '';
  
  matched = '';
  
  conditionStack: string[] = ['INITIAL'];
  
  yy?: IYy;
  
  yylineno = 0;
  
  yyleng = 0;
  
  yytext = '';
  
  yylloc: IHashLoc = {
    firstLine: 1,
    firstColumn: 0,
    lastLine: 1,
    lastColumn: 0
  };
  
  // constructor() {}
  
  parseError(message: string, hash: IHash): void {
    if (this.yy?.parseError) {
      this.yy.parseError(message, hash);
    } else {
      throw new Error(message);
    }
  }
  
  setInput(input: string): void {
    this._input = input;
    this.done = false;
    this.matched = '';
    this.match = '';
    this.conditionStack = ['INITIAL'];
    this.yylineno = 0;
    this.yyleng = 0;
    this.yytext = '';
    this.yylloc = {
      firstLine: 1,
      firstColumn: 0,
      lastLine: 1,
      lastColumn: 0
    };
  }
  
  input(): string {
    const ch = this._input[0] || '';
    
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
  }
  
  less(n: number): void {
    this._input = this.match.slice(n) + this._input;
  }
  
  pastInput(): string {
    const past = this.matched.substr(0, this.matched.length - this.match.length);
    
    return (past.length > 20 ? '...' : '') + past.substr(-20).replace(/\n/g, '');
  }
  
  upcomingInput(): string {
    let next = this.match;
    
    if (next.length < 20) {
      next += this._input.substr(0, 20 - next.length);
    }
    
    return (next.substr(0, 20) + (next.length > 20 ? '...' : '')).replace(/\n/g, '');
  }
  
  showPosition(): string {
    const pre = this.pastInput();
    const c = new Array(pre.length + 1).join('-');
    
    return `${pre + this.upcomingInput()}\n${c}^`;
  }
  
  next(): number | 'INVALID' | undefined {
    if (this.done) {
      return EOF;
    }
    
    if (!this._input) {
      this.done = true;
    }
    
    let token;
    let match;
    let tempMatch;
    let index: number;
    let lines;
    
    this.yytext = '';
    this.match = '';
    
    const rules = this._currentRules();
    
    for (let i = 0; i < rules.length; i++) {
      tempMatch = this._input.match(LEXER_RULES[rules[i]!]!);
      
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
        lastColumn: lines ? lines[lines.length - 1]!.length - 1 : this.yylloc.lastColumn! + match[0].length
      };
      this.yytext += match[0];
      this.match += match[0];
      this.yyleng = this.yytext.length;
      this._input = this._input.slice(match[0].length);
      this.matched += match[0];
      
      token = performAction(this.yy, this, rules[index!]); // , this.conditionStack[this.conditionStack.length - 1]
      
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
  }
  
  lex(): number | 'INVALID' | undefined {
    const r = this.next();
    
    return _isUndefined(r) ? this.lex() : r;
  }
  
  _currentRules(): number[] {
    return LEXER_CONDITIONS[this.conditionStack[this.conditionStack.length - 1]!]?.rules || [];
  }
}
