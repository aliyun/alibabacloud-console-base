import _get from 'lodash/get';
import React, {
  useState
} from 'react';
import styled, {
  css
} from 'styled-components';
import QRCode from 'qrcode.react';

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
import Button, {
  ButtonTheme
} from '@alicloud/console-base-rc-button';

import {
  IDataBindVmfaInfo,
  IDialogDataNewSubAccountRisk
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
  padding: 16px;
  box-sizing: border-box;
  width: 350px;
  ${mixinBgWhite}
`;

const ScSpan = styled.span`
  font-size: ${SIZE.FONT_SIZE_SUB_TITLE}px;
  ${mixinTextTertiary}
`;

const ScManualContentDiv = styled.div<IManualProps>`
  margin: 0 auto;
  word-break: break-all;
  ${props => (props.needTopPadding ? css`
    padding-top: 8px;
  ` : css`
    padding-bottom: 8px;
  `)}
`;

export default function VMfaBindInfo(): JSX.Element {
  const {
    data: {
      getBindMfaInfoData
    }
  } = useDialog<void, IDialogDataNewSubAccountRisk>();
  const [stateShowSecret, setStateShowSecret] = useState<boolean>(false);
  const qrCodeUri = _get(getBindMfaInfoData as IDataBindVmfaInfo, 'QRCodeUri', '') || '';
  const targetMfaDeviceSecret = _get(getBindMfaInfoData as IDataBindVmfaInfo, 'TargetMfaDeviceSecret', '') || '';
  const targetUserPrincipalName = _get(getBindMfaInfoData as IDataBindVmfaInfo, 'TargetUserPrincipalName', '');

  return <Flex align="center">
    <ScQrCodeDiv>
      <ScQrCodeWrap size={140} value={qrCodeUri} />
    </ScQrCodeDiv>
    <div>
      <ScHeading>{intl('attr:vmfa_bind_info_title')}</ScHeading>
      <ScManualContentWrap>
        <ScManualContentDiv needBottomPadding>
          <ScSpan>{intl('attr:vmfa_bind_info_account')}</ScSpan>
          <CopyIt text={targetUserPrincipalName} />
        </ScManualContentDiv>
        <ScManualContentDiv needTopPadding>
          <ScSpan>{intl('attr:vmfa_bind_info_key')}</ScSpan>
          {stateShowSecret ? <CopyIt text={targetMfaDeviceSecret} /> : null}
          <Button {...{
            component: 'span',
            theme: ButtonTheme.TEXT_PRIMARY,
            label: stateShowSecret ? intl('op:mfa_hide_secret') : intl('op:mfa_show_secret'),
            onClick: () => {
              setStateShowSecret(prevState => !prevState);
            }
          }} />
        </ScManualContentDiv>
      </ScManualContentWrap>
    </div>
  </Flex>;
}
