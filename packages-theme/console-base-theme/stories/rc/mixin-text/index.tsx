import React from 'react';

import MixinElements from '../_mixin-elements';

const REG = /^mixinText(\w+)$/;

export default function MixinText(): JSX.Element {
  return <MixinElements reg={REG} />;
}
