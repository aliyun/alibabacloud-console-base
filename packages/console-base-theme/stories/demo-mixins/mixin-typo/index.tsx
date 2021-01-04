import React from 'react';

import {
  H1
} from '@alicloud/demo-rc-elements';

import MixinElements from '../../rc/mixin-elements';

const REG = /^mixinTypo(\w+)$/;

export default function MixinTypo(): JSX.Element {
  return <>
    <H1>mixins for typo</H1>
    <MixinElements reg={REG} />
  </>;
}
