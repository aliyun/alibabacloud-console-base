import React from 'react';

import {
  H1,
  P,
  Button
} from '@alicloud/demo-rc-elements';

import {
  fetcher1
} from '../fetcher';

function callOpenApi(): void {
  fetcher1.post('/data/api.json', {
    product: 'ram',
    action: 'ListAccessKeys'
  }).then(console.info, console.error);
}

function callInnerApi(): void {
  fetcher1.post('/data/innerApi.json', {
    product: 'ram',
    action: 'ListGroups'
  }).then(console.info, console.error);
}

function callContainerApi(): void {
  fetcher1.post('/data/call.json', {
    product: 'ram',
    action: 'ListRoles'
  }).then(console.info, console.error);
}

function callMultiOpenApi(): void {
  fetcher1.post('/data/multiApi.json', {
    product: 'ram',
    actions: JSON.stringify([{
      action: 'ListAccessKeys'
    }, {
      action: 'ListGroups'
    }, {
      action: 'ListRoles'
    }])
  }).then(console.info, console.error);
}

function callMultiInnerApi(): void {
  fetcher1.post('/data/multiInnerApi.json', {
    product: 'ram',
    actions: JSON.stringify([{
      action: 'ListAccessKeys'
    }, {
      action: 'ListGroups'
    }, {
      action: 'ListRoles'
    }])
  }).then(console.info, console.error);
}

function callMultiContainerApi(): void {
  fetcher1.post('/data/multiCall.json', {
    product: 'ram',
    actions: JSON.stringify([{
      action: 'ListAccessKeys'
    }, {
      action: 'ListGroups'
    }, {
      action: 'ListRoles'
    }])
  }).then(console.info, console.error);
}


export default function DemoOne(): JSX.Element {
  return <>
    <H1>利用 mocks.alibaba-inc.com 对 OneConsole 接口进行 mock</H1>
    <P>请看 console</P>
    <Button onClick={callOpenApi}>callOpenApi</Button>
    <Button onClick={callInnerApi}>callInnerApi</Button>
    <Button onClick={callContainerApi}>callContainerApi</Button>
    <Button onClick={callMultiOpenApi}>callMultiOpenApi</Button>
    <Button onClick={callMultiInnerApi}>callMultiInnerApi</Button>
    <Button onClick={callMultiContainerApi}>callMultiContainerApi</Button>
  </>;
}
