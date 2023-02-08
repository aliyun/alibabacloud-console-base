import React, {
  useState,
  useMemo
} from 'react';
import {
  rgba
} from 'polished';
import styled from 'styled-components';

import {
  H2,
  P
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

function extractRgbaColorBasedOnWhite(r0: number, g0: number, b0: number): [number, number, number, number] {
  const a = 1 - Math.min(r0, g0, b0) / 255;
  const r = 255 - Math.round((255 - r0) / a);
  const g = 255 - Math.round((255 - g0) / a);
  const b = 255 - Math.round((255 - b0) / a);
  
  return [r, g, b, a];
}

function extractRgbaColorBasedOnBlack(r0: number, g0: number, b0: number): [number, number, number, number] {
  const a = 1 - Math.max(r0, g0, b0) / 255;
  const r = Math.min(Math.round(r0 / a), 255);
  const g = Math.min(Math.round(g0 / a), 255);
  const b = Math.min(Math.round(b0 / a), 255);
  
  return [r, g, b, a];
}

/**
 * RGB - BG → RGBA
 */
export default function RgbToRgba(): JSX.Element {
  const [stateRgb, setStateRgb] = useState<IRgba>({
    r: 160,
    g: 20,
    b: 160
  });
  const extractedRgbaColorBasedOnWhite = useMemo((): string => {
    const {
      r,
      g,
      b
    } = stateRgb;
    
    return rgba(...extractRgbaColorBasedOnWhite(r, g, b));
  }, [stateRgb]);
  const extractedRgbaColorBasedOnBlack = useMemo((): string => {
    const {
      r,
      g,
      b
    } = stateRgb;
    
    return rgba(...extractRgbaColorBasedOnBlack(r, g, b));
  }, [stateRgb]);
  
  return <>
    <H2>RGB - #fff/#000 → rgba</H2>
    <P>设：纯色 <code>R + G + B</code> - 背景色 <code>#fff</code>（任意色有些难...），提取透明色 <code>r + g + b + a</code>。</P>
    <ScColorMix>
      <InputColor value={stateRgb} onChange={setStateRgb} />
      <ScSign>-</ScSign>
      <ScSign>#fff</ScSign>
      <ScSign>=</ScSign>
      <ScSign style={{
        backgroundColor: extractedRgbaColorBasedOnWhite
      }}>{extractedRgbaColorBasedOnWhite.toString()}</ScSign>
    </ScColorMix>
    <ScColorMix style={{
      background: '#000'
    }}>
      <InputColor value={stateRgb} onChange={setStateRgb} />
      <ScSign>-</ScSign>
      <ScSign>#000</ScSign>
      <ScSign>=</ScSign>
      <ScSign style={{
        backgroundColor: extractedRgbaColorBasedOnBlack
      }}>{extractedRgbaColorBasedOnBlack.toString()}</ScSign>
    </ScColorMix>
  </>;
}
