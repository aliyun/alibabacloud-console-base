import React from 'react';
import {
  text,
  boolean,
  select
} from '@storybook/addon-knobs';

import {
  H1,
  P
} from '@alicloud/demo-rc-elements';

import RegionFlag from '../../src';

const REGION_IDS = [
  'cn-hangzhou',
  'cn-shanghai',
  'cn-qingdao',
  'cn-beijing',
  'cn-zhangjiakou',
  'cn-huhehaote',
  'cn-shenzhen',
  'cn-hongkong',
  'cn-chengdu',
  'ap-southeast-1',
  'ap-southeast-2',
  'ap-southeast-3',
  'ap-southeast-5',
  'ap-southeast-6',
  'ap-southeast-6a',
  'ap-southeast-6-oxs',
  'ap-northeast-1',
  'ap-northeast-2-pop',
  'ap-south-1',
  'eu-central-1',
  'eu-west-1',
  'us-west-1',
  'us-east-1',
  'me-east-1',
  'rsa-north-1-pop',
  'rus-whatever'
];

export default function DemoDefault(): JSX.Element {
  const regionId: string = select('align', REGION_IDS, 'cn-hangzhou');
  const custom = boolean('使用自定义', false);
  const regionId2 = text('regionId（自定义）', 'cn-hangzhou');
  
  return <>
    <H1>regions and flags</H1>
    {REGION_IDS.map(v => <span>
      <RegionFlag regionId={v} />
      {v}
    </span>)}
    <H1>custom the type yourself</H1>
    <P>用 knobs</P>
    <RegionFlag regionId={custom ? regionId2 : regionId} />
  </>;
}
