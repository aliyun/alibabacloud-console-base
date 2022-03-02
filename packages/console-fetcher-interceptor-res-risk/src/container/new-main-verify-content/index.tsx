import React, {
  useState,
  useMemo,
  useCallback,
  useEffect
} from 'react';
import styled from 'styled-components';

import {
  FetcherError,
  canHaveBody,
  mergeConfig
} from '@alicloud/fetcher';
import {
  mixinTextError
} from '@alicloud/console-base-theme';
import {
  useDialog,
  AltWrap
} from '@alicloud/console-base-rc-dialog';

import {
  ESlsResultType
} from '../../const';
import {
  INewMainAccountRisk
} from '../../types';
import intl from '../../intl';
import isValidJson from '../../util/is-valid-json';
import {
  slsNewMainRisk
} from '../../util/sls';

interface IJson {
  type?: string;
  ivToken?: string;
}

const ScError = styled.div`
  margin-top: 8px;
  ${mixinTextError}
`;

export default function Content(): JSX.Element {
  const {
    data: {
      request,
      fetcherConfig,
      riskConfig,
      errorMessage,
      mainRiskInfo
    },
    lock,
    unlock,
    close,
    updateData
  } = useDialog<unknown, INewMainAccountRisk>();

  // 如果没有 verifyUrl 或者 verifyUrl 是空字符串，那么不展示 iframe
  const [stateShowIframe, setStateShowIframe] = useState<boolean>(!!(mainRiskInfo.verifyUrl));

  const getValidateToken = useCallback((event: MessageEvent): void => {
    try {
      // 为了防止 JSON.parse 报错，需要先判断 decodeURIComponent(event.data) 是不是合法的 JSON 字符串
      const json: IJson = isValidJson(decodeURIComponent(event.data)) ? JSON.parse(decodeURIComponent(event.data)) : event.data;
      const {
        type,
        ivToken
      } = json;

      if (type === 'iframevalid' && ivToken) {
        lock(true);

        const verifyResult = {
          verifyType: mainRiskInfo.verifyType || '',
          verifyCode: ivToken
        };
        
        request<unknown>(mergeConfig(fetcherConfig, canHaveBody(fetcherConfig) ? {
          body: verifyResult
        } : {
          params: verifyResult
        })).then(result => {
          unlock();

          slsNewMainRisk({
            ...mainRiskInfo,
            slsResultType: ESlsResultType.SUCCESS
          });

          close(result);
        }, (error: FetcherError) => {
          unlock();
          
          slsNewMainRisk({
            ...mainRiskInfo,
            slsResultType: ESlsResultType.FAIL,
            errorMessage: error.message,
            errorCode: error.code
          });

          if (error.code === riskConfig.CODE_INVALID_INPUT || error.code === riskConfig.CODE_NEED_VERIFY) {
            setStateShowIframe(false);
            updateData({
              errorMessage: intl('message:code_incorrect'),
              hasCancelButton: true
            });
          } else {
            close(error, true);
          }
        });
      }
    } catch (error) {
      const errMsg = (error as Error).message || '';

      slsNewMainRisk({
        ...mainRiskInfo,
        slsResultType: ESlsResultType.FAIL,
        errorMessage: errMsg
      });

      updateData({
        errorMessage: errMsg
      });
    }
  }, [mainRiskInfo, riskConfig, fetcherConfig, request, lock, unlock, close, updateData]);

  const newMainRiskContent = useMemo((): JSX.Element => {
    if (stateShowIframe) {
      return <>
        <iframe {...{
          style: {
          // 宽度设定 100% 会有横向的滚动条
            width: '98%',
            border: 0,
            paddingTop: 16,
            overflowY: 'auto',
            minHeight: mainRiskInfo.verifyType === 'ga' ? 400 : 240 // 虚拟 MFA 验证高度需要设置较高的高度
          },
          title: intl('title:main'),
          src: mainRiskInfo.verifyUrl
        }} />
        <ScError>
          {errorMessage}
        </ScError>
      </>;
    }
  
    return <AltWrap {...{
      type: 'alert',
      content: errorMessage || intl('message:new_main_verify_error')
    }} />;
  }, [stateShowIframe, errorMessage, mainRiskInfo.verifyUrl, mainRiskInfo.verifyType]);

  useEffect(() => {
    if (!mainRiskInfo.verifyUrl) {
      updateData({
        hasCancelButton: true
      });

      slsNewMainRisk({
        ...mainRiskInfo,
        slsResultType: ESlsResultType.FAIL
      });
    }

    window.addEventListener('message', getValidateToken);

    return () => {
      window.removeEventListener('message', getValidateToken);
    };
  }, [mainRiskInfo, updateData, getValidateToken]);

  return newMainRiskContent;
}