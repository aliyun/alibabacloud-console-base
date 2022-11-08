import React, {
  useMemo,
  useEffect,
  useCallback
} from 'react';
import styled from 'styled-components';

import {
  mixinTextError
} from '@alicloud/console-base-theme';
import {
  useDialog
} from '@alicloud/console-base-rc-dialog';

import {
  IDialogData,
  IRiskPromptResolveData
} from '../../../../types';
import {
  useModelProps
} from '../../../../model';
import AltWrap from '../../../../rc/alt-wrap';
import intl from '../../../../intl';
import {
  isValidJson
} from '../../../../utils';

interface IJson {
  type?: string;
  ivToken?: string;
}

const ScError = styled.div`
  margin-top: 8px;
  ${mixinTextError}
`;

export default function NewMainRiskContent(): JSX.Element {
  const {
    data: {
      errorMessage,
      newMainAccountRiskInfo
    },
    lock,
    close,
    updateData
  } = useDialog<IRiskPromptResolveData, IDialogData>();

  const {
    verifyType
  } = useModelProps();

  const showIframe = !!(newMainAccountRiskInfo?.verifyUrl || '');
  
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

        const verifyParams = {
          verifyType,
          verifyCode: ivToken
        };

        close(verifyParams);
      }
    } catch (error) {
      updateData({
        errorMessage: (error as Error).message || ''
      });
    }
  }, [lock, close, updateData, verifyType]);

  const newMainRiskContent = useMemo((): JSX.Element => {
    if (showIframe) {
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
          title: intl('title:main'),
          src: newMainAccountRiskInfo?.verifyUrl || ''
        }} />
        <ScError>
          {errorMessage}
        </ScError>
      </>;
    }
  
    return <AltWrap content={errorMessage || intl('message:new_main_verify_error')} />;
  }, [showIframe, errorMessage, newMainAccountRiskInfo?.verifyUrl]);

  useEffect(() => {
    window.addEventListener('message', getValidateToken);

    return () => {
      window.removeEventListener('message', getValidateToken);
    };
  }, [updateData, getValidateToken]);

  return newMainRiskContent;
}