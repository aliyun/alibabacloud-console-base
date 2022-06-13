export type TDateFormat = 'date' | 'time' | 'dateTime'; // 从简

export type TIntlMessagesMap<T> = Record<string, T>;

export interface IIntlFactoryOptions {
  locale?: string;
  localeDefault?: string;
}

export interface IFnIntlNumber {
  (n: number | string, options?: Intl.NumberFormatOptions): string;
}

export interface IFnIntlDate {
  (date: Date | string | number, format?: TDateFormat): string;
}

export interface IFnIntl<O> {
  <V = void>(id: keyof O, values?: V, escapeValues?: boolean): string;
  intlNumber: IFnIntlNumber;
  intlDate: IFnIntlDate;
}
