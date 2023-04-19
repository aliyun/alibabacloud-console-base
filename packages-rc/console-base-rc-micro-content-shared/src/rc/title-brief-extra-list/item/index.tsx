import React, {
  useCallback
} from 'react';
import styled from 'styled-components';

import {
  mixinTypoEllipsisLines,
  mixinTextPrimary,
  mixinTextSecondary,
  mixinTextAccent,
  mixinBorderTertiaryBottom
} from '@alicloud/console-base-theme';

import {
  ITitleBriefExtraItemProps
} from '../../../types';
import H2 from '../../h2';

const ScResultItem = styled.div`
  margin: 12px 0;
  padding-bottom: 12px;
  font-size: 12px;
  ${mixinBorderTertiaryBottom}
  
  &:last-child {
    border-bottom: 0;
  }
`;

const ScLink = styled.a`
  display: block;
  text-decoration: none;
  transition: all 0.3s linear;
  ${mixinTextSecondary}
  
  &:hover {
    text-decoration: none;
    ${mixinTextPrimary}
    
    h2 {
      ${mixinTextAccent}
    }
  }
  
  &:link,
  &:visited {
    ${mixinTextSecondary}
    
    &:hover {
      text-decoration: none;
      ${mixinTextPrimary}
    }
  }
`;

const ScHeader = styled(H2)`
  ${mixinTypoEllipsisLines}
`;

const ScBrief = styled.div`
  margin: 8px 0 4px 0;
  ${mixinTypoEllipsisLines}
`;

const ScExtra = styled.div`
  margin-top: 8px;
`;

/**
 * 搜索结果单个展示
 */
export default function Item<T extends object>({
  item,
  index,
  getUrl,
  getTitle,
  getBrief,
  getExtra,
  onItemClick
}: ITitleBriefExtraItemProps<T>): JSX.Element {
  const url = getUrl(item, index);
  const title = getTitle(item, index);
  const brief = getBrief(item, index);
  const extra = getExtra ? getExtra(item, index) : null;
  
  const handleClick = useCallback(() => {
    onItemClick?.(item, index);
  }, [item, index, onItemClick]);
  
  return <ScResultItem>
    <ScLink href={url} target="_blank" onClick={handleClick}>
      <ScHeader {...{
        lines: 2,
        lineHeight: 24,
        withMaxHeight: true
      }}>{title}</ScHeader>
      <ScBrief {...{
        lines: 3,
        lineHeight: 22
      }}>{brief}</ScBrief>
    </ScLink>
    {extra ? <ScExtra>{extra}</ScExtra> : null}
  </ScResultItem>;
}
