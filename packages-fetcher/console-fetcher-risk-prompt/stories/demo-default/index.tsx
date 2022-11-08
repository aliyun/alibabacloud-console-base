import React, {
  useCallback
} from 'react';
import styled from 'styled-components';

import {
  H1,
  Button
} from '@alicloud/demo-rc-elements';

import fetcherRiskPrompt from '../../src';

const ScButton = styled(Button)`
  margin: 0 8px;
`;

export default function DemoDefault(): JSX.Element {
  const handleSubRiskBindPrompt = useCallback(async () => {
    const riskPromptResult = await fetcherRiskPrompt({
      riskResponse: {
        Validators: {
          Validator: [
            {
              VerifyDetail: 'false',
              VerifyType: 'ga'
            }
          ]
        },
        CodeType: 'ims_login_update',
        VerifyDetail: '137****2864',
        VerifyType: 'sms',
        AliyunIdkp: '1647******209939'
      }
    });

    console.log('sub_risk_bind_prompt_result', riskPromptResult);
  }, []);

  const handleSubRiskAuthPrompt = useCallback(async () => {
    const riskPromptResult = await fetcherRiskPrompt({
      riskResponse: {
        Validators: {
          Validator: [
            {
              VerifyDetail: 'true',
              VerifyType: 'ga'
            }
          ]
        },
        CodeType: 'ims_login_update',
        VerifyDetail: 'true',
        VerifyType: 'ga',
        AliyunIdkp: '229108930911534134'
      }
    });

    console.log('sub_risk_auth_prompt_result', riskPromptResult);
  }, []);

  const handleNewMainRiskPrompt = useCallback(async () => {
    const riskPromptResult = await fetcherRiskPrompt({
      riskResponse: {
        Validators: {
          Validator: [
            {
              VerifyDetail: '137****2864',
              VerifyType: 'sms'
            }
          ]
        },
        CodeType: 'ims_login_update',
        VerifyURL: 'https://passport.aliyun.com/iv/remote/mini/request.htm?havana_iv_token=CN-SPLIT-AQgAENgEIg1oYXZhbmFfYXBwX2l2MgEBONbV54_FMEABShAR0qsNkCtY7wP7stMXL_-jTRtx4ZsgjY_PXGCDhbvl6mq05lM',
        VerifyDetail: '137****2864',
        VerifyType: 'sms',
        AliyunIdkp: '1647******209939'
      }
    });

    console.log('sub_risk_bind_prompt_result', riskPromptResult);
  }, []);

  const handleOldMainRiskPrompt = useCallback(async () => {
    const riskPromptResult = await fetcherRiskPrompt({
      riskResponse: {
        verifyDetail: '137****2864',
        codeType: 'rg_authorization_add',
        verifyType: 'sms'
      }
    });

    console.log('new_main_prompt_result', riskPromptResult);
  }, []);

  return <>
    <H1>风控弹窗 console-base-risk-prompt</H1>
    <ScButton onClick={handleSubRiskBindPrompt}>子账号风控弹窗 - 绑定 MFA</ScButton>
    <ScButton onClick={handleSubRiskAuthPrompt}>子账号风控弹窗 - 验证 MFA</ScButton>
    <ScButton onClick={handleNewMainRiskPrompt}>新版主账号风控弹窗</ScButton>
    <ScButton onClick={handleOldMainRiskPrompt}>旧版主账号风控弹窗</ScButton>
  </>;
}