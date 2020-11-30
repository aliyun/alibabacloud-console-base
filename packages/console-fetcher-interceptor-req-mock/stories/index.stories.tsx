import React from 'react';
import {
  storiesOf
} from '@storybook/react';
import {
  withKnobs
} from '@storybook/addon-knobs';

import DemoDefault from './demo-default';
import DemoOne from './demo-one';

storiesOf('@alicloud/console-fetcher-interceptor-req-mock', module)
    .addDecorator(withKnobs)
    .add('default', () => <DemoDefault />)
    .add('one', () => <DemoOne />);
