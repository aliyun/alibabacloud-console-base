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
      // event.data 可能是 object 或者 Json String, 这会导致 decodeURIComponent(event.data) 的结果是 [object, object]，从而导致 JSON.parse 报错
      const json: IJson = typeof (event.data) === 'object' ? event.data : JSON.parse(decodeURIComponent(event.data));
      const {
        ivToken
      } = json;

      if (json.type === 'iframevalid' && ivToken) {
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
            minHeight: 400
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
  }, [stateShowIframe, errorMessage, mainRiskInfo.verifyUrl]);

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