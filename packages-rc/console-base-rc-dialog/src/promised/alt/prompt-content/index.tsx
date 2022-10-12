import React, {
  useCallback
} from 'react';
import styled from 'styled-components';

import Input from '@alicloud/console-base-rc-input';

import {
  useDialog
} from '../../../model';

const ScPromptContent = styled.div`
  padding-top: 24px;
`;

export interface IDataPrompt {
  value: string;
}

/**
 * prompt dialog 的内容
 */
export default function PromptContent(): JSX.Element {
  const {
    updateData
  } = useDialog<string, IDataPrompt>();
  const handleChange = useCallback(value => updateData({
    value
  }), [updateData]);
  
  return <ScPromptContent>
    <Input block onChange={handleChange} />
  </ScPromptContent>;
}
