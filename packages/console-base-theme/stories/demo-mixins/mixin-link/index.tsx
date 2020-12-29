import React from 'react';
import styled from 'styled-components';

import {
  H2,
  List
} from '@alicloud/demo-rc-elements';

import {
  mixinLinkDisabled,
  mixinLinkPrimary,
  mixinLinkSecondary,
  mixinLinkTertiary,
  mixinLinkBrand,
  mixinLinkBrandSecondary
} from '../../../src';

const ScMixinLinkDisabled = styled.a`
  ${mixinLinkDisabled}
`;
const ScMixinLinkPrimary = styled.a`
  ${mixinLinkPrimary}
`;
const ScMixinLinkSecondary = styled.a`
  ${mixinLinkSecondary}
`;
const ScMixinLinkTertiary = styled.a`
  ${mixinLinkTertiary}
`;
const ScMixinLinkBrand = styled.a`
  ${mixinLinkBrand}
`;
const ScMixinLinkBrandSecondary = styled.a`
  ${mixinLinkBrandSecondary}
`;

export default function MixinLink(): JSX.Element {
  return <>
    <H2>mixins for link</H2>
    <List>
      <ScMixinLinkDisabled href="//www.aliyun.com" target="_blank">mixinLinkDisabled</ScMixinLinkDisabled>
      <ScMixinLinkPrimary href="//www.aliyun.com" target="_blank">mixinLinkPrimary</ScMixinLinkPrimary>
      <ScMixinLinkSecondary href="//www.aliyun.com" target="_blank">mixinLinkSecondary</ScMixinLinkSecondary>
      <ScMixinLinkTertiary href="//www.aliyun.com" target="_blank">mixinLinkTertiary</ScMixinLinkTertiary>
      <ScMixinLinkBrand href="//www.aliyun.com" target="_blank">mixinLinkBrand</ScMixinLinkBrand>
      <ScMixinLinkBrandSecondary href="//www.aliyun.com" target="_blank">mixinLinkBrandSecondary</ScMixinLinkBrandSecondary>
    </List>
  </>;
}
