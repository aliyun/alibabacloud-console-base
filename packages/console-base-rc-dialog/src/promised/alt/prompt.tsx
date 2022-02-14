import React from 'react';

import {
  IDialogPropsPrompt,
  IAltPromptExtra
} from '../../types';
import {
  SYS_DIALOG_PROPS_FIXED,
  SYS_DIALOG_PROPS_DEFAULT
} from '../../const';
import intl from '../../intl';
import {
  buildPropsForPromise
} from '../../util';
import open from '../open';

import PromptContent, {
  IDataPrompt
} from './prompt-content';

/**
 * 系统 window.prompt 的替代
 */
export default function prompt(props?: IDialogPropsPrompt<IDataPrompt>, extra: IAltPromptExtra = {}): Promise<string> {
  return open<string, IDataPrompt>(buildPropsForPromise<string, IDataPrompt>(props, {
    content: <PromptContent />,
    buttons: [{
      spm: 'ok',
      label: extra.ok || intl('op:ok'),
      result: data => data.value
    }, {
      spm: 'cancel',
      label: extra.cancel || intl('op:cancel')
    }],
    ...SYS_DIALOG_PROPS_FIXED
  }, SYS_DIALOG_PROPS_DEFAULT)).then((result: string) => (result === undefined ? '' : result));
}
