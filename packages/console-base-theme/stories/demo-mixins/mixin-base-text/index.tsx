import React from 'react';

import {
  H1
} from '@alicloud/demo-rc-elements';

import MixinElements from '../../rc/mixin-elements';

const REG = /^mixinText(\w+)$/;

export default function MixinBaseText(): JSX.Element {
  return <>
    <H1>mixins for text</H1>
    <MixinElements reg={REG} />
  </>;
}
