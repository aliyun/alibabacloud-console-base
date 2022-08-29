import React, {
  useState,
  useMemo,
  useCallback
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
  IWindvaneError,
  IDialogDataOldMainAccountRisk
} from '../../types';
import {
  ALIYUN_APP_VERSION,
  WINDVANE_ERROR_CODE,
  ALIYUN_APP_DOWNLOAD_URL
} from '../../const';
import {
  EVerifyType
} from '../../enum';
import intl from '../../intl';
import Form from '../../rc/form';
import {
  intlVerifyLabel,
  intlVerifySetting,
  windVaneAvailable,
  getVmfaCodeFromWindVane
} from '../../util';

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
    data: {
      riskInfo: {
        type,
        detail
      },
      riskConfig: {
        URL_SETTINGS
      },
      errorMessage
    },
    updateData
  } = useDialog<void, IDialogDataOldMainAccountRisk>();
  
  const [stateVmfaCode, setStateVmfaCode] = useState<string>('');
  const [stateInputFocused, setStateInputFocused] = useState<boolean>(false);
  const [stateWindvaneNoHandler, setStateWindvaneNoHandler] = useState<boolean>(false);

  const labelWidth = ALIYUN_APP_VERSION ? 125 : 160; // APP 内的 label 长度要短
  const handleInputChange = useCallback(value => {
    const trimmedValue = value.trim();

    setStateVmfaCode(trimmedValue);
    updateData({
      code: trimmedValue,
      errorMessage: '' // 清空错误
    });
  }, [updateData]);
  const buttonAfterCodeInput = useMemo((): JSX.Element | null => {
    if (type !== EVerifyType.MFA) {
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
                code: trimmedCode,
                errorMessage: '' // 清空错误
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
  }, [type, stateWindvaneNoHandler, updateData]);
  
  return <Form {...{
    items: [{
      labelWidth,
      label: intlVerifyLabel(type),
      content: <Flex align="center">
        {detail ? <ScInfo>{detail}</ScInfo> : null}
        <Button {...{
          spm: `set-${type}`,
          theme: ButtonTheme.TEXT_PRIMARY,
          label: intlVerifySetting(type),
          href: URL_SETTINGS
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
