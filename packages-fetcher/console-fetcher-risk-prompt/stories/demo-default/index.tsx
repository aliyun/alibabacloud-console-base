/* eslint-disable no-console */
import React, {
  useState,
  useCallback
} from 'react';
import styled from 'styled-components';

import {
  H1,
  Button,
  RadioGroup,
  CheckboxGroup
} from '@alicloud/demo-rc-elements';
import {
  fetcherRiskData
} from '@alicloud/console-fetcher-risk-data';
import {
  fetcherDemoInterceptorMockSystemUrls
} from '@alicloud/fetcher-demo-helpers';
import ThemeSwitcher from '@alicloud/console-base-demo-helper-theme-switcher';

import riskPrompt, {
  type RiskValidator,
  type RiskParametersGetter
} from '../../src';

interface IRiskResponseData {
  AccountId: string;
  CodeType: string;
  VerifyType: string;
  VerifyDetail: boolean;
  RiskValidators: RiskValidator[];
}

const ScButton = styled(Button)`
  margin: 0 8px;
`;

fetcherRiskData.sealInterceptors(false, false);
fetcherRiskData.interceptRequest(fetcherDemoInterceptorMockSystemUrls);
fetcherRiskData.sealInterceptors(true, true);

export default function DemoDefault(): JSX.Element {
  const [stateMfaBound, setStateMfaBound] = useState<string>('false');
  const [stateSubValidators, setStateSubValidators] = useState<string[]>(['ga']);

  const handleSubRiskBindPrompt = useCallback(async () => {
    const riskPromptResult = await riskPrompt({
      riskResponse: {
        data: {
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
      }
    });

    console.log('sub_risk_bind_prompt_result', riskPromptResult);
  }, []);

  const handleSubRiskAuthPrompt = useCallback(async () => {
    const riskParametersGetter: RiskParametersGetter<IRiskResponseData> = riskResponse => {
      return {
        accountId: riskResponse.AccountId,
        validators: riskResponse.RiskValidators,
        codeType: riskResponse.CodeType,
        verifyType: riskResponse.VerifyType,
        verifyDetail: riskResponse.VerifyDetail
      };
    };

    const riskValidators = stateSubValidators.map(o => {
      if (o === 'ga') {
        return {
          VerifyDetail: stateMfaBound,
          VerifyType: 'ga'
        };
      }

      if (o === 'sms') {
        return {
          VerifyDetail: '86-13100000000',
          VerifyType: 'sms'
        };
      }

      return {
        VerifyDetail: 'zzz@a.com',
        VerifyType: 'email'
      };
    });

    const riskPromptResult = await riskPrompt<IRiskResponseData>({
      riskResponse: {
        RiskValidators: riskValidators,
        CodeType: 'ims_login_update',
        VerifyDetail: true,
        VerifyType: 'ga',
        AccountId: '12345****000'
      },
      riskParametersGetter
    });

    console.log('sub_risk_auth_prompt_result', riskPromptResult);
  }, [stateMfaBound, stateSubValidators]);

  const handleSubRiskInvalidPrompt = useCallback(async () => {
    const riskPromptResult = await riskPrompt({
      riskResponse: {
        Action: 'doubleConfirm',
        Message: '000您的账户出现异常，详情请联系客服。',
        Extend: {
          scriptId: '12133607'
        },
        Validators: {
          Validator: [
            {
              VerifyType: 'ga',
              VerifyDetail: 'true'
            }
          ]
        },
        CodeType: 'energyexpert_datareport_password_show',
        Tag: 'RR000',
        VerifyDetail: 'true',
        VerifyType: 'ga',
        AliyunIdkp: '226870982859590882',
        NoRisk: 'false'
      }
    });

    console.log('sub_risk_auth_prompt_result', riskPromptResult);
  }, []);

  const handleNewMainRiskPrompt = useCallback(async () => {
    const riskPromptResult = await riskPrompt({
      riskResponse: {
        data: {
          Validators: {
            Validator: [
              {
                VerifyDetail: '1234***0',
                VerifyType: 'sms'
              }
            ]
          },
          CodeType: 'ims_login_update',
          VerifyURL: 'https://passport.aliyun.com:4333/iv/remote/mini/request.htm?havana_iv_token=123456****0',
          VerifyDetail: '137****2864',
          VerifyType: 'sms',
          AliyunIdkp: '1234***0'
        }
      }
    });

    console.log('sub_risk_bind_prompt_result', riskPromptResult);
  }, []);

  const handleOldMainRiskPrompt = useCallback(async () => {
    const riskPromptResult = await riskPrompt({
      riskResponse: {
        data: {
          verifyDetail: '1234****0',
          codeType: 'rg_authorization_add',
          verifyType: 'ga'
        }
      }
    });

    console.log('new_main_prompt_result', riskPromptResult);
  }, []);

  const handleMpkRiskPrompt = useCallback(async () => {
    const riskPromptResult = await riskPrompt({
      riskResponse: {
        Action: 'doubleConfirm',
        Message: '000您的账户出现异常，详情请联系客服。',
        Extend: {
          consoleVersion: '3.0',
          accountType: 'subidkp'
        },
        CodeType: 'ims_login_update',
        VerifyURL: 'https://pre-identity.aliyun.com/iv/request.htm?riskRequestId=IMQnxY9uGSUjOFe3rNdI*XWyipMlPg9K_B2Finf*fYIvigKUMx1vGWrCENllN_b92Ue1hHTUtHI2mhfmkVnIK6Tyr65nEWYPZOrOYXLbJL1ipEjfiLx9XOe_nzwQA1akI4ORPe9lb_2xnVr7GktTFi7S4PC*49315QQI4N6RUMlN93jKhObnX0c8wmMrUSwEwpmUbb*kzWvtGZi_JxaSw29TFbiJIpj*xE9tyFF5eMGdmQO7aDg_KzPnsIYC8p*Ie8qDjE7Ue7v*TNJzTic7kMeiABsDksQrTqKuZihvomZA0exAEtyp5dYgtO542OYzNp*d8oyJC_8phEg5yjx5E4POKC9ioMpA22f*Y5vx7KLPMbKjWNOV6L_JNa5tOut6',
        Tag: 'RR000',
        AliyunIdkp: '257551444573436718',
        NoRisk: false
      }
    });
    // const riskPromptResult = await riskPrompt({
    //   riskResponse: {
    //     Extend: {
    //       isMpk: 'true',
    //       useOldVersion: 'false'
    //     },
    //     Validators: {
    //       Validator: [
    //         {
    //           VerifyDetail: '1234***0',
    //           VerifyType: 'sms'
    //         }
    //       ]
    //     },
    //     CodeType: 'ims_login_update',
    //     VerifyDetail: '137****2864',
    //     VerifyType: 'sms',
    //     AliyunIdkp: '1234***0'
    //   }
    // });

    console.log('new_main_prompt_result', riskPromptResult);
  }, []);

  return <>
    <H1>风控弹窗 console-base-risk-prompt</H1>
    <ThemeSwitcher />
    <CheckboxGroup {...{
      label: '子账号风控方式选择',
      items: [{
        label: 'ga',
        value: 'ga'
      }, {
        label: 'sms',
        value: 'sms'
      }, {
        label: 'email',
        value: 'email'
      }],
      onChange: o => {
        setStateSubValidators(o);
      }
    }} />
    <RadioGroup<string> {...{
      label: 'MFA 绑定状态选择',
      defaultValue: 'false',
      items: [{
        value: 'true',
        label: 'true'
      }, {
        value: 'false',
        label: 'false'
      }],
      onChange: o => {
        setStateMfaBound(o);
      }
    }} />
    <ScButton onClick={handleSubRiskBindPrompt}>子账号风控弹窗 - 绑定 MFA</ScButton>
    <ScButton onClick={handleSubRiskAuthPrompt}>子账号风控弹窗 - 验证 MFA（可通过配置项配置）</ScButton>
    <ScButton onClick={handleSubRiskInvalidPrompt}>子账号风控弹窗 - Invalid</ScButton>
    <ScButton onClick={handleNewMainRiskPrompt}>新版主账号风控弹窗</ScButton>
    <ScButton onClick={handleOldMainRiskPrompt}>旧版主账号风控弹窗</ScButton>
    <ScButton onClick={handleMpkRiskPrompt}>MPK账号风控弹窗</ScButton>
  </>;
}