import React, {
  useState,
  useMemo
} from 'react';
import {
  parseToHsl,
  hsl,
  readableColor
} from 'polished';
import styled from 'styled-components';

import {
  H1,
  P,
  List,
  RadioGroup
} from '@alicloud/demo-rc-elements';

interface IMatrixItem {
  i: number;
  j: number;
  value: string;
}

const ScColorGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(36, 1fr);
  gap: 4px;
`;

const ScColorBlock = styled.div`
  border: 1px solid transparent;
  border-radius: 2px;
  height: 32px;
  line-height: 32px;
  cursor: default;
  text-align: center;
`;

const HUE_LEVELS: number[] = [];
const SATURATION_LEVELS: number[] = [];
const LIGHTNESS_LEVELS: number[] = [];

for (let i = 10; i <= 360; i += 10) { // 色相每 10º 为一个节点，基础色相共 36 阶
  HUE_LEVELS.push(i);
}

for (let i = 0; i <= 100; i += 10) { // 饱和度范围 0%-100%，每 10% 递增，共 11 阶
  SATURATION_LEVELS.push(i);
}

for (let i = 19; i <= 89; i += 10) { // 明度起始为 19%，以 10% 递增，最高明度 89%，共 8 阶
  LIGHTNESS_LEVELS.push(i);
}

HUE_LEVELS.sort((v1, v2) => v1 - v2);
SATURATION_LEVELS.sort((v1, v2) => v2 - v1); // 倒序
LIGHTNESS_LEVELS.sort((v1, v2) => v2 - v1); // 倒序

function getFloatString(n: number): string {
  const p = Math.round(n * 100);
  
  if (p === 100) {
    return '1';
  }
  
  if (p === 0) {
    return '0';
  }
  
  return `${p}%`;
}

function CurrentSelectedColor({
  color
}: {
  color: string;
}): JSX.Element {
  let colorDisplay: string;
  
  if (color) {
    const {
      hue,
      saturation,
      lightness
    } = parseToHsl(color);
    
    colorDisplay = `RGB = ${color} - hsl(${Math.round(hue)}, ${getFloatString(saturation)}, ${getFloatString(lightness)})`;
  } else {
    colorDisplay = 'n/a';
  }
  
  return <P>当前选中：<strong style={{
    color: color ? readableColor(color) : '#ccc',
    backgroundColor: color || undefined
  }}>{colorDisplay}</strong></P>;
}

/**
 * 参考：https://done.alibaba-inc.com/file/npMfevdSB70K/nraBotmHA4yO7cyO/preview?categoryId=bqTzhdSLVELC
 * 
 * 控制台色阶基于 HSL 色彩模型 - 色相 Hue / 饱和度 Saturation / 明度 Lightness
 * - Hue 360º 色相，默认每 10º 为一个节点，基础色相共 36 阶
 * - Saturation 饱和度范围 0%-100%，默认所有颜色 100% 饱和度
 * - Lightness 明度参数 0%-100%，起始为 19%，以 10% 递增，最高明度 89%，共 8 阶
 * 
 * 控制台核心色：
 * - HEX = #0064c8
 * - RGB = 0/100/200
 * - HSL = 210º/100%/39%
 * - HSV = 210º/100º/78º
 * - CMYK = 1.00/0.50/0.00/0.22
 */
export default function DemoColorScale(): JSX.Element {
  const [stateSaturation, setStateSaturation] = useState<number>(100);
  const [stateSelectedColor, setStateSelectedColor] = useState<string>('');
  const colorMatrix: IMatrixItem[] = useMemo((): IMatrixItem[] => {
    const arr: IMatrixItem[] = [];
    
    LIGHTNESS_LEVELS.forEach((l, i) => {
      arr.push(...HUE_LEVELS.map((h, j) => ({
        i: i + 1,
        j: j + 1,
        value: hsl(h, stateSaturation * 0.01, l * 0.01)
      })));
    });
    
    return arr;
  }, [stateSaturation]);

  return <>
    <H1>控制台色盘</H1>
    <P>参考：<a href="https://done.alibaba-inc.com/file/npMfevdSB70K/nraBotmHA4yO7cyO/preview?categoryId=bqTzhdSLVELC">XConsole 色盘设计</a>。控制台色阶基于 HSL 色彩模型 - 色相 Hue / 饱和度 Saturation / 明度 Lightness：</P>
    <List>
      <><em>Hue</em> 360º 色相，默认每 10º 为一个节点，基础色相共 36 阶</>
      <><em>Saturation</em> 饱和度范围 0%-100%，默认所有颜色 100% 饱和度</>
      <><em>Lightness</em> 明度参数 0%-100%，起始为 19%，以 10% 递增，最高明度 89%，共 8 阶</>
    </List>
    <RadioGroup<number> {...{
      label: '饱和度（Saturation）',
      value: stateSaturation,
      items: SATURATION_LEVELS.map(value => ({
        label: `${value}%`,
        value
      })),
      onChange: setStateSaturation
    }} />
    <CurrentSelectedColor color={stateSelectedColor} />
    <ScColorGrid>
      {colorMatrix.map(({
        i,
        j,
        value
      }) => <ScColorBlock {...{
        key: `${i}-${j}-${stateSaturation}`,
        title: `${value} - (${i}, ${j})`,
        style: {
          color: readableColor(value),
          backgroundColor: value
        },
        onClick: () => setStateSelectedColor(value)
      }}>{stateSelectedColor === value ? '★' : null}</ScColorBlock>)}
    </ScColorGrid>
  </>;
}

