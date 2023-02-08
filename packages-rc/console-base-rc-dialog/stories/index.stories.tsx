import React from 'react';
import {
  storiesOf
} from '@storybook/react';
import {
  withKnobs
} from '@storybook/addon-knobs';

import pkgInfo from '../package.json';

import DemoDefault from './demo-default';
import DemoAlt from './demo-alt';
import DemoSpecial from './demo-special';

storiesOf(pkgInfo.name, module)
    .addDecorator(withKnobs)
    .add('default', () => <DemoDefault />)
    .add('alt', () => <DemoAlt />)
    .add('special cases', () => <DemoSpecial />);
