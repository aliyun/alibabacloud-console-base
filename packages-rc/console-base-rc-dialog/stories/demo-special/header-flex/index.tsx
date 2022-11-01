import React from 'react';

import {
  H1,
  Button
} from '@alicloud/demo-rc-elements';

import {
  open,
  slide,
  slideUp
} from '../../../src';

const props = {
  title: <>
    <Button>111</Button>
    <Button>222</Button>
  </>,
  content: 'content does not matter',
  buttons: ['好的', '不好']
};

export default function HeaderFlex(): JSX.Element {
  return <>
    <H1>Header 自带 flex</H1>
    <Button {...{
      onClick: () => open(props)
    }}>open</Button>
    <Button {...{
      onClick: () => slide(props)
    }}>slide</Button>
    <Button {...{
      onClick: () => slideUp(props)
    }}>slideUp</Button>
  </>;
}
