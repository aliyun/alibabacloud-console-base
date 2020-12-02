import { TMessagesMap, IIntlFactoryOptions, IFnIntl } from '../types';
/**
 * 获得 intl 方法，其中 messagesMap 中的 key 你可以随便，不用在意大小写，中划线还是下划线还是骆驼，这里自会适应
 */
export default function factory<K extends string>(messagesMap: TMessagesMap, { locale, localeDefault }?: IIntlFactoryOptions): IFnIntl<K>;
