import React, {
  useCallback
} from 'react';
import styled from 'styled-components';

import {
  mixinTextAccent,
  mixinTextTertiary
} from '@alicloud/console-base-theme';
import Button, {
  ButtonTheme,
  ButtonSize
} from '@alicloud/console-base-rc-button';
import Icon from '@alicloud/console-base-rc-icon';

import {
  IPropsPagination
} from '../../types';
import intl from '../../intl';

interface IPropsScPagination {
  align?: IPropsPagination['align'];
}

function getJustifyContent(align?: IPropsPagination['align']): 'flex-start' | 'center' | 'flex-end' {
  switch (align) {
    case 'center':
      return 'center';
    case 'right':
      return 'flex-end';
    default:
      return 'flex-start';
  }
}

const ScPagination = styled.div<IPropsScPagination>`
  display: flex;
  align-items: center;
  justify-content: ${props => getJustifyContent(props.align)};
`;

const ScPaginationDisplay = styled.div`
  margin: 0 12px;
  padding-top: 2px;
  font-size: 12px;
  ${mixinTextTertiary};
  
  strong {
    ${mixinTextAccent};
  }
`;

/**
 * 分页
 */
export default function Pagination({
  page = 1,
  pageSize = 10,
  total = 0,
  theme = 'simple',
  hideWhenOne = true,
  onChange,
  ...props
}: IPropsPagination): JSX.Element | null {
  const pages = Math.ceil(total / pageSize);
  const handlePrev = useCallback(() => {
    if (onChange) {
      onChange(page - 1);
    }
  }, [page, onChange]);
  const handleNext = useCallback(() => {
    if (onChange) {
      onChange(page + 1);
    }
  }, [page, onChange]);
  
  if (hideWhenOne && pages <= 1) {
    return null;
  }
  
  const themeIsSimplest = theme === 'simplest';
  const buttonTheme = themeIsSimplest ? ButtonTheme.TEXT_TERTIARY : ButtonTheme.TERTIARY;
  const buttonSize = themeIsSimplest ? ButtonSize.NONE : ButtonSize.S;
  const buttonLabelPrev: JSX.Element = themeIsSimplest ? <Icon type="angle-left" /> : <>
    <Icon type="angle-left" />
    {intl('page:prev')}
  </>;
  const buttonLabelNext: JSX.Element = themeIsSimplest ? <Icon type="angle-right" /> : <>
    {intl('page:next')}
    <Icon type="angle-right" />
  </>;
  
  return <ScPagination {...props}>
    <Button {...{
      spm: 'prev',
      theme: buttonTheme,
      size: buttonSize,
      disabled: page <= 1,
      label: buttonLabelPrev,
      onClick: handlePrev
    }} />
    <ScPaginationDisplay><strong>{page}</strong> / {pages}</ScPaginationDisplay>
    <Button {...{
      spm: 'next',
      theme: buttonTheme,
      size: buttonSize,
      disabled: page >= pages,
      label: buttonLabelNext,
      onClick: handleNext
    }} />
  </ScPagination>;
}
