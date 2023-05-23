import React from 'react';
import {
  storiesOf
} from '@storybook/react';
import {
  withKnobs
} from '@storybook/addon-knobs';

import pkgInfo from '../package.json';

import DemoDefault from './demo-default';
import DemoForm from './demo-form';
import DemoFormControl from './demo-form-control';
import DemoContainer from './demo-container';
import DemoSoloPane from './demo-solo-pane';
import DemoTable from './demo-table';
import DemoExtended from './demo-extended';
import DemoCodeViewer from './demo-code-viewer';
import DemoSpecial from './demo-special';
import DemoInputJsonObject from './demo-input-json-object';
import DemoComponentTesting from './demo-component-testing';

storiesOf(pkgInfo.name, module)
    .addDecorator(withKnobs)
    .add('default', () => <DemoDefault />)
    .add('form', () => <DemoForm />)
    .add('form-control', () => <DemoFormControl />)
    .add('container', () => <DemoContainer />)
    .add('solo-pane', () => <DemoSoloPane />)
    .add('table', () => <DemoTable />)
    .add('extended', () => <DemoExtended />)
    .add('code-viewer', () => <DemoCodeViewer />)
    .add('special', () => <DemoSpecial />)
    .add('input-json-object', () => <DemoInputJsonObject />)
    .add('component-testing', () => <DemoComponentTesting />);
