import React from 'react';

import {
  IDialogPropsPrompt,
  IPromptExtra
} from '../../types';
import {
  COMMON_PROPS_SYS_DIALOG
} from '../../const';
import intl from '../../intl';
import buildPropsForPromise from '../../util/build-props-for-promise';
import open from '../open';

import PromptContent, {
  IDataPrompt
} from './prompt-content';

/**
 * 系统 window.prompt 的替代
 */
export default function prompt(props?: IDialogPropsPrompt<IDataPrompt>, extra: IPromptExtra = {}): Promise<string> {
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
    ...COMMON_PROPS_SYS_DIALOG
  })).then((result: string) => (result === undefined ? '' : result));
}
