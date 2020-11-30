import React from 'react';
import {
  storiesOf
} from '@storybook/react';
import {
  withKnobs
} from '@storybook/addon-knobs';

import DemoDefault from './demo-default';
import DemoHook from './demo-hook';

storiesOf('@alicloud/console-base-rc-dropdown', module)
    .addDecorator(withKnobs)
    .add('default', () => <DemoDefault />)
    .add('hook', () => <DemoHook />);
