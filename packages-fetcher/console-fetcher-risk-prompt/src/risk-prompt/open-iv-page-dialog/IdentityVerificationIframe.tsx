import React, {
  useRef,
  useState,
  useCallback,
  useEffect
} from 'react';

import {
  FetcherError
} from '@alicloud/fetcher';
import {
  useDialog,
  AltWrap
} from '@alicloud/console-base-rc-dialog';
import CONF_ENV from '@alicloud/console-base-conf-env';
import {
  getWindow
} from '@alicloud/sandbox-escape';
import CONF_PRODUCT_ID from '@alicloud/console-base-conf-product-id';
import {
  getProductId
} from '@alicloud/console-base-global';

import {
  IRiskPromptResolveData,
  TReRequestWithVerifyResult
} from '../../types';
import {
  EAccountType,
  EIconType,
  ESlsResultType
} from '../../enum';
import {
  CLIENT_TYPE
} from '../../const';
import Message from '../../rc/message';
import intl from '../../intl';
import {
  slsReRequestWithVerifyResult,
  slsIdentityVerificationTimeout,
  slsIdentityVerificationResultReceived
} from '../../sls';
import {
  getRiskSlsErrorCommonPayload
} from '../../util';

import {
  EIvMessageType,
  IIvPageDialogData,
  TMessageFromIdentityVerificationPage
} from './types';

interface IIdentityVerificationIframeProps {
  isMpk: boolean;
  accountType?: EAccountType;
  identityVerificationUrl: string;
  reRequestWithVerifyResult?: TReRequestWithVerifyResult;
}

type TIvLoadState = 'loading' | 'success' | 'timeout';

// 风控参数 - ticketType
const TICKET_TYPE = ((): string => {
  const forService = CONF_ENV.DOMAIN_IS_4SERVICE;

  return forService ? 'mini' : '';
})();

// 身份验证 iframe 的默认高度
const IFRAME_DEFAULT_HEIGHT = 180;

// 保证在沙箱中也能正常监听到 Iframe 抛出的事件
const realWindow = getWindow();

// 触发风控的 Product
const product = getProductId() || CONF_PRODUCT_ID;

export default function IdentityVerificationIframe({
  isMpk,
  accountType,
  identityVerificationUrl,
  reRequestWithVerifyResult
}: IIdentityVerificationIframeProps): JSX.Element {
  const {
    close,
    lock,
    unlock,
    updateData
  } = useDialog<IRiskPromptResolveData, IIvPageDialogData>();
  const cachedIframeHeightRef = useRef<number>(200);
  const stateIvLoadStateRef = useRef<TIvLoadState>('loading');
  const iframeRef = useRef<HTMLIFrameElement | null>(null);

  const [stateIframeHeight, setStateIframeHeight] = useState<number>(IFRAME_DEFAULT_HEIGHT);
  const [stateIvLoadState, setStateIvLoadState] = useState<TIvLoadState>('loading');

  const getMessageFromIdentityVerificationPage = useCallback(async (event: MessageEvent<TMessageFromIdentityVerificationPage>) => {
    try {
      const {
        data
      } = event;

      switch (data.type) {
        // 核身成功
        case EIvMessageType.IV_SUCCESS: {
          const verifyResult = data.data;

          slsIdentityVerificationResultReceived({
            isMpk,
            accountType,
            verifyType: verifyResult.verifyType,
            isValidVerifyCode: Boolean(verifyResult.verifyCode)
          });

          if (verifyResult.verifyCode) {
            if (!reRequestWithVerifyResult) {
              close(verifyResult);
            } else {
              lock(true);
              
              // riskPrompt 的参数中包含 reRequestWithVerifyResult
              try {
                const reRequestResponse = await reRequestWithVerifyResult(verifyResult);
                
                // 埋点 - 重新请求被风控接口成功
                slsReRequestWithVerifyResult({
                  isMpk,
                  accountType,
                  apiResponseType: ESlsResultType.SUCCESS
                });

                close({
                  ...verifyResult,
                  reRequestResponse
                });
              } catch (error) {
                const {
                  code, message, requestId
                } = error as FetcherError;

                // 埋点 - 重新请求被风控接口失败
                const {
                  slsResultType
                } = getRiskSlsErrorCommonPayload(error as FetcherError);

                slsReRequestWithVerifyResult({
                  isMpk,
                  accountType,
                  requestId,
                  errorCode: code,
                  errorMessage: message,
                  apiResponseType: slsResultType
                });

                // 如果重新调用被风控的接口时，因风控 IvToken 验证不通过报错（子账号或者 MPK 账号，主账号的 Havana 页面只能消费一次，无法重复消费）
                // 此时风控弹窗不关闭，并且把错误信息和错误码 postMessage 到风控页面中，风控页面将展示错误信息，并且用户可以直接重试
                if (
                  slsResultType === ESlsResultType.FAIL
                  && iframeRef.current
                  && (accountType === EAccountType.SUB || isMpk)
                ) {
                  iframeRef.current.contentWindow?.postMessage({
                    type: 'verify_error_from_risk_prompt',
                    verifyType: verifyResult.verifyType,
                    errorCode: code,
                    errorMessage: message
                  }, '*');
                } else {
                  close(error as FetcherError, true);

                  throw error;
                }
              } finally {
                unlock();
              }
            }
          }

          break;
        }
        // 核身取消
        case EIvMessageType.IV_CANCELLED: {
          // 核身取消关闭页面
          close();

          break;
        }
        // 核身页面加载成功
        case EIvMessageType.IV_LOAD_SUCCESS: {
          updateData({
            ivPageLoadSuccess: true
          });
          setStateIvLoadState('success');
          stateIvLoadStateRef.current = 'success';

          break;
        }
        // 风控 UI 高度发生变化时，会通过 message 通知 riskPrompt，从而能设置 iframe 的高度
        case EIvMessageType.IV_CONTAINER_HEIGHT_MEASURED: {
          const ivContainerHeight = data.data.height;

          if (typeof ivContainerHeight === 'number' && ivContainerHeight > IFRAME_DEFAULT_HEIGHT) {
            setStateIframeHeight(ivContainerHeight);
            cachedIframeHeightRef.current = ivContainerHeight;
          }

          break;
        }
        // 核身 UI 中错误提示 Message 的出现会导致 UI 的高度发生变化
        // 因此监听 Message 出现/隐藏的消息，并对高度做调整
        case EIvMessageType.IV_MESSAGE_ELEMENT_TOGGLE: {
          const {
            visible
          } = data.data;

          setStateIframeHeight(prevHeight => {
            // cachedIframeHeightRef.current 存储的核身 UI 没有 Message 显示的高度
            if (visible && prevHeight <= cachedIframeHeightRef.current) {
              return prevHeight + 50;
            }

            if (!visible && prevHeight >= cachedIframeHeightRef.current) {
              return prevHeight - 50;
            }

            return prevHeight;
          });

          break;
        }
        // 子账号风控：是否有多种核身方式
        // 有多种核身方式时，
        case EIvMessageType.IV_MULTIPLE_VALIDATORS: {
          updateData({
            ...data.data
          });

          break;
        }
        default: {
          // 对非定义内的消息不做处理
        }
      }
    } catch (error) {
      // 
    }
  }, [accountType, isMpk, lock, updateData, unlock, close, reRequestWithVerifyResult]);

  // 健康检查，如果 25S 后都没接收到核身页面对外通知的消息，可以任务风控页面加载发生错误，需要重试
  useEffect(() => {
    const timeOut = setTimeout(() => {
      // 如果 25 秒后都没收到核身页面对外抛出的 identity_verification_load_success 消息，可以理解为渲染失败
      if (stateIvLoadStateRef.current === 'loading') {
        stateIvLoadStateRef.current = 'timeout';
        setStateIvLoadState('timeout');

        // 埋点
        slsIdentityVerificationTimeout({
          isMpk,
          accountType,
          verifyUrl: identityVerificationUrl
        });
      }
    }, 25000);

    return () => {
      clearTimeout(timeOut);
    };
  }, [isMpk, accountType, identityVerificationUrl]);

  // 监听 iframe 消息
  useEffect(() => {
    realWindow.addEventListener('message', getMessageFromIdentityVerificationPage);

    return () => {
      realWindow.removeEventListener('message', getMessageFromIdentityVerificationPage);
    };
  }, [getMessageFromIdentityVerificationPage]);

  return (
    <div>
      {stateIvLoadState === 'loading' &&
        <div style={{
          height: '160px'
        }}>
          <Message iconType={EIconType.LOADING} message={intl('message:wait:iv:page:message')} />
        </div>}
      {stateIvLoadState === 'timeout' &&
        <div style={{
          height: '160px',
          display: 'flex',
          alignItems: 'center'
        }}>
          <AltWrap content={intl('message:new_main_verify_error')} />
        </div>}
      <iframe
        ref={iframeRef}
        title={intl('title:default')}
        // identityVerificationUrl 的格式是 identity.aliyun.com/iv/riskRequestId=xxx
        // 其他附加参数：source、ticketType、clientType、product
        src={`${identityVerificationUrl}&source=riskPrompt&ticketType=${TICKET_TYPE}&clientType=${CLIENT_TYPE}&product=${product}`}
        // 允许在 iframe 中使用 u2f
        allow="publickey-credentials-get *"
        style={{
          border: 'none',
          width: '98%',
          height: stateIvLoadState === 'success' ? stateIframeHeight : 0,
          // 健康检查过程中，需要隐藏 iframe（不能通过 display: none 来控制）
          visibility: stateIvLoadState === 'success' ? 'visible' : 'hidden'
        }} />
    </div>
  );
}

export type {
  IIdentityVerificationIframeProps
};