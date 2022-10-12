import React from 'react';
import {
  storiesOf
} from '@storybook/react';

import pkgInfo from '../package.json';

import DemoDefault from './demo-default';

storiesOf(pkgInfo.name, module)
    .add('default', () => <DemoDefault />);
