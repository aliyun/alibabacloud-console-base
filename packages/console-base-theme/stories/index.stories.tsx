import React from 'react';
import {
  storiesOf
} from '@storybook/react';
import {
  withKnobs
} from '@storybook/addon-knobs';

import pkgInfo from '../package.json';

import DemoDefault from './demo-default';
import DemoColorScale from './demo-color-scale';
import DemoColorConversion from './demo-color-conversion';
import DemoMixins from './demo-mixins';

storiesOf(pkgInfo.name, module)
    .addDecorator(withKnobs)
    .add('default', () => <DemoDefault />)
    .add('color-scale', () => <DemoColorScale />)
    .add('color-conversion', () => <DemoColorConversion />)
    .add('mixins', () => <DemoMixins />);
