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
  INewMainAccountRisk
} from '../../types';
import intl from '../../intl';

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
      mainRiskInfo: {
        verifyUrl
      }
    },
    lock,
    unlock,
    close,
    updateData
  } = useDialog<unknown, INewMainAccountRisk>();

  // 如果没有 verifyUrl 或者 verifyUrl 是空字符串，那么不展示 iframe
  const [stateShowIframe, setStateShowIframe] = useState<boolean>(!!verifyUrl);

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
          verifyCode: ivToken
        };
        
        request<unknown>(mergeConfig(fetcherConfig, canHaveBody(fetcherConfig) ? {
          body: verifyResult
        } : {
          params: verifyResult
        })).then(result => {
          unlock();

          close(result);
        }, (error: FetcherError) => {
          unlock();

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
      updateData({
        errorMessage: (error as Error).message || ''
      });
    }
  }, [riskConfig, fetcherConfig, request, lock, unlock, close, updateData]);

  const newMainRiskContent = useMemo((): JSX.Element => {
    if (stateShowIframe) {
      return <>
        <iframe {...{
          style: {
          // 宽度设定 100% 会有横向的滚动条
            width: '98%',
            minHeight: 400,
            paddingTop: 16
          },
          title: intl('title:main'),
          src: verifyUrl
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
  }, [stateShowIframe, errorMessage, verifyUrl]);

  useEffect(() => {
    if (!verifyUrl) {
      updateData({
        hasCancelButton: true
      });
    }

    window.addEventListener('message', getValidateToken);

    return () => {
      window.removeEventListener('message', getValidateToken);
    };
  }, [verifyUrl, updateData, getValidateToken]);

  return newMainRiskContent;
}