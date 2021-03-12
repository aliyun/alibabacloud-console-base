import React from 'react';
import {
  storiesOf
} from '@storybook/react';
import {
  withKnobs
} from '@storybook/addon-knobs';

import pkgInfo from '../package.json';

import DemoDefault from './demo-default';
import DemoCacheAndMerger from './demo-cache-and-merger';
import DemoOpenApi from './demo-open-api';

storiesOf(pkgInfo.name, module)
    .addDecorator(withKnobs)
    .add('default', () => <DemoDefault />)
    .add('cache and merger', () => <DemoCacheAndMerger />)
    .add('ram open api', () => <DemoOpenApi />);
