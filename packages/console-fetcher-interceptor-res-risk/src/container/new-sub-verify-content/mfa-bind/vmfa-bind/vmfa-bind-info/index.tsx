import _get from 'lodash/get';
import React from 'react';
import QRCode from 'qrcode.react';
import styled from 'styled-components';

import {
  useDialog
} from '@alicloud/console-base-rc-dialog';
import CopyIt from '@alicloud/console-base-rc-copy-it';
import {
  SIZE,
  mixinTextSecondary,
  mixinBgWhite,
  mixinTextTertiary,
  mixinBorderTertiary
} from '@alicloud/console-base-theme';
import Flex from '@alicloud/console-base-rc-flex';

import {
  IGetBindVMfaInfoData,
  INewSubAccountRisk
} from '../../../../../types';
import intl from '../../../../../intl';

interface IManualProps {
  needTopPadding?: boolean;
  needBottomPadding?: boolean;
}

const ScQrCodeWrap = styled(QRCode)`
  margin: 0 auto;
  padding: 4px;
  ${mixinBorderTertiary}
`;

const ScQrCodeDiv = styled.div`
  margin-right: 20px;
  padding: 0 16px;
  text-align: center;
`;

const ScHeading = styled.div`
  margin-bottom: 12px;
  margin-left: 4px;
  font-size: ${SIZE.FONT_SIZE_SUB_TITLE}px;
  ${mixinTextSecondary}
`;

const ScManualContentWrap = styled.div`
  box-sizing: border-box;
  width: 350px;
  padding: 16px;
  ${mixinBgWhite}
`;

const ScSpan = styled.span`
  font-size: ${SIZE.FONT_SIZE_SUB_TITLE}px;
  ${mixinTextTertiary}
`;

const ScManualContentDiv = styled.div<IManualProps>`
  margin: 0 auto;
  word-break: break-all;
  ${props => {
    if (props.needTopPadding) {
      return 'padding-top: 8px;';
    }

    if (props.needBottomPadding) {
      return 'padding-bottom: 8px;';
    }

    return '';
  }}
`;

export default function VMfaBindInfo(): JSX.Element {
  const {
    data: {
      getBindMfaInfoData
    }
  } = useDialog<void, INewSubAccountRisk>();

  const qrCodeUri = _get(getBindMfaInfoData as IGetBindVMfaInfoData, 'QRCodeUri', '') || '';
  const targetMfaDeviceSecret = _get(getBindMfaInfoData as IGetBindVMfaInfoData, 'TargetMfaDeviceSecret', '') || '';
  const targetUserPrincipalName = _get(getBindMfaInfoData as IGetBindVMfaInfoData, 'TargetUserPrincipalName', '');

  return <Flex align="center">
    <ScQrCodeDiv>
      <ScQrCodeWrap size={140} value={qrCodeUri} />
    </ScQrCodeDiv>
    <div>
      <ScHeading>
        {intl('attr:vmfa_bind_info_title')}
      </ScHeading>
      <ScManualContentWrap>
        <ScManualContentDiv needBottomPadding>
          <ScSpan>{intl('attr:vmfa_bind_info_account')}</ScSpan>
          <CopyIt text={targetUserPrincipalName} />
        </ScManualContentDiv>
        <ScManualContentDiv needTopPadding>
          <ScSpan>{intl('attr:vmfa_bind_info_key')}</ScSpan>
          <CopyIt text={targetMfaDeviceSecret} />
        </ScManualContentDiv>
      </ScManualContentWrap>
    </div>
  </Flex>;
}
