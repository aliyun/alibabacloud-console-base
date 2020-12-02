import { MessagesMap } from '@alicloud/console-base-intl-factory-basic';
import { IIntlFactoryOptions, IFnIntl } from '../types';
/**
 * 获得扩展了的 intl 方法
 */
export default function factory<K extends string>(messagesMap: MessagesMap, { locale, localeDefault, instructionSeparator, htmlInstruction, linesInstruction }?: IIntlFactoryOptions): IFnIntl<K>;
