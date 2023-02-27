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
  getWindow
} from '@alicloud/sandbox-escape';

import {
  IDialogData,
  IRiskPromptResolveData
} from '../../types';
import {
  REG_NEW_MAIN_VERIFY_URL
} from '../../const';
import AltWrap from '../../rc/alt-wrap';
import intl from '../../intl';
import {
  isValidJson,
  getNewMainAccountRiskInfo
} from '../../utils';
import {
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
  const {
    data: {
      apiErrorMessage,
      mainAccountRiskInfo
    },
    lock,
    close,
    updateData
  } = useDialog<IRiskPromptResolveData, IDialogData>();

  const {
    verifyType, verifyUrl
  } = getNewMainAccountRiskInfo(mainAccountRiskInfo);

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
        apiErrorMessage: (error as Error).message || ''
      });
    }
  }, [lock, close, updateData, verifyType]);

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
        <ScError>{apiErrorMessage}</ScError>
      </>;
    }
  
    return <AltWrap content={apiErrorMessage || intl('message:new_main_verify_error')} />;
  }, [apiErrorMessage, verifyUrl]);

  // VerifyUrl 不合法时需要上报埋点
  useEffect(() => {
    if (!verifyUrl || !REG_NEW_MAIN_VERIFY_URL.test(verifyUrl)) {
      slsInvalidVerifyUrl({
        verifyUrl
      });
    }
  }, [verifyUrl]);

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