import React from 'react';

import {
  IDialogPropsPrompt,
  IAltPromptExtra,
  IDataPrompt
} from '../types';
import {
  SYS_DIALOG_PROPS_FIXED,
  SYS_DIALOG_PROPS_DEFAULT
} from '../const';
import intl from '../intl';
import {
  buildPropsForPromise
} from '../util';
import {
  PromptContent
} from '../rc';

import {
  open
} from './open';

/**
 * 系统 `window.prompt` 的替代
 */
export default function prompt(props: IDialogPropsPrompt<IDataPrompt> = {}, extra: IAltPromptExtra = {}): Promise<string> {
  const {
    message,
    placeholder,
    minLength,
    maxLength,
    softTrim,
    asTextarea,
    ...restProps
  } = props;
  
  return open<string, IDataPrompt>(buildPropsForPromise<string, IDataPrompt>(restProps, {
    content: <PromptContent {...{
      message,
      placeholder,
      minLength,
      maxLength,
      softTrim,
      asTextarea
    }} />,
    buttons(data: IDataPrompt) {
      const {
        value
      } = data;
      let disabled = !value;
      
      if (!disabled && minLength && value.length < minLength) {
        disabled = true;
      }
      
      return [{
        spm: 'ok',
        label: extra.ok || intl('op:ok'),
        result: data.value,
        disabled
      }, {
        spm: 'cancel',
        label: extra.cancel || intl('op:cancel')
      }];
    },
    ...SYS_DIALOG_PROPS_FIXED
  }, SYS_DIALOG_PROPS_DEFAULT)).then((result: string) => (result === undefined ? '' : result));
}
