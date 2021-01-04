import React, {
  useState,
  useCallback
} from 'react';
import {
  createGlobalStyle
} from 'styled-components';

import {
  H1,
  Button
} from '@alicloud/demo-rc-elements';

import {
  ThemeStyleLight,
  ThemeStyleDark
} from '../../src';

import MixinBaseText from './mixin-base-text';
import MixinBaseBg from './mixin-base-bg';
import MixinBaseBorder from './mixin-base-border';
import MixinBaseShadow from './mixin-base-shadow';
import MixinLink from './mixin-link';
import MixinInput from './mixin-input';
import MixinButton from './mixin-button';

const BgDark = createGlobalStyle`
  body {
    background-color: #000;
  }
`;

export default function DemoMixins(): JSX.Element {
  const [stateDarkMode, setStateDarkMode] = useState<boolean>(true);
  const handleSetModeLight = useCallback(() => setStateDarkMode(false), []);
  const handleSetModeDark = useCallback(() => setStateDarkMode(true), []);
  
  return <>
    <H1>mixins tests</H1>
    <Button onClick={handleSetModeLight}>light</Button>
    <Button onClick={handleSetModeDark}>dark</Button>
    {stateDarkMode ? <>
      <BgDark />
      <ThemeStyleDark />
    </> : <ThemeStyleLight />}
    <MixinBaseText />
    <MixinBaseBg />
    <MixinBaseBorder />
    <MixinBaseShadow />
    <MixinLink />
    <MixinInput />
    <MixinButton />
  </>;
}

export {
  MixinBaseText,
  MixinBaseBg,
  MixinBaseBorder,
  MixinBaseShadow,
  MixinLink,
  MixinInput,
  MixinButton
};
