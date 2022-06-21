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
  EIconType
} from '../../../../enum';
import {
  SvgUrls
} from '../../../../const';
import intl from '../../../../intl';
import U2FMessage from '../message';

interface IProps {
  u2fSupported: boolean;
  getU2fKey: boolean;
  title: string;
  errorMessage: string;
  showU2fRetryButton?: boolean;
  onRetryClick: () => void;
}

const ScFlex = styled(Flex)`
  margin-top: 12px;
`;

const ScU2fWrapper = styled.div`
  position: relative;
  padding: 16px;
  overflow: hidden;
  ${mixinBorderSecondary}
  ${mixinBgSecondary}
`;

const ScU2fTitle = styled.div`
  margin-bottom: 16px;
  font-size: ${SIZE.FONT_SIZE_SUB_TITLE}px;
  ${mixinTextPrimary}
`;

const ScU2fDesc = styled.div`
  margin-left: 12px;
  ${mixinTextSecondary}
`;

// 由于图片需要从 CDN 加载。为了防止屏幕抖动，先用空父元素的 padding 撑起来
const ScSvgImgWrapper = styled.div`
  position: relative;
  padding-top: 100px;
  width: 100px;
  height: 0;
`;

const SvgImg = styled.img`
  position: absolute;
  top: 0;
  left: 0;
`;

const ScU2fIcon = styled.img`
  position: absolute;
  right: -16px;
  bottom: -16px;
`;

export default function U2fUi({
  u2fSupported,
  getU2fKey,
  title,
  showU2fRetryButton,
  errorMessage,
  onRetryClick
}: IProps): JSX.Element {
  const getU2fMessage = useMemo((): JSX.Element => {
    if (getU2fKey) {
      return <U2FMessage {...{
        iconType: EIconType.NOTICE,
        message: intl('message:u2f_bind_get_key')
      }} />;
    }

    return <U2FMessage {...{
      iconType: EIconType.SUCCESS,
      message: intl('message:u2f_bind_get_key_success')
    }} />;
  }, [getU2fKey]);

  const topMessage = useMemo((): JSX.Element | null => {
    if (!u2fSupported || errorMessage) {
      return <U2FMessage {...{
        iconType: EIconType.ERROR,
        message: errorMessage,
        showU2fRetryButton,
        onRetryClick
      }} />;
    }

    return getU2fMessage;
  }, [u2fSupported, errorMessage, showU2fRetryButton, onRetryClick, getU2fMessage]);

  return <>
    {topMessage}
    <ScU2fWrapper>
      <ScU2fTitle>
        {title}
      </ScU2fTitle>
      <Flex align="center">
        <ScSvgImgWrapper>
          <SvgImg {...{
            src: SvgUrls.U2F_INSERT,
            width: 100,
            alt: ''
          }} />
        </ScSvgImgWrapper>
        <ScU2fDesc>{intl('attr:u2f_insert')}</ScU2fDesc>
      </Flex>
      <ScFlex align="center">
        <ScSvgImgWrapper>
          <SvgImg {...{
            src: SvgUrls.U2F_CLICK,
            width: 100,
            alt: ''
          }} />
        </ScSvgImgWrapper>
        <ScU2fDesc>{intl('attr:u2f_click')}</ScU2fDesc>
      </ScFlex>
      <ScU2fIcon {...{
        src: SvgUrls.U2F_ICON,
        width: 120,
        alt: ''
      }} />
    </ScU2fWrapper>
  </>;
}
