import React, {
  useMemo,
  useEffect,
  useCallback
} from 'react';
import styled from 'styled-components';

import {
  FetcherError
} from '@alicloud/fetcher';
import {
  mixinTextError
} from '@alicloud/console-base-theme';
import {
  useDialog
} from '@alicloud/console-base-rc-dialog';
import {
  getWindow
} from '@alicloud/sandbox-escape';

import {
  ESceneKey,
  ESlsResultType,
  EUnexpectedErrorType
} from '../../enum';
import {
  IDialogData,
  IRiskPromptResolveData
} from '../../types';
import {
  CODE_RISK_ERROR_ARRAY,
  REG_NEW_MAIN_VERIFY_URL
} from '../../const';
import {
  useModelProps
} from '../../model';
import AltWrap from '../../rc/alt-wrap';
import intl from '../../intl';
import {
  isValidJson,
  getNewMainAccountRiskInfo,
  getRiskSlsErrorCommonPayload
} from '../../util';
import {
  slsNewMainRisk,
  slsInvalidVerifyUrl
} from '../../sls';

interface IJson {
  type?: string;
  ivToken?: string;
}

const ScError = styled.div`
  margin-top: 8px;
  ${mixinTextError}
`;

export default function NewMainRiskContent(): JSX.Element {
  const contentContext = useDialog<IRiskPromptResolveData, IDialogData>();
  const {
    data: {
      errorMessageObject,
      mainAccountRiskInfo
    },
    lock,
    unlock,
    close,
    updateData
  } = contentContext;
  const {
    setRiskCanceledErrorProps,
    reRequestWithVerifyResult
  } = useModelProps();

  const {
    verifyType, verifyUrl
  } = getNewMainAccountRiskInfo(mainAccountRiskInfo);

  const getIvToken = useCallback((event: MessageEvent): string | undefined => {
    try {
      // 为了防止 JSON.parse 报错，需要先判断 decodeURIComponent(event.data) 是不是合法的 JSON 字符串
      const json: IJson = isValidJson(decodeURIComponent(event.data)) ? JSON.parse(decodeURIComponent(event.data)) : event.data;
      const {
        type,
        ivToken
      } = json;

      if (type === 'iframevalid' && ivToken) {
        return ivToken;
      }
    } catch (error) {
      updateData({
        errorMessageObject: {
          [ESceneKey.MAIN_ACCOUNT]: (error as Error).message
        }
      });
    }
  }, [updateData]);

  const getValidateToken = useCallback(async (event: MessageEvent): Promise<void> => {
    const ivToken = getIvToken(event);

    if (ivToken) {
      lock(true);

      const verifyResult = {
        verifyType,
        verifyCode: ivToken
      };

      if (!reRequestWithVerifyResult) {
        close(verifyResult);

        slsNewMainRisk({
          verifyUrl,
          type: verifyType,
          slsResultType: ESlsResultType.RISK_PROMPT_RESOLVE
        });
        
        return;
      }

      // riskPrompt 的参数中包含 reRequestWithVerifyResult
      try {
        const reRequestResponse = await reRequestWithVerifyResult(verifyResult);

        slsNewMainRisk({
          verifyUrl,
          type: verifyType,
          slsResultType: ESlsResultType.SUCCESS
        });

        close({
          ...verifyResult,
          reRequestResponse
        });
      } catch (error) {
        const {
          code
        } = error as FetcherError;

        slsNewMainRisk({
          verifyUrl,
          type: verifyType,
          ...getRiskSlsErrorCommonPayload(error as FetcherError)
        });

        if (code && CODE_RISK_ERROR_ARRAY.includes(code)) {
          updateData({
            errorMessageObject: {
              [ESceneKey.MAIN_ACCOUNT]: intl('message:code_incorrect')
            }
          });
        } else {
          close(error as FetcherError, true);

          throw error;
        }
      } finally {
        unlock();
      }
    }
  }, [lock, unlock, close, updateData, reRequestWithVerifyResult, getIvToken, verifyType, verifyUrl]);

  const newMainErrorMessage = errorMessageObject[ESceneKey.MAIN_ACCOUNT];

  const newMainRiskContent = useMemo((): JSX.Element => {
    if (verifyUrl) {
      return <>
        <iframe {...{
          style: {
            border: 0,
            paddingTop: 16,
            // 宽度设定 100% 会有横向的滚动条
            width: '98%',
            minHeight: 400,
            overflowY: 'auto'
          },
          title: intl('title:default'),
          src: verifyUrl
        }} />
        {newMainErrorMessage && <ScError>{newMainErrorMessage}</ScError>}
      </>;
    }
  
    return <AltWrap content={newMainErrorMessage || intl('message:new_main_verify_error')} />;
  }, [newMainErrorMessage, verifyUrl]);

  // VerifyUrl 不合法时需要上报埋点
  useEffect(() => {
    if (!verifyUrl || !REG_NEW_MAIN_VERIFY_URL.test(verifyUrl)) {
      slsInvalidVerifyUrl({
        verifyUrl
      });

      setRiskCanceledErrorProps({
        unexpectedValue: verifyUrl,
        unexpectedErrorType: EUnexpectedErrorType.INVALID_VERIFY_URL
      });
    }
  }, [verifyUrl, setRiskCanceledErrorProps]);

  useEffect(() => {
    // 保证在沙箱中也能正常监听到 Iframe 抛出的事件
    const realWindow = getWindow();

    realWindow.addEventListener('message', getValidateToken);

    return () => {
      realWindow.removeEventListener('message', getValidateToken);
    };
  }, [updateData, getValidateToken]);

  return newMainRiskContent;
}
