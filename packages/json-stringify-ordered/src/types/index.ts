export interface IFnCompare {
  (a: ICompareObject, b: ICompareObject): -1 | 0 | 1;
}

export interface IFnReplacer {
  (key: string | number, value: any): any; // eslint-disable-line @typescript-eslint/no-explicit-any
}

export interface IOpts {
  space?: string | number;
  cycles?: boolean;
  compare?: IFnCompare;
  replacer?: IFnReplacer;
}

export interface IOptions {
  space: string;
  cycles: boolean;
  compare?: IFnCompare;
  replacer?: IFnReplacer;
}

export interface ICompareObject {
  key: string;
  value: any; // eslint-disable-line @typescript-eslint/no-explicit-any
}
