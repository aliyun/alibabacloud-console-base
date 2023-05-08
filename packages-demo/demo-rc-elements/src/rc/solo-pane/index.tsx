import {
  map as _map
} from 'lodash-es';
import React, {
  HTMLAttributes,
  useState
} from 'react';
import styled from 'styled-components';

import {
  RadioGroup
} from '../choice-group';
import InputColor from '../input-color';
import Hr from '../hr';

type TSize = 'xs' | 's' | 'm' | 'l' | 'xl';

interface IProps extends HTMLAttributes<HTMLDivElement> {
  size?: TSize;
  demo: JSX.Element;
}

const SIZE_MAPPING: Record<TSize, number> = {
  xs: 240,
  s: 320,
  m: 480,
  l: 560,
  xl: 720
};

const DATA_SOURCE_SIZE = _map(SIZE_MAPPING, (v, k) => ({
  value: k as TSize,
  label: `${k} - ${v}`
}));

const ScAdjustWidth = styled.div`
  margin-top: 12px;
`;

const ScRight = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 200;
  border: 12px solid rgb(109, 90, 207, 0.8);
  box-sizing: border-box;
  background-clip: content-box;
  overflow: auto;
  transition: all linear 200ms;
  
  /* stylelint-disable selector-class-pattern */
  .hasTopbar & {
    top: 50px;
  }
`;

/**
 * 专门用于测试微内容（文档、教程、实验室、搜索等）的容器，左边是测试辅助内容，右边是待测试组件
 */
export default function SoloPane({
  children,
  size = 'm',
  demo
}: IProps): JSX.Element {
  const [stateSize, setStateSize] = useState<TSize>(size);
  const [stateBd, setStateBd] = useState<string>('#6d5acf66');
  const [stateBg, setStateBg] = useState<string>('#ffcc0000');
  const width = SIZE_MAPPING[stateSize] || SIZE_MAPPING.m;
  
  return <div {...{
    style: {
      paddingRight: width
    }
  }}>
    <ScAdjustWidth>
      <RadioGroup<TSize> {...{
        label: '宽度',
        items: DATA_SOURCE_SIZE,
        value: stateSize,
        onChange: setStateSize
      }} />
      <div>
        边框色 <InputColor {...{
          value: stateBd,
          onChange: setStateBd
        }} />
      </div>
      <div>
        背景色 <InputColor {...{
          value: stateBg,
          onChange: setStateBg
        }} />
      </div>
      <Hr />
      <>{children}</>
    </ScAdjustWidth>
    <ScRight {...{
      style: {
        width,
        borderColor: stateBd,
        backgroundColor: stateBg
      }
    }}>
      {demo}
    </ScRight>
  </div>;
}
