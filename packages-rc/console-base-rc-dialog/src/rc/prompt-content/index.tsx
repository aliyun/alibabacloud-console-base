import React, {
  useCallback
} from 'react';
import styled from 'styled-components';

import Input from '@alicloud/console-base-rc-input';
import InputTextarea from '@alicloud/console-base-rc-input-textarea';

import {
  IDataPrompt,
  IPromptOptions
} from '../../types';
import {
  useDialog
} from '../../model';

interface IProps extends Omit<IPromptOptions, 'minLength'> {}

const ScPromptContent = styled.div`
  padding-top: 24px;
`;
const ScMessage = styled.div`
  margin-bottom: 8px;
`;

/**
 * prompt dialog 的内容
 */
export default function PromptContent({
  message,
  maxLength = 1024,
  placeholder,
  softTrim = true,
  asTextarea
}: IProps): JSX.Element {
  const {
    updateData
  } = useDialog<string, IDataPrompt>();
  const handleChange = useCallback(value => updateData({
    value
  }), [updateData]);
  
  return <ScPromptContent>
    {message ? <ScMessage>{message}</ScMessage> : null}
    {asTextarea ? <InputTextarea {...{
      placeholder,
      maxLength,
      softTrim,
      onChange: handleChange
    }} /> : <Input {...{
      placeholder,
      block: true,
      maxLength,
      softTrim,
      onChange: handleChange
    }} />}
  </ScPromptContent>;
}
