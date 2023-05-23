import React from 'react';
import styled from 'styled-components';

import {
  mixinTextTertiary
} from '@alicloud/console-base-theme';
import {
  FormItemProps
} from '@alicloud/rc-model-form';

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
  ${mixinTextTertiary}
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
