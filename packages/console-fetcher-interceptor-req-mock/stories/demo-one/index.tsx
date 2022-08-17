import React, {
  useState,
  useCallback
} from 'react';

import {
  P,
  Button,
  PrePromise
} from '@alicloud/demo-rc-elements';

import PkgInfo from '../pkg-info';
import {
  fetcher1
} from '../fetcher';

function callOpenApi(): Promise<unknown> {
  return fetcher1.post('/data/api.json', {
    product: 'ram',
    action: 'ListAccessKeys'
  });
}

function callInnerApi(): Promise<unknown> {
  return fetcher1.post('/data/innerApi.json', {
    product: 'ram',
    action: 'ListGroups'
  });
}

function callContainerApi(): Promise<unknown> {
  return fetcher1.post('/data/call.json', {
    product: 'ram',
    action: 'ListRoles'
  });
}

function callMultiOpenApi(): Promise<unknown> {
  return fetcher1.post('/data/multiApi.json', {
    product: 'ram',
    actions: JSON.stringify([{
      action: 'ListAccessKeys'
    }, {
      action: 'ListGroups'
    }, {
      action: 'ListRoles'
    }])
  });
}

function callMultiInnerApi(): Promise<unknown> {
  return fetcher1.post('/data/multiInnerApi.json', {
    product: 'ram',
    actions: JSON.stringify([{
      action: 'ListAccessKeys'
    }, {
      action: 'ListGroups'
    }, {
      action: 'ListRoles'
    }])
  });
}

function callMultiContainerApi(): Promise<unknown> {
  return fetcher1.post('/data/multiCall.json', {
    product: 'ram',
    actions: JSON.stringify([{
      action: 'ListAccessKeys'
    }, {
      action: 'ListGroups'
    }, {
      action: 'ListRoles'
    }])
  });
}

export default function DemoOne(): JSX.Element {
  const [statePromise, setStatePromise] = useState<Promise<unknown> | null>(null);
  const handleCallOpenApi = useCallback(() => setStatePromise(callOpenApi()), [setStatePromise]);
  const handleCallInnerApi = useCallback(() => setStatePromise(callInnerApi()), [setStatePromise]);
  const handleCallContainerApi = useCallback(() => setStatePromise(callContainerApi()), [setStatePromise]);
  const handleCallMultiOpenApi = useCallback(() => setStatePromise(callMultiOpenApi()), [setStatePromise]);
  const handleCallMultiInnerApi = useCallback(() => setStatePromise(callMultiInnerApi()), [setStatePromise]);
  const handleCallMultiContainerApi = useCallback(() => setStatePromise(callMultiContainerApi()), [setStatePromise]);
  
  return <>
    <PkgInfo />
    <P>请看 console</P>
    <Button onClick={handleCallOpenApi}>callOpenApi</Button>
    <Button onClick={handleCallInnerApi}>callInnerApi</Button>
    <Button onClick={handleCallContainerApi}>callContainerApi</Button>
    <Button onClick={handleCallMultiOpenApi}>callMultiOpenApi</Button>
    <Button onClick={handleCallMultiInnerApi}>callMultiInnerApi</Button>
    <Button onClick={handleCallMultiContainerApi}>callMultiContainerApi</Button>
    <PrePromise promise={statePromise} />
  </>;
}
