import React from 'react';

import {
  PreJson
} from '@alicloud/demo-rc-elements';
import ONE_CONF from '@alicloud/console-one-config';

export default function DemoDefault(): JSX.Element {
  return <PreJson {...{
    caption: 'ONE_CONF',
    o: ONE_CONF
  }} />;
}
