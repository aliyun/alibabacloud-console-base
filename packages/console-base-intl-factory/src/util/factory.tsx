import React from 'react';

import intlFactoryBasic, {
  MessagesMap
} from '@alicloud/console-base-intl-factory-basic';
import RcIntl from '@alicloud/console-base-rc-intl';

import {
  IIntlFactoryOptions,
  IIntlInstructions,
  IFnIntl
} from '../types';

/**
 * 获得扩展了的 intl 方法
 */
export default function factory<K extends string>(messagesMap: MessagesMap, {
  locale,
  localeDefault,
  instructionSeparator = '!',
  htmlInstruction = 'html',
  linesInstruction = 'lines'
}: IIntlFactoryOptions = {}): IFnIntl<K> {
  const intlBasic = intlFactoryBasic(messagesMap, {
    locale,
    localeDefault
  });
  
  /**
   * 检查 id 是否有特殊指令
   */
  function checkIdForInstructions(id: string): IIntlInstructions {
    const parts = id.split(instructionSeparator);
    
    return {
      html: parts.includes(htmlInstruction),
      lines: parts.includes(linesInstruction)
    };
  }
  
  // 一般情况下它会返回 string，但如果 key 或 instructionsExtra 中带了指令，则可能返回 JSX.Element
  const intlMessage = function<V = void, T = string>(id: K, values?: V, instructionsExtra?: IIntlInstructions): T {
    const text = intlBasic(id, values);
    const {
      lines,
      html
    } = {
      ...checkIdForInstructions(id),
      ...instructionsExtra
    };
    
    if (!html && !lines) { // 没有特殊处理
      return text as unknown as T;
    }
    
    return <RcIntl {...{
      text,
      html,
      lines
    }} /> as unknown as T;
  };
  
  intlMessage.intlDate = intlBasic.intlDate;
  
  return intlMessage;
}
