import React, {
  useMemo,
  useState
} from 'react';
import styled from 'styled-components';

import {
  mixinTextError
} from '@alicloud/console-base-theme';
import {
  useDialog
} from '@alicloud/console-base-rc-dialog';
import Button, {
  ButtonTheme
} from '@alicloud/console-base-rc-button';
import Input from '@alicloud/console-base-rc-input';
import Flex from '@alicloud/console-base-rc-flex';

import {
  IDialogData,
  IWindvaneError,
  IRiskPromptResolveData
} from '../../../../types';
import {
  EVerifyType,
  REG_MFA_CODE,
  ALIYUN_APP_VERSION,
  WINDVANE_ERROR_CODE,
  DEFAULT_RISK_CONFIG,
  ALIYUN_APP_DOWNLOAD_URL
} from '../../../../const';
import {
  useModelProps
} from '../../../../model';
import intl from '../../../../intl';
import Form from '../../../../rc/form';
import {
  intlVerifyLabel,
  intlVerifySetting,
  windVaneAvailable,
  getVmfaCodeFromWindVane
} from '../../../../utils';

import Generate from './generate';

const ScInfo = styled.strong`
  margin-right: 12px;
`;

const ScInput = styled(Input)`
  margin-right: 12px;
  width: 100px;
`;

const ScError = styled.div`
  margin-top: 8px;
  word-break: break-word;
  ${mixinTextError}
`;

export default function Content(): JSX.Element {
  const {
    verifyDetail,
    convertedVerifyType
  } = useModelProps();

  const {
    data: {
      errorMessage,
      mainOrMpkAccountData
    },
    updateData
  } = useDialog<IRiskPromptResolveData, IDialogData>();
  const [stateVmfaCode, setStateVmfaCode] = useState<string>('');
  const [stateInputFocused, setStateInputFocused] = useState<boolean>(false);
  const [stateWindvaneNoHandler, setStateWindvaneNoHandler] = useState<boolean>(false);

  const labelWidth = ALIYUN_APP_VERSION ? 125 : 160; // APP 内的 label 长度要短
  const handleInputChange = (value: string): void => {
    const trimmedValue = value.trim();

    setStateVmfaCode(trimmedValue);
    updateData({
      errorMessage: '', // 清空错误
      primaryButtonDisabled: !REG_MFA_CODE.test(trimmedValue),
      mainOrMpkAccountData: {
        code: trimmedValue,
        requestId: mainOrMpkAccountData?.requestId || ''
      }
    });
  };
  const buttonAfterCodeInput = useMemo((): JSX.Element | null => {
    if (convertedVerifyType !== EVerifyType.MFA) {
      return <Generate />;
    }
    
    // 只有支持 windvane 的虚拟 MFA 验证才展示【查看安全码】按钮
    if (windVaneAvailable && !stateWindvaneNoHandler) {
      return <Button {...{
        theme: ButtonTheme.TEXT_PRIMARY,
        label: intl('op:view_security_code'),
        onClick: () => {
          getVmfaCodeFromWindVane().then(vmfaCode => {
            const trimmedCode = vmfaCode.trim();
  
            if (trimmedCode) {
              setStateVmfaCode(trimmedCode);
              updateData({
                errorMessage: '', // 清空错误
                primaryButtonDisabled: false,
                mainOrMpkAccountData: {
                  code: trimmedCode,
                  requestId: mainOrMpkAccountData?.requestId || ''
                }
              });
            }
          }).catch((error: IWindvaneError) => {
            // 如果调用接口后，返回的错误 Code 的含义是没有对应处理模块，那么展示对应的提示，且隐藏【查看安全码】按钮
            if (error.code === WINDVANE_ERROR_CODE.NO_HANDLER) {
              setStateWindvaneNoHandler(true);
              updateData({
                errorMessage: intl('message:update_app_tip_{url}!html', {
                  url: ALIYUN_APP_DOWNLOAD_URL
                })
              });
            }
          }).finally(() => {
            setStateInputFocused(false);
          });
        }
      }} />;
    }

    return null;
  }, [convertedVerifyType, stateWindvaneNoHandler, mainOrMpkAccountData?.requestId, updateData]);
  
  return <Form {...{
    items: [{
      labelWidth,
      label: intlVerifyLabel(convertedVerifyType),
      content: <Flex align="center">
        {verifyDetail ? <ScInfo>{verifyDetail}</ScInfo> : null}
        <Button {...{
          spm: `set-${convertedVerifyType}`,
          theme: ButtonTheme.TEXT_PRIMARY,
          label: intlVerifySetting(convertedVerifyType),
          href: DEFAULT_RISK_CONFIG.URL_SETTINGS
        }} />
      </Flex>
    }, {
      labelWidth,
      label: intl('attr:code'),
      content: <div>
        <Flex align="center">
          <ScInput {...{
            value: stateVmfaCode,
            focused: stateInputFocused,
            onChange: handleInputChange
          }} />
          {buttonAfterCodeInput}
        </Flex>
        <ScError>{errorMessage}</ScError>
      </div>
    }]
  }} />;
}
