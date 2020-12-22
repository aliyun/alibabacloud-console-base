import React, {
  useState,
  useMemo,
  useCallback,
  useEffect
} from 'react';
import {
  parseToHsl,
  parseToRgb,
  hsl,
  readableColor
} from 'polished';
import styled, {
  createGlobalStyle
} from 'styled-components';

import {
  ChoiceItem,
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

const COLOR_CORE = '#0064c8';
const COLOR_CORE_HSL = parseToHsl(COLOR_CORE);

const GlobalStyleDarkBg = createGlobalStyle`
  :root {
    --shadow-color-block: 0 0 2px rgba(255, 255, 255, 0.4);
  }
  
  body {
    background: #000;
    color: #fff;
  }
`;

const ScColorGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(36, 1fr);
  gap: 6px;
`;

const ScColorBlock = styled.div<{
  selected: boolean;
}>`
  border: 2px solid transparent;
  border-radius: 2px;
  box-shadow: ${props => (props.selected ? 'var(--shadow-color-block, 0 0 2px rgba(0, 0, 0, 0.4))' : 'none')};
  height: 30px;
  line-height: 30px;
  cursor: default;
  text-align: center;
  transform: scale(${props => (props.selected ? 1.1 : 1)});
  transition: all ease 0.2s;
`;

const THEMES: ChoiceItem<boolean>[] = [{
  label: '是',
  value: true
}, {
  label: '否',
  value: false
}];
const HUE_LEVELS: number[] = ((): number[] => {
  const levels: number[] = [];
  
  for (let i = 10; i <= 360; i += 10) { // 色相每 10º 为一个节点，基础色相共 36 阶
    levels.push((i + COLOR_CORE_HSL.hue) % 360);
  }
  
  levels.sort((v1, v2) => v1 - v2);
  
  return levels;
})();
const SATURATION_LEVELS: number[] = ((): number[] => {
  const levels: number[] = [];
  
  for (let i = 0; i <= 100; i += 10) { // 饱和度范围 0%-100%，每 10% 递增，共 11 阶
    levels.push(i);
  }
  
  levels.sort((v1, v2) => v2 - v1); // 倒序
  
  return levels;
})();
const LIGHTNESS_LEVELS: number[] = ((): number[] => {
  const levels: number[] = [];
  
  for (let i = 0; i < 100; i += 10) { // 明度起始为 19%，以 10% 递增，最高明度 89%，共 8 阶
    levels.push((i + COLOR_CORE_HSL.lightness * 100) % 100);
  }
  
  levels.sort((v1, v2) => v2 - v1); // 倒序
  
  levels.splice(0, 1); // 去掉最小值（白色背景下几乎看不到）
  levels.splice(levels.length - 1, 1); // 去掉最大值（黑色背景下几乎看不到）
  
  return levels;
})();

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
    const {
      red,
      green,
      blue
    } = parseToRgb(color);
    
    colorDisplay = `${color} - rgb(${red}, ${green}, ${blue}) - hsl(${Math.round(hue)}, ${saturation}, ${lightness})`;
  } else {
    colorDisplay = 'n/a';
  }
  
  return <P>当前选中：<strong style={{
    color: color ? readableColor(color) : '#ccc',
    backgroundColor: color || undefined
  }}>{colorDisplay}</strong></P>;
}

function limitIndex(index: number, max: number): number {
  if (index > max) {
    return max;
  }
  
  if (index < 0) {
    return 0;
  }
  
  return index;
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
 * - HSL = ~210º/100%/~39%
 * - HSV = ~210º/100º/~78º
 * - CMYK = 1.00/0.50/0.00/0.22
 */
export default function DemoColorScale(): JSX.Element {
  const [stateThemeDark, setStateThemeDark] = useState<boolean>(false);
  const [stateSaturation, setStateSaturation] = useState<number>(100);
  const [[stateI, stateJ], setStateIJ] = useState<[number, number]>([-1, -1]);
  const handleKeydown = useCallback((e: KeyboardEvent): void => {
    if (stateI < 0 || stateJ < 0) {
      return;
    }
    
    let nextI = stateI;
    let nextJ = stateJ;
    
    switch (e.key) {
      case 'ArrowUp':
        nextI -= 1;
        
        break;
      case 'ArrowDown':
        nextI += 1;
        
        break;
      case 'ArrowLeft':
        nextJ -= 1;
        
        break;
      case 'ArrowRight':
        nextJ += 1;
        
        break;
      default:
        return;
    }
    
    nextI = limitIndex(nextI, LIGHTNESS_LEVELS.length - 1);
    nextJ = limitIndex(nextJ, HUE_LEVELS.length - 1);
    
    setStateIJ([nextI, nextJ]);
  }, [stateI, stateJ]);
  const colorMatrix: IMatrixItem[] = useMemo((): IMatrixItem[] => {
    const arr: IMatrixItem[] = [];
    
    LIGHTNESS_LEVELS.forEach((l, i) => {
      arr.push(...HUE_LEVELS.map((h, j) => ({
        i,
        j,
        value: hsl(h, stateSaturation * 0.01, l * 0.01)
      })));
    });
    
    return arr;
  }, [stateSaturation]);
  let selectedColor = '';
  
  colorMatrix.some(({
    i,
    j,
    value
  }) => {
    const found = stateI === i && stateJ === j;
    
    if (found) {
      selectedColor = value;
    }
    
    return found;
  });
  
  useEffect(() => {
    document.addEventListener('keydown', handleKeydown);
    
    return () => document.removeEventListener('keydown', handleKeydown);
  }, [handleKeydown]);

  return <>
    {stateThemeDark ? <GlobalStyleDarkBg /> : null}
    <H1>控制台色盘（但并非所用的颜色都出自这里...）</H1>
    <P>参考：<a href="https://done.alibaba-inc.com/file/npMfevdSB70K/nraBotmHA4yO7cyO/preview?categoryId=bqTzhdSLVELC" target="_blank" rel="noopener noreferrer">XConsole 色盘设计</a>。控制台色阶基于 HSL 色彩模型 - 色相 Hue / 饱和度 Saturation / 明度 Lightness：</P>
    <List>
      <><em>Hue</em>（以下横轴）360º 色相，默认每 10º 为一个节点，基础色相共 36 阶</>
      <><em>Lightness</em>（以下纵轴）明度参数 0%-100%，起始为 19%，以 10% 递增，最高明度 89%，共 8 阶</>
      <><em>Saturation</em>（XConsole 只选 6 阶，每隔 20%）饱和度范围 0%-100%，默认所有颜色 100% 饱和度</>
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
    <RadioGroup<boolean> {...{
      label: '黑色背景',
      value: stateThemeDark,
      items: THEMES,
      onChange: setStateThemeDark
    }} />
    <CurrentSelectedColor color={selectedColor} />
    <ScColorGrid>
      {colorMatrix.map(({
        i,
        j,
        value
      }) => <ScColorBlock {...{
        key: `${i}-${j}-${stateSaturation}`,
        selected: stateI === i && stateJ === j,
        style: {
          color: readableColor(value),
          backgroundColor: value
        },
        onClick: () => setStateIJ([i, j])
      }}>{COLOR_CORE === value ? '★' : null}</ScColorBlock>)}
    </ScColorGrid>
  </>;
}

