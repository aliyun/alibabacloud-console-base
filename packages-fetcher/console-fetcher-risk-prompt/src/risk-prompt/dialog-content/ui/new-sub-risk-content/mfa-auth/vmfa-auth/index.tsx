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
  ESubVerifyType
} from '@alicloud/console-fetcher-risk-data';
import {
  useDialog
} from '@alicloud/console-base-rc-dialog';

import {
  IDialogData
} from '../../../../../../types';
import {
  SVG_URLS,
  ALIYUN_APP_VERSION,
  EIconType,
  ESubAccountIdentityServiceType
} from '../../../../../../const';
import {
  useModelProps
} from '../../../../../../model';
import intl from '../../../../../../intl';
import Form from '../../../../../../rc/form';
import XIcon from '../../../../../../rc/x-icon';
import {
  getInputError,
  windVaneAvailable,
  getVmfaCodeFromWindVane
} from '../../../../../../utils';
import Message from '../../_components/message';
import VMfaInput from '../../_components/vmfa-input';

const ScFormWrapper = styled.div`
  position: relative;
  padding: 12px 12px 12px 0;
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
    codeType,
    accountId
  } = useModelProps();
  const {
    data: {
      errorMessage,
      subAccountIdentityServiceData
    },
    updateData
  } = useDialog<void, IDialogData>();
  
  const userPrincipalName = ((): string => {
    if (subAccountIdentityServiceData?.dataType === ESubAccountIdentityServiceType.GET_MFA_INFO_TO_AUTH) {
      return subAccountIdentityServiceData.data.targetUserPrincipalName;
    }

    return '';
  })();

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

  const inputError = useMemo(() => {
    return getInputError(stateVmfaCode, stateInputEverChanged);
  }, [stateVmfaCode, stateInputEverChanged]);

  const windVaneGetVmfaApiAvailable = windVaneAvailable && !stateNoWindvaneHandler;
  const onShowVmfaButtonClick = useCallback(() => {
    getVmfaCodeFromWindVane({
      onFail(failMessage) {
        updateData({
          errorMessage: failMessage
        });
        setStateNoWindvaneHandler(true);
      },
      onSuccess(vmfaCode) {
        setStateVmfaCode(vmfaCode);
        setStateInputEverChanged(true);
      },
      onFinally() {
        setStateInputFocused(false);
      }
    });
  }, [updateData]);

  useEffect(() => {
    const primaryButtonDisabled = ((): boolean => {
      if (!stateInputEverChanged) {
        return true;
      }

      return Boolean(inputError);
    })();

    updateData({
      errorMessage: '',
      primaryButtonDisabled,
      subAccountIdentityServiceParams: {
        paramsType: ESubAccountIdentityServiceType.VERIFY_SUB_ACCOUNT_MFA,
        params: {
          accountId,
          authCode: stateVmfaCode,
          verifyType: ESubVerifyType.MFA,
          ext: JSON.stringify({
            codeType
          })
        }
      }
    });
  }, [accountId, codeType, stateVmfaCode, stateInputEverChanged, inputError, updateData]);

  return <>
    {errorMessage && <Message {...{
      message: errorMessage,
      iconType: EIconType.ERROR
    }} />}
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
          content: <VMfaInput {...{
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
