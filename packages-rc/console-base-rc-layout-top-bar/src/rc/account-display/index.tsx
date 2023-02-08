import React from 'react';
import styled from 'styled-components';

import {
  mixinTextPrimary,
  mixinTextTertiary,
  mixinTypoEllipsis
} from '@alicloud/console-base-theme';
import Flex from '@alicloud/console-base-rc-flex';

import {
  SIZE_AVATAR
} from '../../const';

import Avatar from './avatar';

interface IProps {
  avatar: string;
  infoPrimary?: string;
  infoSecondary?: string;
  infoWidthMin?: number;
  infoWidthMax?: number;
  href?: string;
}

const ScAccountDisplay = styled(Flex)`
  height: 100%;
  line-height: ${SIZE_AVATAR * 0.5 + 2}px;
  text-align: right;
`;
const ScInfo = styled.div`
  flex: 1;
  margin-right: 8px;
  min-width: 40px;
  max-width: 80px;
`;
const ScInfoPrimary = styled.div`
  line-height: ${SIZE_AVATAR * 0.5 + 6}px;
  ${mixinTypoEllipsis}
  ${mixinTextPrimary}
`;
const ScInfoSecondary = styled.div`
  font-size: 0.9em;
  ${mixinTypoEllipsis}
  ${mixinTextTertiary}
`;

export default function AccountDisplay({
  avatar,
  infoPrimary,
  infoSecondary,
  infoWidthMin,
  infoWidthMax,
  href
}: IProps): JSX.Element {
  return <ScAccountDisplay align="center">
    <ScInfo style={{
      minWidth: infoWidthMin,
      maxWidth: infoWidthMax
    }}>
      <ScInfoPrimary title={infoPrimary}>{infoPrimary}</ScInfoPrimary>
      <ScInfoSecondary>{infoSecondary}</ScInfoSecondary>
    </ScInfo>
    <Avatar {...{
      href,
      avatar
    }} />
  </ScAccountDisplay>;
}
