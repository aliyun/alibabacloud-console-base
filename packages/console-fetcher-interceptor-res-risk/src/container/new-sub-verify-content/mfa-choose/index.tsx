import React, {
  useState,
  useCallback,
  useEffect
} from 'react';
import styled from 'styled-components';

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
import u2fApi from '@alicloud/u2f-api';
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
import getU2fStateMessage from '../../../util/get-u2f-state-message';
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
const {
  u2fNotSupportedMsg
} = getU2fStateMessage;

export default function MfaChoose(): JSX.Element {
  const isUnmounted = useIsUnmounted();
  const {
    data: {
      subRiskInfo: {
        userPrincipalName
      },
      errorMessage
    },
    updateData
  } = useDialog<void, INewSubAccountRisk>();

  const [stateRadioChecked, setStateRadioChecked] = useState<EStep.VMFA_BIND | EStep.U2F_BIND>(EStep.VMFA_BIND);
  const [stateU2FSupported, setStateU2FSupported] = useState<boolean>(true);

  const haneleVmfaRadioClick = useCallback((): void => {
    if (stateRadioChecked === EStep.VMFA_BIND) {
      return;
    }

    setStateRadioChecked(EStep.VMFA_BIND);
    updateData({
      getBindMfaInfoPayload: {
        TargetUserPrincipalName: userPrincipalName,
        TicketType: ticketType,
        DeviceType: ESubMFADeviceType.VMFA
      }
    });
  }, [userPrincipalName, stateRadioChecked, updateData]);

  const handleU2FRadioCheck = useCallback((): void => {
    if (stateRadioChecked === EStep.U2F_BIND || !stateU2FSupported) {
      return;
    }

    setStateRadioChecked(EStep.U2F_BIND);
    updateData({
      getBindMfaInfoPayload: {
        TargetUserPrincipalName: userPrincipalName,
        TicketType: ticketType,
        DeviceType: ESubMFADeviceType.U2F
      }
    });
  }, [userPrincipalName, stateRadioChecked, stateU2FSupported, updateData]);

  useEffect(() => {
    if (isUnmounted()) {
      return;
    }

    // 由于默认的 MFA 设备类型是 VMFA，因此默认的 getBindMfaInfoPayload 也是 VMFA 类型的
    updateData({
      getBindMfaInfoPayload: {
        TargetUserPrincipalName: userPrincipalName,
        TicketType: ticketType,
        DeviceType: ESubMFADeviceType.VMFA
      }
    });
    
    u2fApi.isSupported().then(isU2FSupported => {
      setStateU2FSupported(isU2FSupported);
    });
  }, [userPrincipalName, isUnmounted, updateData]);

  return <>
    <Message {...{
      iconType: errorMessage ? EIconType.error : EIconType.warning,
      message: errorMessage || intl('message:mfa_choose_tip')
    }} />
    <ScItem {...{
      align: 'center',
      justify: 'space-between',
      onClick: haneleVmfaRadioClick
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
          iconType: EIconType.error,
          message: u2fNotSupportedMsg
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
