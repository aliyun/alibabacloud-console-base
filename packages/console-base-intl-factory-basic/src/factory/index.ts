import CONF_LOCALE from '@alicloud/console-base-conf-locale';

import {
  TIntlMessagesMap,
  IIntlFactoryOptions,
  IFnIntl,
  TDateFormat
} from '../types';
import {
  getMessages,
  convertDate,
  formatMessage,
  formatDate,
  formatNumber
} from '../util';

/**
 * 获得 intl 方法，其中 messagesMap 中的 key 你可以随便，不用在意大小写，中划线还是下划线还是骆驼，这里自会适应
 */
export default function factory<O>(messagesMap: TIntlMessagesMap<O>, {
  locale = CONF_LOCALE.LOCALE,
  localeDefault
}: IIntlFactoryOptions = {}): IFnIntl<O> { // : <V extends {}>(id, values?: V) => string => 
  const messages: O = getMessages(messagesMap, locale, localeDefault);
  const intl: IFnIntl<O> = <V = void>(id: keyof O, values?: V, escapeValues?: boolean) => formatMessage(messages, id, values, escapeValues);
  
  intl.intlNumber = (n: number | string, options?: Intl.NumberFormatOptions): string => {
    return formatNumber(Number(n), options, locale);
  };
  
  intl.intlDate = (d: Date | number | string, format?: TDateFormat): string => {
    const date = convertDate(d);
    
    return date ? formatDate(date, format, locale) : '';
  };
  
  return intl;
}
