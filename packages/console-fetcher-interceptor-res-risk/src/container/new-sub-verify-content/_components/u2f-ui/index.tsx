import React, {
  useMemo
} from 'react';
import styled from 'styled-components';

import {
  mixinTextError
} from '@alicloud/console-base-theme';

import {
  EIconType
} from '../../../../const';
import intl from '../../../../intl';
import getU2FStateMessage from '../../../../util/common-utils/get-u2f-state-message';
import U2FMessage from '../u2f-message';

const ScError = styled.div`
  ${mixinTextError};
`;

interface IProps {
  u2fSupported: boolean;
  getU2fKey: boolean;
  content: string;
  errorMessage: string;
}

export default function U2fUi({
  u2fSupported,
  getU2fKey,
  content,
  errorMessage
}: IProps): JSX.Element {
  const {
    u2fNotSupportedMsg
  } = getU2FStateMessage;

  const getU2fMessage = useMemo((): JSX.Element => {
    if (getU2fKey) {
      return <U2FMessage {...{
        iconType: EIconType.notice,
        message: intl('message:u2f_bind_get_key')
      }} />;
    }

    return <U2FMessage {...{
      iconType: EIconType.success,
      message: intl('message:u2f_bind_get_key_success')
    }} />;
  }, [getU2fKey]);

  const bottomMessage = useMemo((): JSX.Element | null => {
    if (!u2fSupported) {
      return null;
    }

    if (errorMessage) {
      return <ScError>
        {errorMessage}
      </ScError>;
    }

    return getU2fMessage;
  }, [u2fSupported, errorMessage, getU2fMessage]);

  return <>
    {!u2fSupported ? <U2FMessage {...{
      iconType: EIconType.error,
      message: u2fNotSupportedMsg
    }} /> : null}
    {content}
    {bottomMessage}
  </>;
}
