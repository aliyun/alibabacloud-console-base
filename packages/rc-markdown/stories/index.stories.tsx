import React from 'react';
import {
  storiesOf
} from '@storybook/react';
import {
  withKnobs
} from '@storybook/addon-knobs';

import pkgInfo from '../package.json';

import DemoDefault from './demo-default';
import DemoCommon from './demo-common';
import DemoGfm from './demo-gfm';
import DemoDirective from './demo-directive';
import DemoHeadings from './demo-headings';
import DemoExtraExtensions from './demo-extra-extensions';

storiesOf(pkgInfo.name, module)
    .addDecorator(withKnobs)
    .add('default', () => <DemoDefault />)
    .add('common', () => <DemoCommon />)
    .add('gfm', () => <DemoGfm />)
    .add('directive', () => <DemoDirective />)
    .add('headings', () => <DemoHeadings />)
    .add('extra-extensions', () => <DemoExtraExtensions />);
