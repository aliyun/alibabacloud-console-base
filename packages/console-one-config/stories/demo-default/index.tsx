import React from 'react';

import {
  CleanJson
} from '@alicloud/demo-rc-elements';
import ONE_CONF from '@alicloud/console-one-config';

export default function DemoDefault(): JSX.Element {
  return <CleanJson {...{
    caption: 'ONE_CONF',
    o: ONE_CONF
  }} />;
}
