import React from 'react';
import {
  storiesOf
} from '@storybook/react';
import {
  withKnobs
} from '@storybook/addon-knobs';

import pkgInfo from '../package.json';

import DemoDefault from './demo-default';
import DemoJson from './demo-json';
import DemoHtml from './demo-html';
import DemoCss from './demo-css';
import DemoYaml from './demo-yaml';
import DemoMarkdown from './demo-markdown';

storiesOf(pkgInfo.name, module)
    .addDecorator(withKnobs)
    .add('default', () => <DemoDefault />)
    .add('json', () => <DemoJson />)
    .add('html', () => <DemoHtml />)
    .add('css', () => <DemoCss />)
    .add('yaml', () => <DemoYaml />)
    .add('markdown', () => <DemoMarkdown />);
