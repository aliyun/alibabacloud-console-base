export declare type TMessages = Record<string, string>;
export declare type TMessagesMap = Record<string, TMessages>;
export declare type TDateFormat = 'date' | 'time' | 'dateTime';
export interface IIntlFactoryOptions {
    locale?: string;
    localeDefault?: string;
}
export declare type TFnIntlDate = (date: Date | string | number, format?: TDateFormat) => string;
export interface IFnIntl<K extends string> {
    <V = void>(id: K, values?: V): string;
    intlDate: TFnIntlDate;
}
