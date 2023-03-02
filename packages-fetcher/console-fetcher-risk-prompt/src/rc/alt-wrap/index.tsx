import React, {
  useEffect
} from 'react';
import styled from 'styled-components';

import {
  AltWrap as AltWrap0
} from '@alicloud/console-base-rc-dialog';

import {
  useAccountId
} from '../../model';
import {
  slsRiskPromptError
} from '../../sls';

interface IProps {
  content?: string;
  accountId?: string;
}

const ScWrapper = styled.div`
  margin-top: 24px;
`;

export default function AltWrap({
  content
}: IProps): JSX.Element {
  const accountId = useAccountId();

  useEffect(() => {
    slsRiskPromptError({
      accountId,
      errorMessage: content
    });
  }, [accountId, content]);

  return <ScWrapper>
    <AltWrap0 {...{
      content,
      type: 'alert'
    }} />
  </ScWrapper>;
}