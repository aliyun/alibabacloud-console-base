import React from 'react';
import {
  storiesOf
} from '@storybook/react';
import {
  withKnobs
} from '@storybook/addon-knobs';

import DemoDefault from './demo-default';

storiesOf('@alicloud/fetcher-fetch', module)
    .addDecorator(withKnobs)
    .add('default', () => <DemoDefault />);
