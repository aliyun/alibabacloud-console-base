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
import useIsUnmounted from '@alicloud/react-hook-is-unmounted';
import {
  ESubMfaDeviceType
} from '@alicloud/console-fetcher-risk-data';
import {
  useDialog
} from '@alicloud/console-base-rc-dialog';

import {
  IDialogData,
  IRiskPromptResolveData
} from '../../../../../types';
import {
  SVG_URLS,
  EIconType,
  EDialogType,
  ESubAccountIdentityServiceType
} from '../../../../../const';
import {
  useAccountId
} from '../../../../../model';
import intl from '../../../../../intl';
import Radio from '../../../../../rc/radio';
import Message from '../_components/message';

interface IScItemProps extends FlexProps {
  margin_bottom?: number;
  disabled?: boolean;
}

const ScDesc = styled.div`
  margin: 10px 0 16px 20px;
`;

const ScItem = styled(Flex)<IScItemProps>`
  overflow-y: hidden;
  cursor: ${props => {
    if (props.disabled) {
      return 'not-allowed';
    }

    return 'pointer';
  }};
  padding-left: 16px;
  height: 100px;
  margin-bottom: ${props => props.margin_bottom || 0}px;
  ${props => {
    if (props.disabled) {
      return mixinButtonSecondaryStateDisabled;
    }

    return mixinBorderSecondary;
  }}
  
  &:hover {
    ${props => {
    if (props.disabled) {
      return '';
    }

    return mixinBgInfoTint;
  }}
  }
`;

export default function MfaChoose(): JSX.Element {
  const isUnmounted = useIsUnmounted();
  const accountId = useAccountId();
  const {
    data: {
      errorMessage
    },
    updateData
  } = useDialog<IRiskPromptResolveData, IDialogData>();

  const [stateU2fSupported, setStateU2fSupported] = useState<boolean>(true);
  const [stateRadioChecked, setStateRadioChecked] = useState<EDialogType.SUB_RISK_VMFA_BIND | EDialogType.SUB_RISK_U2F_BIND>(EDialogType.SUB_RISK_VMFA_BIND);
  
  const handleVmfaRadioClick = useCallback((): void => {
    if (stateRadioChecked === EDialogType.SUB_RISK_VMFA_BIND) {
      return;
    }

    setStateRadioChecked(EDialogType.SUB_RISK_VMFA_BIND);
    updateData({
      subAccountIdentityServiceParams: {
        paramsType: ESubAccountIdentityServiceType.GET_MFA_INFO_TO_BIND,
        params: {
          accountId,
          deviceType: ESubMfaDeviceType.VMFA
        }
      }
    });
  }, [accountId, stateRadioChecked, updateData]);

  const handleU2fRadioClick = useCallback((): void => {
    if (stateRadioChecked === EDialogType.SUB_RISK_U2F_BIND || !stateU2fSupported) {
      return;
    }

    setStateRadioChecked(EDialogType.SUB_RISK_U2F_BIND);
    updateData({
      subAccountIdentityServiceParams: {
        paramsType: ESubAccountIdentityServiceType.GET_MFA_INFO_TO_BIND,
        params: {
          accountId,
          u2FVersion: 'WebAuthn',
          deviceType: ESubMfaDeviceType.U2F
        }
      }
    });
  }, [accountId, stateRadioChecked, stateU2fSupported, updateData]);

  useEffect(() => {
    const supportWebAuhtn = browserSupportsWebauthn();

    if (isUnmounted()) {
      return;
    }

    setStateU2fSupported(supportWebAuhtn);
    // 由于默认的 MFA 设备类型是 VMFA，因此默认的 getBindMfaInfoParams 也是 VMFA 类型的
    updateData({
      subAccountIdentityServiceParams: {
        paramsType: ESubAccountIdentityServiceType.GET_MFA_INFO_TO_BIND,
        params: {
          accountId,
          deviceType: ESubMfaDeviceType.VMFA
        }
      }
    });
  }, [accountId, isUnmounted, updateData]);

  return <>
    <Message {...{
      iconType: errorMessage ? EIconType.ERROR : EIconType.WARNING,
      message: errorMessage || intl('message:mfa_choose_tip')
    }} />
    <ScItem {...{
      align: 'center',
      justify: 'space-between',
      onClick: handleVmfaRadioClick
    }}>
      <div>
        <Radio {...{
          checked: stateRadioChecked === EDialogType.SUB_RISK_VMFA_BIND,
          label: intl('attr:mfa_choose_vmfa')
        }} />
        <ScDesc>{intl('message:mfa_choose_vmfa')}</ScDesc>
      </div>
      <img {...{
        src: SVG_URLS.U2F_ICON,
        width: 120,
        alt: ''
      }} />
    </ScItem>
    {!stateU2fSupported ? <Message {...{
      widthPercentage: 100,
      noBackground: true,
      isSmallICon: true,
      iconType: EIconType.ERROR,
      message: intl('message:u2f_browser_not_support')
    }} /> : null}
    <ScItem {...{
      margin_bottom: 20,
      align: 'center',
      justify: 'space-between',
      disabled: !stateU2fSupported,
      onClick: handleU2fRadioClick
    }}>
      <div>
        <Radio {...{
          checked: stateRadioChecked === EDialogType.SUB_RISK_U2F_BIND,
          disabled: !stateU2fSupported,
          label: intl('attr:mfa_choose_u2f')
        }} />
        <ScDesc>{intl('message:mfa_choose_u2f')}</ScDesc>
      </div>
      <img {...{
        alt: '',
        width: 120,
        src: SVG_URLS.VMFA_ICON_GREY
      }} />
    </ScItem>
  </>;
}
