export type TMessages = Record<string, string>;

export type TMessagesMap = Record<string, TMessages>;

export type TDateFormat = 'date' | 'time' | 'dateTime'; // 从简

export interface IIntlFactoryOptions {
  locale?: string;
  localeDefault?: string;
}

export type TFnIntlDate = (date: Date | string | number, format?: TDateFormat) => string;

export interface IFnIntl<K extends string> {
  <V = void>(id: K, values?: V): string;
  intlDate: TFnIntlDate;
}
