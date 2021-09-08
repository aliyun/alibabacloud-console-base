import React from 'react';
import QRCode from 'qrcode.react';
import styled from 'styled-components';
import _get from 'lodash/get';

import {
  useDialog
} from '@alicloud/console-base-rc-dialog';
import CopyIt from '@alicloud/console-base-rc-copy-it';
import {
  SIZE,
  mixinTextSecondary,
  mixinBorderTertiary,
  mixinBorderTertiaryBottom
} from '@alicloud/console-base-theme';
import Flex from '@alicloud/console-base-rc-flex';

import {
  IGetBindVMfaInfoData,
  INewSubAccountRisk
} from '../../../../../types';
import intl from '../../../../../intl';

const ScQrCodeDiv = styled.div`
  margin-right: 20px;
  padding: 0 16px;
  text-align: center;
`;

const ScQrCodeWrap = styled(QRCode)`
  margin: 0 auto;
  padding: 4px;
  ${mixinBorderTertiary}
`;

const ScManualContentWrap = styled.div`
  margin: 0 auto;
  border-radius: 8px;
  max-width: 350px;
  ${mixinBorderTertiary}
`;

const ScHeading = styled.div`
  font-size: ${SIZE.FONT_SIZE_SUB_TITLE}px;
  font-weight: 600;
  ${mixinTextSecondary}
`;

const ScManualContentRow = styled.div`
  margin: 0 auto;
  padding: 12px;
  word-break: break-all;
  ${mixinBorderTertiaryBottom}
`;

const ScManualContentRowNoBorderBottom = styled.div`
  margin: 0 auto;
  padding: 12px;
  word-break: break-all;
`;

export default function VMfaBindInfo(): JSX.Element {
  const {
    data: {
      getBindMfaInfoData
    }
  } = useDialog<void, INewSubAccountRisk>();

  const qrCodeUri = _get(getBindMfaInfoData as IGetBindVMfaInfoData, 'QRCodeUri', '');
  const targetMfaDeviceSecret = _get(getBindMfaInfoData as IGetBindVMfaInfoData, 'TargetMfaDeviceSecret', '');
  const targetUserPrincipalName = _get(getBindMfaInfoData as IGetBindVMfaInfoData, 'TargetUserPrincipalName', '');

  return <Flex align="center">
    <ScQrCodeDiv>
      <ScQrCodeWrap size={140} value={qrCodeUri} />
    </ScQrCodeDiv>
    <ScManualContentWrap>
      <ScManualContentRow>
        <ScHeading>
          {intl('attr:vmfa_bind_info_title')}
        </ScHeading>
      </ScManualContentRow>
      <ScManualContentRow>
        <span>{intl('attr:vmfa_bind_info_account')}</span>
        <span>{targetUserPrincipalName}</span>
        <CopyIt text={targetUserPrincipalName} />
      </ScManualContentRow>
      <ScManualContentRowNoBorderBottom>
        <span>{intl('attr:vmfa_bind_info_key')}</span>
        <span>{targetMfaDeviceSecret}</span>
        <CopyIt text={targetMfaDeviceSecret} />
      </ScManualContentRowNoBorderBottom>
    </ScManualContentWrap>
  </Flex>;
}
