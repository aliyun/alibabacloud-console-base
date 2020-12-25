import React, {
  useCallback
} from 'react';
import styled from 'styled-components';

import {
  typo
} from '@alicloud/console-base-theme';
import {
  useDialog
} from '@alicloud/console-base-rc-dialog';
import Button, {
  EButtonPreset
} from '@alicloud/console-base-rc-button';
import Input from '@alicloud/console-base-rc-input';
import Flex from '@alicloud/console-base-rc-flex';

import {
  IRiskVerifyDialogData
} from '../../../../types';
import {
  EVerifyType
} from '../../../../const';
import intl from '../../../../intl';
import Form from '../../../../rc/form';
import {
  intlVerifyLabel,
  intlVerifySetting
} from '../../../intl-verify';

import Generate from './generate';

const ScInfo = styled.strong`
  margin-right: 12px;
  font-family: Arial, sans-serif;
`;

const ScInput = styled(Input)`
  margin-right: 12px;
  width: 100px;
`;

const ScError = styled.div`
  margin-top: 8px;
  ${typo.textError};
`;

export default function Content(): JSX.Element {
  const {
    data: {
      riskInfo: {
        type,
        detail
      },
      riskConfig: {
        URL_SETTINGS
      },
      errorMessage
    },
    updateData
  } = useDialog<void, IRiskVerifyDialogData>();
  const handleInputChange = useCallback(value => {
    updateData({
      code: value.trim(),
      errorMessage: '' // 清空错误
    });
  }, [updateData]);
  
  return <Form {...{
    items: [{
      label: intlVerifyLabel(type),
      content: <Flex align="center">
        {detail ? <ScInfo>{detail}</ScInfo> : null}
        <Button {...{
          spm: `set-${type}`,
          preset: EButtonPreset.LINK,
          label: intlVerifySetting(type),
          href: URL_SETTINGS
        }} />
      </Flex>
    }, {
      label: intl('attr:code'),
      content: <div>
        <Flex align="center">
          <ScInput {...{
            onChange: handleInputChange
          }} />
          {type === EVerifyType.MFA ? null : <Generate />}
        </Flex>
        <ScError>{errorMessage}</ScError>
      </div>
    }]
  }} />;
}
