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
  IDialogDataNewSubAccountRisk
} from '../../../types';
import {
  EStep,
  EIconType,
  ESubMfaDeviceType
} from '../../../enum';
import {
  SvgUrls
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
  margin-top: ${props => props.marginTop || 0}px;
  padding-left: 16px;
  height: 100px;
  overflow-y: hidden;
  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
  ${props => (props.disabled ? mixinButtonSecondaryStateDisabled : mixinBorderSecondary)}
  
  &:hover {
    ${props => (props.disabled ? null : mixinBgInfoTint)}
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
  } = useDialog<void, IDialogDataNewSubAccountRisk>();

  const [stateRadioChecked, setStateRadioChecked] = useState<EStep.VMFA_BIND | EStep.U2F_BIND>(EStep.VMFA_BIND);
  const [stateU2fSupported, setStateU2fSupported] = useState<boolean>(true);

  const handleVmfaRadioClick = useCallback((): void => {
    if (stateRadioChecked === EStep.VMFA_BIND) {
      return;
    }

    setStateRadioChecked(EStep.VMFA_BIND);
    updateData({
      getBindMfaInfoPayload: {
        AccountId: accountId,
        TicketType: ticketType,
        DeviceType: ESubMfaDeviceType.VMFA
      }
    });
  }, [accountId, stateRadioChecked, updateData]);

  const handleU2fRadioCheck = useCallback((): void => {
    if (stateRadioChecked === EStep.U2F_BIND || !stateU2fSupported) {
      return;
    }

    setStateRadioChecked(EStep.U2F_BIND);
    updateData({
      getBindMfaInfoPayload: {
        AccountId: accountId,
        TicketType: ticketType,
        U2FVersion: 'WebAuthn',
        DeviceType: ESubMfaDeviceType.U2F
      }
    });
  }, [accountId, stateRadioChecked, stateU2fSupported, updateData]);

  useEffect(() => {
    const supportWebAuhtn = browserSupportsWebauthn();

    if (isUnmounted()) {
      return;
    }

    setStateU2fSupported(supportWebAuhtn);

    // 由于默认的 MFA 设备类型是 VMFA，因此默认的 getBindMfaInfoPayload 也是 VMFA 类型的
    updateData({
      getBindMfaInfoPayload: {
        AccountId: accountId,
        TicketType: ticketType,
        DeviceType: ESubMfaDeviceType.VMFA
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
          checked: stateRadioChecked === EStep.VMFA_BIND,
          label: intl('op:mfa_choose_vmfa')
        }} />
        <ScDesc>{intl('message:mfa_choose_vmfa')}</ScDesc>
      </div>
      <img alt="" {...{
        src: SvgUrls.U2F_ICON,
        width: 120
      }} />
    </ScItem>
    <ScItem {...{
      marginTop: 20,
      disabled: !stateU2fSupported,
      align: 'center',
      justify: 'space-between',
      onClick: handleU2fRadioCheck
    }}>
      <div>
        {!stateU2fSupported ? <Message {...{
          noBackground: true,
          isSmallICon: true,
          iconType: EIconType.ERROR,
          message: intl('message:u2f_browser_not_support')
        }} /> : null}
        <Flex>
          <Radio {...{
            checked: stateRadioChecked === EStep.U2F_BIND,
            disabled: !stateU2fSupported,
            label: intl('op:mfa_choose_u2f')
          }} />
        </Flex>
        <ScDesc>{intl('message:mfa_choose_u2f')}</ScDesc>
      </div>
      <img alt="" {...{
        src: SvgUrls.VMFA_ICON_GREY,
        width: 120
      }} />
    </ScItem>
  </>;
}
