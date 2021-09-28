import React, {
  useMemo
} from 'react';
import styled from 'styled-components';

import {
  SIZE,
  mixinTextPrimary,
  mixinTextSecondary,
  mixinBgSecondary,
  mixinBorderSecondary
} from '@alicloud/console-base-theme';
import Flex from '@alicloud/console-base-rc-flex';

import {
  SvgUrls,
  EIconType
} from '../../../../const';
import intl from '../../../../intl';
import getU2FStateMessage from '../../../../util/get-u2f-state-message';
import U2FMessage from '../message';

interface IProps {
  u2fSupported: boolean;
  getU2fKey: boolean;
  title: string;
  errorMessage: string;
}

const ScU2FWrapper = styled.div`
  padding: 16px;
  position: relative;
  overflow: hidden;
  ${mixinBorderSecondary}
  ${mixinBgSecondary}
`;

const ScU2FTitle = styled.div`
  font-size: ${SIZE.FONT_SIZE_SUB_TITLE}px;
  margin-bottom: 16px;
  ${mixinTextPrimary}
`;

const ScU2FDesc = styled.div`
  margin-left: 12px;
  ${mixinTextSecondary}
`;

const ScFlex = styled(Flex)`
  margin-top: 12px;
`;

const ScImg = styled.img`
  position: absolute;
  bottom: -16px;
  right: -16px;
`;

export default function U2fUi({
  u2fSupported,
  getU2fKey,
  title,
  errorMessage
}: IProps): JSX.Element {
  const {
    u2fNotSupportedMsg
  } = getU2FStateMessage;

  const getU2fMessage = useMemo((): JSX.Element => {
    if (getU2fKey) {
      return <U2FMessage {...{
        iconType: EIconType.notice,
        message: intl('message:u2f_bind_get_key')
      }} />;
    }

    return <U2FMessage {...{
      iconType: EIconType.success,
      message: intl('message:u2f_bind_get_key_success')
    }} />;
  }, [getU2fKey]);

  const topMessage = useMemo((): JSX.Element | null => {
    if (!u2fSupported || errorMessage) {
      return <U2FMessage {...{
        iconType: EIconType.error,
        message: !u2fSupported ? u2fNotSupportedMsg : errorMessage
      }} />;
    }

    return getU2fMessage;
  }, [u2fNotSupportedMsg, getU2fMessage, u2fSupported, errorMessage]);

  return <>
    {topMessage}
    <ScU2FWrapper>
      <ScU2FTitle>
        {title}
      </ScU2FTitle>
      <Flex align="center">
        <img src={SvgUrls.U2F_INSERT} width={100} alt="" />
        <ScU2FDesc>{intl('attr:u2f_insert')}</ScU2FDesc>
      </Flex>
      <ScFlex align="center">
        <img src={SvgUrls.U2F_CLICK} width={100} alt="" />
        <ScU2FDesc>{intl('attr:u2f_click')}</ScU2FDesc>
      </ScFlex>
      <ScImg src={SvgUrls.U2F_ICON} width={120} alt="" />
    </ScU2FWrapper>
  </>;
}
