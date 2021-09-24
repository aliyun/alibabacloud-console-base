import React, {
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
  useDialog
} from '@alicloud/console-base-rc-dialog';

import {
  INewMainAccountRisk
} from '../../types';
import intl from '../../intl';

const ScError = styled.div`
  margin-top: 8px;
  ${mixinTextError}
`;

interface IJson {
  type?: string;
  ivToken?: string;
}

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

  const getValidateToken = useCallback((event: MessageEvent): void => {
    try {
      const json: IJson = JSON.parse(decodeURIComponent(event.data));
      const {
        ivToken
      } = json;

      if (json.type === 'iframevalid' && ivToken) {
        lock(true);

        const verifyResult = {
          ivToken
        };
        
        // 主应用
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
            updateData({
              errorMessage: intl('message:code_incorrect')
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

  useEffect(() => {
    window.addEventListener('message', getValidateToken);

    return () => {
      window.removeEventListener('message', getValidateToken);
    };
  }, [getValidateToken]);

  return <>
    <iframe {...{
      style: {
      // 宽度设定 100% 会有横向的滚动条
        width: '98%',
        minHeight: 300,
        paddingTop: 24
      },
      title: intl('title:main'),
      src: verifyUrl
    }} />
    <ScError>
      {errorMessage}
    </ScError>
  </>;
}