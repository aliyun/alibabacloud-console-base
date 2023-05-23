import React from 'react';
import styled from 'styled-components';

import {
  FormItemProps
} from '@alicloud/rc-model-form';

import {
  COLORS_LIGHT,
  COLORS_DARK
} from '../../../../../../const';

interface IProps {
  content: FormItemProps['content'];
  help: FormItemProps['help'];
}

const ScItemContent = styled.div`
  flex: 1;
  word-break: break-all;
`;
const ScHelp = styled.div`
  margin-top: 4px;
  line-height: 1.4;
  color: ${COLORS_LIGHT.GRAY_SECONDARY};
  
  .theme-dark & {
    color: ${COLORS_DARK.GRAY_SECONDARY};
  }
`;

export default function ItemContent({
  content,
  help
}: IProps): JSX.Element {
  return <ScItemContent>
    {content}
    {help ? <ScHelp>{help}</ScHelp> : null}
  </ScItemContent>;
}
