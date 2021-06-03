import React from 'react';

import {
  H1,
  H2,
  Flex100HBF,
  LongArticle
} from '../../src';

export default function DemoSpecial(): JSX.Element {
  return <>
    <H1>特殊用途</H1>
    <H2>LongArticle - 为了撑高</H2>
    <LongArticle />
    <H2>Flex100HBF - 占满高度的「头-身-尾」组件</H2>
    <Flex100HBF />
  </>;
}
