import React from 'react';

import MixinElements from '../_mixin-elements';

const REG = /^mixinTypo(\w+)$/;

export default function MixinTypo(): JSX.Element {
  return <MixinElements reg={REG} />;
}
