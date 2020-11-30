import {
  ArmsWindowExtended
} from '@alicloud/console-base-common-typings';

interface ILogInfoBase {
  api: string;
  timeStarted?: number;
  traceId?: string;
}

interface ILogInfoError extends ILogInfoBase {
  code?: string;
  message: string;
}

interface ILogInfoSuccess extends ILogInfoBase {}

interface ILogInfo extends ILogInfoBase {
  success: boolean;
  code: string;
  message: string;
}

function log(info: ILogInfo): void {
  const bl = (window as ArmsWindowExtended).__bl;
  
  if (!bl?._conf?.disableHook) {
    return;
  }
  
  const {
    api,
    success,
    code,
    message,
    timeStarted,
    traceId
  } = info;
  const duration = timeStarted ? Date.now() - timeStarted : -1;
  
  if (bl.api) {
    bl.api(api, success, duration, code, message, timeStarted, traceId);
  } else {
    bl.pipe = bl.pipe || [];
    bl.pipe.push([
      'api',
      api,
      success,
      duration,
      code,
      message,
      timeStarted,
      traceId
    ]);
  }
}

export function logError({
  api,
  code = 'UNKNOWN',
  message = '',
  timeStarted,
  traceId
}: ILogInfoError): void {
  log({
    api,
    timeStarted,
    traceId,
    success: false,
    code,
    message
  });
}

export function logSuccess({
  api,
  timeStarted,
  traceId
}: ILogInfoSuccess): void {
  log({
    api,
    timeStarted,
    traceId,
    success: true,
    code: '200',
    message: ''
  });
}
