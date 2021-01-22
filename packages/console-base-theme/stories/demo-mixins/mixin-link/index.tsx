import React from 'react';
import styled from 'styled-components';

import {
  H1,
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
    <H1>mixins for link</H1>
    <List>
      <ScMixinLinkDisabled href="//www.aliyun.com" target="_blank">disabled</ScMixinLinkDisabled>
      <ScMixinLinkPrimary href="//www.aliyun.com" target="_blank">primary</ScMixinLinkPrimary>
      <ScMixinLinkSecondary href="//www.aliyun.com" target="_blank">secondary</ScMixinLinkSecondary>
      <ScMixinLinkTertiary href="//www.aliyun.com" target="_blank">tertiary</ScMixinLinkTertiary>
      <ScMixinLinkBrand href="//www.aliyun.com" target="_blank">brand</ScMixinLinkBrand>
      <ScMixinLinkBrandSecondary href="//www.aliyun.com" target="_blank">brand-secondary</ScMixinLinkBrandSecondary>
    </List>
  </>;
}
