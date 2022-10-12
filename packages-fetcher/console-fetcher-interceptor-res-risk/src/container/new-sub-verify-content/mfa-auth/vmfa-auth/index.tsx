import React, {
  useMemo,
  useState,
  useEffect,
  useCallback
} from 'react';
import styled from 'styled-components';

import {
  mixinBgSecondary,
  mixinBorderSecondary
} from '@alicloud/console-base-theme';
import {
  useDialog
} from '@alicloud/console-base-rc-dialog';

import {
  EIconType,
  EPayloadVerifyType
} from '../../../../enum';
import {
  IWindvaneError,
  IPayloadVerifyVmfa,
  IDialogDataNewSubAccountRisk
} from '../../../../types';
import {
  SVG_URLS,
  TICKET_TYPE,
  ALIYUN_APP_VERSION,
  WINDVANE_ERROR_CODE,
  ALIYUN_APP_DOWNLOAD_URL
} from '../../../../const';
import intl from '../../../../intl';
import Form from '../../../../rc/form';
import XIcon from '../../../../rc/x-icon';
import Message from '../../_components/message';
import VmfaInput from '../../_components/vmfa-input';
import {
  getInputError,
  windVaneAvailable,
  getVmfaCodeFromWindVane
} from '../../../../util';

const ScFormWrapper = styled.div`
  position: relative;
  padding: 12px 8px 12px 0;
  overflow: hidden;
  ${mixinBgSecondary}
  ${mixinBorderSecondary}
`;

const ScImg = styled.img`
  position: absolute;
  right: -16px;
  bottom: -16px;
`;

export default function VmfaAuth(): JSX.Element {
  const {
    data: {
      subRiskInfo: {
        accountId,
        codeType
      },
      getAuthMfaInfoData,
      errorMessage
    },
    updateData
  } = useDialog<void, IDialogDataNewSubAccountRisk>();

  const userPrincipalName = getAuthMfaInfoData?.TargetUserPrincipalName || '';
  
  const [stateVmfaCode, setStateVmfaCode] = useState<string>('');
  const [stateInputFocused, setStateInputFocused] = useState<boolean>(false);
  const [stateInputEverChanged, setStateInputEverChanged] = useState<boolean>(false);
  const [stateNoWindvaneHandler, setStateNoWindvaneHandler] = useState<boolean>(false);

  const handleInputChange = useCallback(code => {
    setStateInputEverChanged(true);
    setStateVmfaCode(code);
  }, []);

  const inputInnerRight = useMemo(() => {
    return <XIcon onClick={() => {
      setStateVmfaCode('');
      updateData({
        errorMessage: ''
      });
    }} />;
  }, [updateData]);

  const windVaneGetVmfaApiAvailable = windVaneAvailable && !stateNoWindvaneHandler;
  const onShowVmfaButtonClick = useCallback(() => {
    getVmfaCodeFromWindVane().then(vmfaCode => {
      const trimmedCode = vmfaCode.trim();

      if (trimmedCode) {
        setStateInputEverChanged(true);
        setStateVmfaCode(trimmedCode);
      }
    }).catch((error: IWindvaneError) => {
      if (error.code === WINDVANE_ERROR_CODE.NO_HANDLER) {
        setStateNoWindvaneHandler(true);
        updateData({
          errorMessage: intl('message:update_app_tip_{url}!html', {
            url: ALIYUN_APP_DOWNLOAD_URL
          })
        });
      }
    }).finally(() => {
      setStateInputFocused(false);
    });
  }, [updateData]);

  const inputError = useMemo(() => {
    return getInputError(stateVmfaCode, stateInputEverChanged);
  }, [stateVmfaCode, stateInputEverChanged]);

  useEffect(() => {
    const verifyMfaPayload: IPayloadVerifyVmfa = {
      AccountId: accountId,
      TicketType: TICKET_TYPE,
      VerifyType: EPayloadVerifyType.MFA,
      Ext: JSON.stringify({
        codeType
      }),
      AuthCode: stateVmfaCode
    };
    const primaryButtonDisabled = ((): boolean => {
      if (!stateInputEverChanged) {
        return true;
      }

      return Boolean(inputError);
    })();

    updateData({
      verifyMfaPayload,
      primaryButtonDisabled
    });
  }, [accountId, codeType, stateVmfaCode, stateInputEverChanged, inputError, updateData]);

  return <>
    {errorMessage ? <Message {...{
      iconType: EIconType.ERROR,
      message: errorMessage
    }} /> : null}
    <ScFormWrapper>
      <Form {...{
        items: [{
          label: intl('attr:vmfa_auth_userName'),
          labelWidth: ALIYUN_APP_VERSION ? 70 : 100,
          labelTextAlign: 'center',
          content: <strong>{userPrincipalName}</strong>
        }, {
          label: intl('attr:vmfa_auth_code'),
          labelWidth: ALIYUN_APP_VERSION ? 70 : 100,
          labelTextAlign: 'center',
          content: <VmfaInput {...{
            value: stateVmfaCode,
            focused: stateInputFocused,
            errorMessage: inputError,
            onChange: handleInputChange,
            innerRight: inputInnerRight,
            input_width_percent: windVaneAvailable ? 60 : 80,
            onShowVmfaButtonClick: windVaneGetVmfaApiAvailable ? onShowVmfaButtonClick : undefined
          }} />
        }]
      }} />
      {windVaneGetVmfaApiAvailable ? null : <ScImg {...{
        alt: '',
        width: 80,
        src: SVG_URLS.VMFA_ICON_WHITE
      }} />}
    </ScFormWrapper>
  </>;
}
