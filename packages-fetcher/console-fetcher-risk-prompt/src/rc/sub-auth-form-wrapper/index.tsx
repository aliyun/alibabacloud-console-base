import React from 'react';
import styled from 'styled-components';

import {
  EAccountType,
  ESubVerificationDeviceType
} from '@alicloud/console-fetcher-risk-data';
import {
  mixinBorderSecondary
} from '@alicloud/console-base-theme';

import DeviceIcon from '../device-icon';

type TPropsWithChildren<T> = T & {
  children: JSX.Element;
}

type TSubAuthFormWrapperProps = {
  accountType: EAccountType.SUB;
  deviceType: ESubVerificationDeviceType;
} | {
  accountType: EAccountType.MAIN;
}

const ScFormWrapper = styled.div`
  position: relative;
  padding: 12px 12px 12px 0;
  overflow: hidden;
  ${mixinBorderSecondary}
`;

export default function SubAuthFormWrapper(props: TPropsWithChildren<TSubAuthFormWrapperProps>): JSX.Element {
  const {
    accountType, children
  } = props;

  if (accountType === EAccountType.MAIN) {
    return children;
  }

  return <ScFormWrapper>
    {children}
    <DeviceIcon deviceType={props.deviceType} />
  </ScFormWrapper>;
}

export type {
  TSubAuthFormWrapperProps
};