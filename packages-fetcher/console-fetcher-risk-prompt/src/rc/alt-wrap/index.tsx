import React from 'react';
import styled from 'styled-components';

import {
  AltWrap as AltWrap0
} from '@alicloud/console-base-rc-dialog';

interface IProps {
  content?: string | JSX.Element;
}

const ScWrapper = styled.div`
  margin-top: 36px;
`;

export default function AltWrap({
  content
}: IProps): JSX.Element {
  return <ScWrapper>
    <AltWrap0 {...{
      content,
      type: 'alert'
    }} />
  </ScWrapper>;
}