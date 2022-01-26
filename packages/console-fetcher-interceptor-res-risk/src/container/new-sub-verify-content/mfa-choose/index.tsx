import React, {
  useState,
  useCallback,
  useEffect
} from 'react';
import styled from 'styled-components';
import { browserSupportsWebauthn } from '@simplewebauthn/browser';

import {
  useDialog
} from '@alicloud/console-base-rc-dialog';
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
  INewSubAccountRisk
} from '../../../types';
import {
  EStep,
  SvgUrls,
  EIconType,
  ESubMFADeviceType
} from '../../../const';
import intl from '../../../intl';
import Radio from '../../../rc/radio';
import getTicketType from '../../../util/get-ticket-type';
import Message from '../_components/message';

interface IScItemProps extends FlexProps {
  marginTop?: number;
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
  margin-top: ${props => props.marginTop || 0}px;
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

const ticketType = getTicketType();

export default function MfaChoose(): JSX.Element {
  const isUnmounted = useIsUnmounted();
  const {
    data: {
      subRiskInfo: {
        accountId
      },
      errorMessage
    },
    updateData
  } = useDialog<void, INewSubAccountRisk>();

  const [stateRadioChecked, setStateRadioChecked] = useState<EStep.VMFA_BIND | EStep.U2F_BIND>(EStep.VMFA_BIND);
  const [stateU2FSupported, setStateU2FSupported] = useState<boolean>(true);

  const handleVMfaRadioClick = useCallback((): void => {
    if (stateRadioChecked === EStep.VMFA_BIND) {
      return;
    }

    setStateRadioChecked(EStep.VMFA_BIND);
    updateData({
      getBindMfaInfoPayload: {
        AccountId: accountId,
        TicketType: ticketType,
        DeviceType: ESubMFADeviceType.VMFA
      }
    });
  }, [accountId, stateRadioChecked, updateData]);

  const handleU2FRadioCheck = useCallback((): void => {
    if (stateRadioChecked === EStep.U2F_BIND || !stateU2FSupported) {
      return;
    }

    setStateRadioChecked(EStep.U2F_BIND);
    updateData({
      getBindMfaInfoPayload: {
        AccountId: accountId,
        TicketType: ticketType,
        U2FVersion: 'WebAuthn',
        DeviceType: ESubMFADeviceType.U2F
      }
    });
  }, [accountId, stateRadioChecked, stateU2FSupported, updateData]);

  useEffect(() => {
    const supportWebAuhtn = browserSupportsWebauthn();

    if (isUnmounted()) {
      return;
    }

    setStateU2FSupported(supportWebAuhtn);

    // 由于默认的 MFA 设备类型是 VMFA，因此默认的 getBindMfaInfoPayload 也是 VMFA 类型的
    updateData({
      getBindMfaInfoPayload: {
        AccountId: accountId,
        TicketType: ticketType,
        DeviceType: ESubMFADeviceType.VMFA
      }
    });
  }, [accountId, isUnmounted, updateData]);

  return <>
    <Message {...{
      iconType: errorMessage ? EIconType.error : EIconType.warning,
      message: errorMessage || intl('message:mfa_choose_tip')
    }} />
    <ScItem {...{
      align: 'center',
      justify: 'space-between',
      onClick: handleVMfaRadioClick
    }}>
      <div>
        <Radio {...{
          checked: stateRadioChecked === EStep.VMFA_BIND,
          label: intl('attr:mfa_choose_vmfa')
        }} />
        <ScDesc>{intl('message:mfa_choose_vmfa')}</ScDesc>
      </div>
      <img {...{
        src: SvgUrls.U2F_ICON,
        width: 120,
        alt: ''
      }} />
    </ScItem>
    <ScItem {...{
      marginTop: 20,
      disabled: !stateU2FSupported,
      align: 'center',
      justify: 'space-between',
      onClick: handleU2FRadioCheck
    }}>
      <div>
        {!stateU2FSupported ? <Message {...{
          noBackground: true,
          isSmallICon: true,
          iconType: EIconType.error,
          message: intl('message:u2f_browser_not_support')
        }} /> : null}
        <Flex>
          <Radio {...{
            checked: stateRadioChecked === EStep.U2F_BIND,
            disabled: !stateU2FSupported,
            label: intl('attr:mfa_choose_u2f')
          }} />
        </Flex>
        <ScDesc>{intl('message:mfa_choose_u2f')}</ScDesc>
      </div>
      <img {...{
        src: SvgUrls.VMFA_ICON_GREY,
        width: 120,
        alt: ''
      }} />
    </ScItem>
  </>;
}
