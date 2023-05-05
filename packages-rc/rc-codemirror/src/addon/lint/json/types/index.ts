export interface IHashLoc {
  firstLine?: number;
  firstColumn?: number;
  lastLine?: number;
  lastColumn?: number;
}

export interface IHash {
  text?: string;
  token?: string | number | null | undefined;
  line?: number;
  expected?: string[];
  loc?: IHashLoc;
}

export interface IParseError {
  (message: string, hash: IHash): never;
}

export interface ILexerCondition {
  rules: number[];
  inclusive: boolean;
}
