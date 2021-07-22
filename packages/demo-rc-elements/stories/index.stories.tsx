import React from 'react';
import {
  storiesOf
} from '@storybook/react';
import {
  withKnobs
} from '@storybook/addon-knobs';

import pkgInfo from '../package.json';

import DemoDefault from './demo-default';
import DemoFormControl from './demo-form-control';
import DemoExtended from './demo-extended';
import DemoCodeViewer from './demo-code-viewer';
import DemoSpecial from './demo-special';

storiesOf(pkgInfo.name, module)
    .addDecorator(withKnobs)
    .add('default', () => <DemoDefault />)
    .add('form-control', () => <DemoFormControl />)
    .add('extended', () => <DemoExtended />)
    .add('code-viewer', () => <DemoCodeViewer />)
    .add('special', () => <DemoSpecial />);
