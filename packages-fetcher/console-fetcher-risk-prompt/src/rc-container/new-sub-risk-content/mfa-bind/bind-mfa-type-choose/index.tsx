import React, {
  useState,
  useCallback,
  useEffect
} from 'react';
import styled from 'styled-components';
import {
  browserSupportsWebauthn
} from '@simplewebauthn/browser';

import {
  mixinBorderSecondary,
  mixinBgInfoTint,
  mixinButtonSecondaryStateDisabled
} from '@alicloud/console-base-theme';
import Flex, {
  FlexProps
} from '@alicloud/console-base-rc-flex';
import {
  ESubVerificationDeviceType
} from '@alicloud/console-fetcher-risk-data';
import {
  useDialog
} from '@alicloud/console-base-rc-dialog';

import {
  IDialogData,
  IRiskPromptResolveData
} from '../../../../types';
import {
  EIconType,
  ESceneKey
} from '../../../../enum';
import {
  SVG_URLS
} from '../../../../const';
import {
  useAccountId
} from '../../../../model';
import intl from '../../../../intl';
import Radio from '../../../../rc/radio';
import Message from '../../../../rc/message';

interface IScItemProps extends FlexProps {
  ['data-margin-bottom']?: number;
  ['data-disabled']?: boolean;
}

const ScDesc = styled.div`
  margin: 10px 0 16px 20px;
`;

const ScItem = styled(Flex)<IScItemProps>`
  margin-bottom: ${props => props['data-margin-bottom'] || 0}px;
  padding-left: 16px;
  height: 100px;
  overflow-y: hidden;
  cursor: ${props => {
    if (props['data-disabled']) {
      return 'not-allowed';
    }

    return 'pointer';
  }};
  ${props => {
    if (props['data-disabled']) {
      return mixinButtonSecondaryStateDisabled;
    }

    return mixinBorderSecondary;
  }}
  
  &:hover {
    ${props => {
    if (props['data-disabled']) {
      return '';
    }

    return mixinBgInfoTint;
  }}
  }
`;

export default function BindMfaTypeChoose(): JSX.Element {
  const accountId = useAccountId();
  const {
    data: {
      // 调用 GetMfaInfoToBind 接口的报错信息
      errorMessageObject
    },
    updateData
  } = useDialog<IRiskPromptResolveData, IDialogData>();

  const [stateU2fSupported, setStateU2fSupported] = useState<boolean>(true);
  const [stateRadioChecked, setStateRadioChecked] = useState<'VMFA' | 'U2F'>('VMFA');
  
  const handleVmfaRadioClick = useCallback((): void => {
    if (stateRadioChecked !== 'VMFA') {
      setStateRadioChecked('VMFA');
      updateData({
        subGetMfaInfoToBindParams: {
          accountId,
          deviceType: ESubVerificationDeviceType.VMFA
        }
      });
    }
  }, [accountId, stateRadioChecked, updateData]);

  const handleU2fRadioClick = useCallback((): void => {
    if (stateU2fSupported && stateRadioChecked !== 'U2F') {
      setStateRadioChecked('U2F');
      updateData({
        subGetMfaInfoToBindParams: {
          accountId,
          u2FVersion: 'WebAuthn',
          deviceType: ESubVerificationDeviceType.U2F
        }
      });
    }
  }, [accountId, stateRadioChecked, stateU2fSupported, updateData]);

  useEffect(() => {
    const supportWebAuthn = browserSupportsWebauthn();

    setStateU2fSupported(supportWebAuthn);
    // 由于默认的 MFA 设备类型是 VMFA，因此默认的 getBindMfaInfoParams 也是 VMFA 类型的
    updateData({
      subGetMfaInfoToBindParams: {
        accountId,
        deviceType: ESubVerificationDeviceType.VMFA
      }
    });
  }, [accountId, updateData]);

  return <>
    <Message {...{
      iconType: errorMessageObject[ESceneKey.BIND_MFA] ? EIconType.ERROR : EIconType.WARNING,
      message: errorMessageObject[ESceneKey.BIND_MFA] || intl('message:mfa_choose_tip')
    }} />
    <ScItem {...{
      align: 'center',
      justify: 'space-between',
      onClick: handleVmfaRadioClick,
      'data-margin-bottom': 20
    }}>
      <div>
        <Radio {...{
          checked: stateRadioChecked === 'VMFA',
          label: intl('attr:mfa_choose_vmfa')
        }} />
        <ScDesc>{intl('message:mfa_choose_vmfa')}</ScDesc>
      </div>
      <img {...{
        src: SVG_URLS.VMFA_ICON_GREY,
        width: 120,
        alt: ''
      }} />
    </ScItem>
    {!stateU2fSupported && <Message {...{
      widthPercentage: 100,
      noBackground: true,
      isSmallICon: true,
      iconType: EIconType.ERROR,
      message: intl('message:u2f_browser_not_support')
    }} />}
    <ScItem {...{
      align: 'center',
      justify: 'space-between',
      onClick: handleU2fRadioClick,
      'data-disabled': !stateU2fSupported
    }}>
      <div>
        <Radio {...{
          checked: stateRadioChecked === 'U2F',
          disabled: !stateU2fSupported,
          label: intl('attr:mfa_choose_u2f')
        }} />
        <ScDesc>{intl('message:mfa_choose_u2f')}</ScDesc>
      </div>
      <img {...{
        alt: '',
        width: 120,
        src: SVG_URLS.U2F_ICON
      }} />
    </ScItem>
  </>;
}
