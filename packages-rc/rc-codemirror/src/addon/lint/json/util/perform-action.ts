interface IYy2 {
  yytext: string;
  yyleng: number;
}

export default function performAction(_yy: unknown, yy2: IYy2, avoidingNameCollisions?: number): number | 'INVALID' | undefined {
  switch (avoidingNameCollisions) {
    case 0:// skip whitespace
      break;
    case 1:
      return 6;
    case 2:
      yy2.yytext = yy2.yytext.substr(1, yy2.yyleng - 2);
      
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
