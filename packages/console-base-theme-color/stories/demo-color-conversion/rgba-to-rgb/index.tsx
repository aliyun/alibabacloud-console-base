import React, {
  useState,
  useMemo
} from 'react';
import {
  rgb
} from 'polished';
import styled from 'styled-components';

import {
  H2,
  P,
  List
} from '@alicloud/demo-rc-elements';

import InputColor, {
  IRgba
} from '../_input-color';

const ScColorMix = styled.div`
  display: flex;
  align-items: center;
`;

const ScSign = styled.div`
  padding: 8px;
  color: #999;
`;

/**
 * RGB + BG → RGBA
 */
export default function RgbaToRgb(): JSX.Element {
  const [stateRgba, setStateRgba] = useState<IRgba>({
    r: 160,
    g: 20,
    b: 160,
    a: 0.2
  });
  const [stateBG, setStateBG] = useState<IRgba>({
    r: 255,
    g: 255,
    b: 255,
    a: 1
  });
  const mixedColor = useMemo((): string => {
    const {
      r,
      g,
      b,
      a = 0
    } = stateRgba;
    const {
      r: R,
      g: G,
      b: B
    } = stateBG;
    
    return rgb(Math.round((1 - a) * R + a * r), Math.round((1 - a) * G + a * g), Math.round((1 - a) * B + a * b));
  }, [stateRgba, stateBG]);
  
  return <>
    <H2>rgba + background(RbGbBb) → RGB</H2>
    <P>参考 <a href="http://marcodiiga.github.io/rgba-to-rgb-conversion" target="_blank" rel="noopener noreferrer">rgba-to-rgb-conversion</a>。</P>
    <P>设：透明色 <code>r + g + b + a</code> + 背景色 <code>Rb + Gb + Bb</code>，混合后的纯色 <code>R + G + B</code> 如下：</P>
    <List>
      <code>R = (1 - a) * Rb + a * r</code>
      <code>G = (1 - a) * Gb + a * g</code>
      <code>B = (1 - a) * Bb + a * b</code>
    </List>
    <ScColorMix>
      <InputColor value={stateRgba} onChange={setStateRgba} rgbaMode />
      <ScSign>+</ScSign>
      <InputColor value={stateBG} onChange={setStateBG} />
      <ScSign>=</ScSign>
      <ScSign style={{
        backgroundColor: mixedColor
      }}>{mixedColor.toString()}</ScSign>
    </ScColorMix>
  </>;
}
