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

/**
 * RGB - BG → RGBA
 */
export default function RgbToRgba(): JSX.Element {
  const [stateRgb, setStateRgb] = useState<IRgba>({
    r: 160,
    g: 20,
    b: 160
  });
  const extractedRgbaColor = useMemo((): string => {
    const {
      r,
      g,
      b
    } = stateRgb;
    const a = 1 - Math.min(r, g, b) / 255;
    
    return rgba(255 + Math.round((r - 255) / a), 255 + Math.round((g - 255) / a), 255 + Math.round((b - 255) / a), a);
  }, [stateRgb]);
  
  return <>
    <H2>RGB - #fff → rgba</H2>
    <P>设：纯色 <code>R + G + B</code> - 背景色 <code>#fff</code>（任意色有些难...），提取透明色 <code>r + g + b + a</code>。</P>
    <ScColorMix>
      <InputColor value={stateRgb} onChange={setStateRgb} />
      <ScSign>-</ScSign>
      <ScSign>#fff</ScSign>
      <ScSign>=</ScSign>
      <ScSign style={{
        backgroundColor: extractedRgbaColor
      }}>{extractedRgbaColor.toString()}</ScSign>
    </ScColorMix>
  </>;
}

