import React from 'react';
import styled from 'styled-components';

import {
  mixinTextPrimary
} from '@alicloud/console-base-theme';

import {
  useProps,
  useFilterAvailable,
  useFilterVisible
} from '../../../model';
import {
  HEIGHT_HEADER,
  SPACING_SIDE
} from '../../const';

import Title from './title';
import ToUpperLevel from './to-upper-level';
import FilterInput from './filter-input';
import FilterTrigger from './filter-trigger';

const ScHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 ${SPACING_SIDE}px;
  height: ${HEIGHT_HEADER}px;
  line-height: ${HEIGHT_HEADER}px;
  font-size: 14px;
  font-weight: 600;
  ${mixinTextPrimary}
`;

export default function UiHeader(): JSX.Element {
  const {
    upperHref
  } = useProps();
  const filterAvailable = useFilterAvailable();
  const filterVisible = useFilterVisible();
  
  return <ScHeader>
    {filterVisible && filterAvailable ? <FilterInput /> : <>
      {upperHref ? <ToUpperLevel /> : <Title />}
      {filterAvailable ? <FilterTrigger /> : null}
    </>}
  </ScHeader>;
}
