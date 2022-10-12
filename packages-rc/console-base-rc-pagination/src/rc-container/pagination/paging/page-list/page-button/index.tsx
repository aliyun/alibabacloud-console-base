import React, {
  useCallback
} from 'react';
import styled from 'styled-components';

import Button, {
  ButtonTheme,
  ButtonSize
} from '@alicloud/console-base-rc-button';

import {
  usePage,
  useHandlePage
} from '../../../../../model';

interface IProps {
  n: number;
}

const ScPageButton = styled(Button)`
  margin: 0 2px;
`;

export default function PageButton({
  n
}: IProps): JSX.Element {
  const page = usePage();
  const handlePage = useHandlePage();
  const onClick = useCallback(() => handlePage(n), [n, handlePage]);
  
  return <ScPageButton {...{
    label: String(n),
    spm: `page-${n}`,
    theme: page === n ? ButtonTheme.PRIMARY : ButtonTheme.TERTIARY,
    size: ButtonSize.S,
    noShadow: true,
    onClick
  }} />;
}
