import React from 'react';
import styled from 'styled-components';

import {
  H2
} from '@alicloud/demo-rc-elements';

import {
  mixinInputReset,
  mixinInputText,
  mixinInputBg,
  mixinInputBorder,
  mixinInputTextHover,
  mixinInputBgHover,
  mixinInputBorderHover,
  mixinInputTextFocus,
  mixinInputBgFocus,
  mixinInputBorderFocus,
  mixinInputBorderFocusBrand,
  mixinInputTextDisabled,
  mixinInputBgDisabled,
  mixinInputBorderDisabled,
  mixinShadowLDown
} from '../../../src';

const ScInputBase = styled.input`
  margin: 4px;
  padding: 8px;
  width: 320px;
  ${mixinInputReset}
`;

const ScInput = styled(ScInputBase)`
  ${mixinInputText}
  ${mixinInputBg}
  ${mixinInputBorder}
  
  &:hover {
    ${mixinInputTextHover}
    ${mixinInputBgHover}
    ${mixinInputBorderHover}
  }
  
  &:focus {
    ${mixinInputTextFocus}
    ${mixinInputBgFocus}
    ${mixinInputBorderFocus}
  }
  
  &:hover,
  &:focus {
    ${mixinShadowLDown}
  }
`;

const ScInputAlt = styled(ScInput)`
  &:focus {
    ${mixinInputBorderFocusBrand}
  }
`;

const ScInputDisabled = styled(ScInputBase)`
  cursor: default;
  ${mixinInputTextDisabled}
  ${mixinInputBgDisabled}
  ${mixinInputBorderDisabled}
`;

export default function MixinInput(): JSX.Element {
  return <>
    <H2>mixins for input</H2>
    <ScInput placeholder="accent input" />
    <ScInputAlt placeholder="brand input" />
    <ScInputDisabled disabled />
  </>;
}
