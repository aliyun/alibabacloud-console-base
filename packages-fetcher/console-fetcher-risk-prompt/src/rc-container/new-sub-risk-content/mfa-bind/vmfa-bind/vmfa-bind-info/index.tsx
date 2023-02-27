import React, {
  useState
} from 'react';
import QRCode from 'qrcode.react';
import styled from 'styled-components';

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
  ESubVerificationDeviceType,
  type DataGetMfaInfoToBind
} from '@alicloud/console-fetcher-risk-data';
import {
  useDialog
} from '@alicloud/console-base-rc-dialog';

import {
  IDialogData,
  IRiskPromptResolveData
} from '../../../../../types';
import intl from '../../../../../intl';

interface IManualProps {
  needTopPadding?: boolean;
  needBottomPadding?: boolean;
}

interface IVmfaInfo {
  qrCodeUri: string;
  targetMfaDeviceSecret: string;
  targetUserPrincipalName: string;
}

const ScQrCodeWrap = styled(QRCode)`
  margin: 0 auto;
  padding: 4px;
  ${mixinBorderTertiary}
`;

const ScButton = styled(Button)`
  margin-left: 4px;
`;

const ScQrCodeDiv = styled.div`
  margin-right: 20px;
  padding: 0 16px;
  text-align: center;
`;

const ScWrapper = styled.div`
  flex: 1;
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

function getVmfaBindInfo(o?: DataGetMfaInfoToBind): IVmfaInfo {
  if (o?.deviceType === ESubVerificationDeviceType.VMFA) {
    return {
      qrCodeUri: o.qrCodeUri || '',
      targetMfaDeviceSecret: o.targetMfaDeviceSecret || '',
      targetUserPrincipalName: o.targetUserPrincipalName || ''
    };
  }

  return {
    qrCodeUri: '',
    targetMfaDeviceSecret: '',
    targetUserPrincipalName: ''
  };
}
 
export default function VmfaBindInfo(): JSX.Element {
  const {
    data: {
      subGetMfaInfoToBindData
    }
  } = useDialog<IRiskPromptResolveData, IDialogData>();

  const [stateShowSecret, setStateShowSecret] = useState<boolean>(false);

  const {
    qrCodeUri,
    targetMfaDeviceSecret,
    targetUserPrincipalName
  } = getVmfaBindInfo(subGetMfaInfoToBindData);

  return <Flex align="center">
    <ScQrCodeDiv>
      <ScQrCodeWrap size={140} value={qrCodeUri} />
    </ScQrCodeDiv>
    <ScWrapper>
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
          {stateShowSecret ? <CopyIt text={targetMfaDeviceSecret} /> : null}
          <ScButton {...{
            component: 'span',
            theme: ButtonTheme.TEXT_PRIMARY,
            label: stateShowSecret ? intl('attr:mfa_hide_secret') : intl('attr:mfa_show_secret'),
            onClick: () => {
              setStateShowSecret(prevState => !prevState);
            }
          }} />
        </ScManualContentDiv>
      </ScManualContentWrap>
    </ScWrapper>
  </Flex>;
}
