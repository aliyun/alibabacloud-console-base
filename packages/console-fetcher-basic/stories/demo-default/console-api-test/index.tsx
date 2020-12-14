import React, {
  useState,
  useCallback
} from 'react';

import {
  Button,
  PrePromise
} from '@alicloud/demo-rc-elements';
import {
  FetcherDemoRcFecsTip
} from '@alicloud/fetcher-demo-helpers';

import {
  fetcher1
} from '../../fetcher';

const {
  callOpenApi,
  callInnerApi,
  callContainerApi
} = fetcher1;

const FAKE_PRODUCT = 'BOSHIT';
const FAKE_ACTION = 'FuckMe';

function testCallOpenApi(): Promise<unknown> {
  return callOpenApi('slb', 'DescribeRegions', {
    p1: 'param1',
    p2: 2
  }, {
    body: {
      region: 'cn-hangzhou-wuchang'
    }
  });
}

function testCallInnerApi(): Promise<unknown> {
  return callInnerApi(FAKE_PRODUCT, FAKE_ACTION, {
    p1: 'param1',
    p2: 2
  }, {
    body: {
      region: 'cn-hangzhou-wuchang'
    }
  });
}

function testCallContainerApi(): Promise<unknown> {
  return callContainerApi(FAKE_PRODUCT, FAKE_ACTION, {
    p1: 'param1',
    p2: 2
  }, {
    body: {
      region: 'cn-hangzhou-wuchang'
    }
  });
}

export default function ConsoleApiTest(): JSX.Element {
  const [statePromise, setStatePromise] = useState<Promise<unknown> | null>(null);
  const handleCallOpenApi = useCallback(() => setStatePromise(testCallOpenApi()), []);
  const handleCallInnerApi = useCallback(() => setStatePromise(testCallInnerApi()), []);
  const handleCallContainerApi = useCallback(() => setStatePromise(testCallContainerApi()), []);
  
  return <>
    <FetcherDemoRcFecsTip />
    <Button onClick={handleCallOpenApi}>callOpenApi</Button>
    <Button onClick={handleCallInnerApi}>callInnerApi</Button>
    <Button onClick={handleCallContainerApi}>callContainerApi</Button>
    <PrePromise promise={statePromise} />
  </>;
}
