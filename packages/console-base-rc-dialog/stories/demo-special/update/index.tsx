import React from 'react';

import {
  H1,
  Button,
  CodeViewerTs
} from '@alicloud/demo-rc-elements';

import {
  open,
  slide
} from '../../../src';

import Content from './content';

const props = {
  title: '内容通过 update 更新 Dialog',
  content: <Content />,
  buttons: ['好的', '不好']
};
const snippet = `const {
  update
} = useDialog();

update(...);
`;

export default function Update(): JSX.Element {
  return <>
    <H1>content 通过 useDialog 提供的 update 方法，可以修改除了 content 之外的所有 props</H1>
    <CodeViewerTs>{snippet}</CodeViewerTs>
    <Button {...{
      onClick: () => open(props)
    }}>open</Button>
    <Button {...{
      onClick: () => slide(props)
    }}>slide</Button>
  </>;
}
