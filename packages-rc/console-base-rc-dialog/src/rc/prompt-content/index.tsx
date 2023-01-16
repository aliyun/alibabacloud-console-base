import React, {
  useCallback
} from 'react';
import styled from 'styled-components';

import {
  mixinTextTertiary
} from '@alicloud/console-base-theme';
import Input from '@alicloud/console-base-rc-input';
import InputTextarea from '@alicloud/console-base-rc-input-textarea';

import {
  IDataPrompt,
  IPromptOptions
} from '../../types';
import {
  useDialog
} from '../../model';

interface IProps extends IPromptOptions {}

const ScPromptContent = styled.div`
  padding-top: 24px;
`;
const ScMessage = styled.div`
  margin-bottom: 8px;
`;
const ScLimitHint = styled.div`
  font-size: 0.9em;
  text-align: right;
  ${mixinTextTertiary}
`;

function getLimitHint(minLength = 0, maxLength = 0): string {
  if (minLength <= 0 && maxLength <= 0) {
    return '';
  }
  
  if (maxLength > 0) {
    return `${minLength} - ${maxLength}`;
  }
  
  return `≥ ${minLength}`;
}

/**
 * prompt dialog 的内容
 */
export default function PromptContent({
  message,
  minLength,
  maxLength,
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
  
  const limitHint = getLimitHint(minLength, maxLength);
  
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
    {limitHint ? <ScLimitHint>{limitHint}</ScLimitHint> : null}
  </ScPromptContent>;
}
