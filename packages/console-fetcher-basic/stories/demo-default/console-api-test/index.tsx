import React from 'react';

import {
  Button
} from '@alicloud/demo-rc-elements';
import {
  DemoTipOfFecs
} from '@alicloud/console-base-demo-helpers';

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

function testCallOpenApi(): void {
  callOpenApi('slb', 'DescribeRegions', {
    p1: 'param1',
    p2: 2
  }, {
    body: {
      region: 'cn-hangzhou-wuchang'
    }
  }).catch(console.info);
}

function testCallInnerApi(): void {
  callInnerApi(FAKE_PRODUCT, FAKE_ACTION, {
    p1: 'param1',
    p2: 2
  }, {
    body: {
      region: 'cn-hangzhou-wuchang'
    }
  });
}

function testCallContainerApi(): void {
  callContainerApi(FAKE_PRODUCT, FAKE_ACTION, {
    p1: 'param1',
    p2: 2
  }, {
    body: {
      region: 'cn-hangzhou-wuchang'
    }
  }).catch(console.info);
}

export default function ConsoleApiTest(): JSX.Element {
  return <>
    <DemoTipOfFecs />
    <Button onClick={testCallOpenApi}>callOpenApi</Button>
    <Button onClick={testCallInnerApi}>callInnerApi</Button>
    <Button onClick={testCallContainerApi}>callContainerApi</Button>
  </>;
}
