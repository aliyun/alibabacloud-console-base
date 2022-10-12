import React from 'react';

import {
  H1,
  Button,
  LongArticle
} from '@alicloud/demo-rc-elements';

import {
  open,
  slide,
  slideUp
} from '../../../src';

const dialogPorps = {
  title: 'Long Content',
  content: <LongArticle />,
  buttons: ['关闭']
};

function openLongContent(): void {
  open(dialogPorps);
}

function slideLongContent(): void {
  slide(dialogPorps);
}

function slideUpLongContent(): void {
  slideUp(dialogPorps);
}

export default function LongContent(): JSX.Element {
  return <>
    <H1>内容比较长的场景</H1>
    <Button onClick={openLongContent}>open</Button>
    <Button onClick={slideLongContent}>slide</Button>
    <Button onClick={slideUpLongContent}>slideUp</Button>
  </>;
}
