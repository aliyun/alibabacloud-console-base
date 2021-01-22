export type TDateFormat = 'date' | 'time' | 'dateTime'; // 从简

export type TIntlMessagesMap<T> = Record<string, T>;

export interface IIntlFactoryOptions {
  locale?: string;
  localeDefault?: string;
}

export type TFnIntlDate = (date: Date | string | number, format?: TDateFormat) => string;

export interface IFnIntl<O> {
  <V = void>(id: keyof O, values?: V): string;
  intlDate: TFnIntlDate;
}
