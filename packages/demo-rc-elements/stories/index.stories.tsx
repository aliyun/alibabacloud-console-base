import React from 'react';
import {
  storiesOf
} from '@storybook/react';
import {
  withKnobs
} from '@storybook/addon-knobs';

import pkgInfo from '../package.json';

import DemoDefault from './demo-default';
import DemoInput from './demo-input';
import DemoExtended from './demo-extended';
import DemoSpecial from './demo-special';
import DemoSyntaxHighlighter from './demo-syntax-highlighter';

storiesOf(pkgInfo.name, module)
    .addDecorator(withKnobs)
    .add('default', () => <DemoDefault />)
    .add('input', () => <DemoInput />)
    .add('extended', () => <DemoExtended />)
    .add('syntax-highlighter', () => <DemoSyntaxHighlighter />)
    .add('special', () => <DemoSpecial />);
