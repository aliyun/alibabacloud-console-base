import React, {
  useMemo
} from 'react';
import styled from 'styled-components';

import {
  SIZE,
  mixinTextPrimary,
  mixinTextSecondary,
  mixinBorderSecondary
} from '@alicloud/console-base-theme';
import Flex from '@alicloud/console-base-rc-flex';
import {
  useDialog
} from '@alicloud/console-base-rc-dialog';
import {
  ESubVerificationDeviceType
} from '@alicloud/console-fetcher-risk-data';

import {
  IDialogData,
  IRiskPromptResolveData
} from '../../types';
import {
  EIconType
} from '../../enum';
import {
  SVG_URLS,
  MOBILE_SCREE_SIZE
} from '../../const';
import intl from '../../intl';
import U2FMessage from '../message';
import DeviceIcon from '../device-icon';

type TU2fType = 'u2f_auth' | 'u2f_bind';

interface IProps {
  type: TU2fType;
  u2fErrorMessage?: string;
  u2fKeyFetching: boolean;
  showU2FRetryButton?: boolean;
  onU2FErrorRetryClick: () => void;
}

const ScFlex = styled(Flex)`
  margin-top: 12px;
`;

const ScU2fWrapper = styled.div`
  position: relative;
  padding: 16px;
  overflow: hidden;
  ${mixinBorderSecondary}
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

// 由于图片需要从 CDN 加载。为了防止屏幕抖动，先用空父元素的 padding 撑起来
const ScSvgImgWrapper = styled.div`
  position: relative;
  padding-top: 100px;
  width: 100px;
  height: 0;

  @media (max-width: ${MOBILE_SCREE_SIZE}px) {
    padding-top: 80px;
    width: 80px;
  }
`;

const SvgImg = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100px;

  @media (max-width: ${MOBILE_SCREE_SIZE}px) {
    width: 80px;
  }
`;

export default function U2fUi({
  type,
  u2fErrorMessage,
  u2fKeyFetching,
  showU2FRetryButton,
  onU2FErrorRetryClick
}: IProps): JSX.Element {
  const {
    data: {
      apiErrorMessage,
      subU2fAuthApiErrorMessage
    }
  } = useDialog<IRiskPromptResolveData, IDialogData>();

  const fetchU2fKeyStatusMessage = useMemo((): JSX.Element => {
    if (u2fKeyFetching) {
      return <U2FMessage {...{
        iconType: EIconType.NOTICE,
        message: intl('message:u2f_bind_get_key')
      }} />;
    }

    return <U2FMessage {...{
      iconType: EIconType.SUCCESS,
      message: intl('message:u2f_bind_get_key_success')
    }} />;
  }, [u2fKeyFetching]);

  const u2fOrApiErrorMessage = useMemo((): string | undefined => {
    if (u2fErrorMessage) {
      return u2fErrorMessage;
    }

    if (type === 'u2f_auth' && subU2fAuthApiErrorMessage) {
      return subU2fAuthApiErrorMessage;
    }

    if (type === 'u2f_bind' && apiErrorMessage) {
      return apiErrorMessage;
    }
  }, [type, u2fErrorMessage, apiErrorMessage, subU2fAuthApiErrorMessage]);

  const topMessage = useMemo((): JSX.Element | null => {
    if (u2fOrApiErrorMessage) {
      return <U2FMessage {...{
        showU2FRetryButton,
        onU2FErrorRetryClick,
        message: u2fOrApiErrorMessage,
        iconType: EIconType.ERROR
      }} />;
    }

    return fetchU2fKeyStatusMessage;
  }, [showU2FRetryButton, u2fOrApiErrorMessage, fetchU2fKeyStatusMessage, onU2FErrorRetryClick]);

  return <>
    {topMessage}
    <ScU2fWrapper>
      <ScU2fTitle>
        {type === 'u2f_auth' ? intl('attr:u2f_auth_title') : intl('attr:u2f_bind_title')}
      </ScU2fTitle>
      <Flex align="center">
        <ScSvgImgWrapper>
          <SvgImg {...{
            alt: '',
            src: SVG_URLS.U2F_INSERT
          }} />
        </ScSvgImgWrapper>
        <ScU2fDesc>{intl('attr:u2f_insert')}</ScU2fDesc>
      </Flex>
      <ScFlex align="center">
        <ScSvgImgWrapper>
          <SvgImg {...{
            alt: '',
            src: SVG_URLS.U2F_CLICK
          }} />
        </ScSvgImgWrapper>
        <ScU2fDesc>{intl('attr:u2f_click')}</ScU2fDesc>
      </ScFlex>
      <DeviceIcon deviceType={ESubVerificationDeviceType.U2F} />
    </ScU2fWrapper>
  </>;
}

export type {
  TU2fType
};
