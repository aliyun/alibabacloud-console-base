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
  ESubIdentityServiceType
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
  margin_bottom?: number;
  disabled?: boolean;
}

const ScDesc = styled.div`
  margin: 10px 0 16px 20px;
`;

const ScItem = styled(Flex)<IScItemProps>`
  margin-bottom: ${props => props.margin_bottom || 0}px;
  padding-left: 16px;
  height: 100px;
  overflow-y: hidden;
  cursor: ${props => {
    if (props.disabled) {
      return 'not-allowed';
    }

    return 'pointer';
  }};
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

export default function BindMfaTypeChoose(): JSX.Element {
  const isUnmounted = useIsUnmounted();
  const accountId = useAccountId();
  const {
    data: {
      // 调用 GetMfaInfoToBind 接口的报错信息
      apiErrorMessage
    },
    updateData
  } = useDialog<IRiskPromptResolveData, IDialogData>();

  const [stateU2fSupported, setStateU2fSupported] = useState<boolean>(true);
  const [stateRadioChecked, setStateRadioChecked] = useState<'VMFA' | 'U2F'>('VMFA');
  
  const handleVmfaRadioClick = useCallback((): void => {
    if (stateRadioChecked !== 'VMFA') {
      setStateRadioChecked('VMFA');
      updateData({
        subIdentityServiceParams: {
          paramsType: ESubIdentityServiceType.GET_MFA_INFO_TO_BIND,
          params: {
            accountId,
            deviceType: ESubVerificationDeviceType.VMFA
          }
        }
      });
    }
  }, [accountId, stateRadioChecked, updateData]);

  const handleU2fRadioClick = useCallback((): void => {
    if (stateU2fSupported && stateRadioChecked !== 'U2F') {
      setStateRadioChecked('U2F');
      updateData({
        subIdentityServiceParams: {
          paramsType: ESubIdentityServiceType.GET_MFA_INFO_TO_BIND,
          params: {
            accountId,
            u2FVersion: 'WebAuthn',
            deviceType: ESubVerificationDeviceType.U2F
          }
        }
      });
    }
  }, [accountId, stateRadioChecked, stateU2fSupported, updateData]);

  useEffect(() => {
    const supportWebAuhtn = browserSupportsWebauthn();

    if (isUnmounted()) {
      return;
    }

    setStateU2fSupported(supportWebAuhtn);
    // 由于默认的 MFA 设备类型是 VMFA，因此默认的 getBindMfaInfoParams 也是 VMFA 类型的
    updateData({
      subIdentityServiceParams: {
        paramsType: ESubIdentityServiceType.GET_MFA_INFO_TO_BIND,
        params: {
          accountId,
          deviceType: ESubVerificationDeviceType.VMFA
        }
      }
    });
  }, [accountId, isUnmounted, updateData]);

  return <>
    <Message {...{
      iconType: apiErrorMessage ? EIconType.ERROR : EIconType.WARNING,
      message: apiErrorMessage || intl('message:mfa_choose_tip')
    }} />
    <ScItem {...{
      align: 'center',
      justify: 'space-between',
      margin_bottom: 20,
      onClick: handleVmfaRadioClick
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
    {!stateU2fSupported ? <Message {...{
      widthPercentage: 100,
      noBackground: true,
      isSmallICon: true,
      iconType: EIconType.ERROR,
      message: intl('message:u2f_browser_not_support')
    }} /> : null}
    <ScItem {...{
      align: 'center',
      justify: 'space-between',
      disabled: !stateU2fSupported,
      onClick: handleU2fRadioClick
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
