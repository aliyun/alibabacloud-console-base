import React, {
  useCallback,
  useEffect
} from 'react';

import {
  useDialog
} from '@alicloud/console-base-rc-dialog';

import {
  INewMainAccountRisk
} from '../../types';
import intl from '../../intl';

interface IJson {
  type?: string;
  ivToken?: string;
}

export default function Content(): JSX.Element {
  const {
    data: {
      mainRiskInfo: {
        verifyUrl
      }
    },
    updateData
  } = useDialog<void, INewMainAccountRisk>();

  const getValidateToken = useCallback((event: MessageEvent): void => {
    try {
      const json: IJson = JSON.parse(decodeURIComponent(event.data));

      if (json.type === 'iframevalid') {
        const {
          ivToken
        } = json;

        if (ivToken) {
          updateData({
            valideToken: ivToken,
            primaryButtonDisabled: false
          });
        }
      }
    } catch (error) {
      updateData({
        errorMessage: (error as Error).message || ''
      });
    }
  }, [updateData]);

  useEffect(() => {
    window.addEventListener('message', getValidateToken);

    return () => {
      window.removeEventListener('message', getValidateToken);
    };
  }, [getValidateToken]);

  return <iframe {...{
    style: {
      width: '100%',
      height: '100%'
    },
    title: intl('title:main'),
    src: verifyUrl
  }} />;
}