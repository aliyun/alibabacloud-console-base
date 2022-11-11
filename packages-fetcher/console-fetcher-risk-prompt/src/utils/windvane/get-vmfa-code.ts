import {
  IWindvaneError
} from '../../types';
import {
  WINDVANE_ERROR_CODE,
  ALIYUN_APP_DOWNLOAD_URL
} from '../../const';
import intl from '../../intl';
import {
  slsGetVmfaCodeFromWindVane
} from '../../sls';

import _callAliyun from './_call-aliyun';

interface IGetVmfaCodeFromWindVaneProps {
  onSuccess: (vmfaCode: string) => void;
  onFail: (errorMessage: string) => void;
  onFinally: () => void;
}

interface IGetVmfaCodeResult {
  otpCode: string;
}

async function getVmfaCode(): Promise<string> {
  const result = await _callAliyun<IGetVmfaCodeResult>('getMFAOtpCode');

  return result.otpCode;
}

export default function getVmfaCodeFromWindVane({
  onFail,
  onSuccess,
  onFinally
}: IGetVmfaCodeFromWindVaneProps): void {
  getVmfaCode().then(vmfaCode => {
    const trimmedCode = vmfaCode.trim();

    if (trimmedCode) {
      onSuccess(trimmedCode);
    }

    slsGetVmfaCodeFromWindVane({
      slsResultType: 'success'
    });
  }).catch((error: IWindvaneError) => {
    slsGetVmfaCodeFromWindVane({
      errorCode: error.code,
      errorMessage: error.message,
      slsResultType: 'failure'
    });

    if (error.code === WINDVANE_ERROR_CODE.NO_HANDLER) {
      const errorMessage = intl('message:update_app_tip_{url}!html', {
        url: ALIYUN_APP_DOWNLOAD_URL
      });

      onFail(errorMessage);
    }
  }).finally(() => {
    onFinally();
  });
}