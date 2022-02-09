import React from 'react';
import styled from 'styled-components';

import {
  mixinTextAccent,
  mixinTextTertiary
} from '@alicloud/console-base-theme';

import {
  usePage,
  usePages
} from '../../../../model';

const ScPaging = styled.div`
  margin: 0 12px;
  padding-top: 2px;
  font-size: 12px;
  ${mixinTextTertiary}
  
  strong {
    ${mixinTextAccent}
  }
`;

export default function PageInfo(): JSX.Element {
  const page = usePage();
  const pages = usePages();
  
  return <ScPaging><strong>{page}</strong> / {pages}</ScPaging>;
}
