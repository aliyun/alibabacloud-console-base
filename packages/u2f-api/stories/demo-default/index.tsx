import React from 'react';

import {
  H1
} from '@alicloud/demo-rc-elements';

import u2fApi, {
  RegisterResponse
} from '../../src';

export default function DemoDefault(): JSX.Element {
  const handleClick = async (): Promise<RegisterResponse> => {
    const isSupported = await u2fApi.isSupported();

    console.log(`isSupported`, isSupported)

    const {
      version,
      clientData,
      registrationData
    }: RegisterResponse = await u2fApi.register({
      version: '',
      appId: '',
      challenge: ''
    });

    return {
      version,
      clientData,
      registrationData
    };
  };

  return <>
    <H1>天有不测风云</H1>
    <button onClick={handleClick}>
      绑定 U2F
    </button>
  </>;
}
