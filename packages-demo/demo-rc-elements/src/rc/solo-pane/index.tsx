import React, {
  HTMLAttributes,
  useState
} from 'react';
import styled from 'styled-components';

import {
  RadioGroup
} from '../choice-group';
import Hr from '../hr';

const DATA_SOURCE_WIDTH = [240, 320, 400, 480, 560, 720].map(value => ({
  label: `${value}px`,
  value
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
  border: 8px solid rgba(128, 0, 255, 0.6);
  background-clip: content-box;
  overflow: auto;
  transition: all linear 200ms;
  
  /* stylelint-disable selector-class-pattern */
  .hasTopbar & {
    top: 50px;
  }
`;

interface IProps extends HTMLAttributes<HTMLDivElement> {
  demo: JSX.Element;
}

/**
 * 专门用于测试微内容（文档、教程、实验室、搜索等）的容器，左边是测试辅助内容，右边是待测试组件
 */
export default function SoloPane({
  children,
  demo
}: IProps): JSX.Element {
  const [stateWidth, setStateWidth] = useState<number>(480);
  
  return <div {...{
    style: {
      paddingRight: stateWidth
    }
  }}>
    <ScAdjustWidth>
      <RadioGroup<number> {...{
        label: '宽度',
        items: DATA_SOURCE_WIDTH,
        value: stateWidth,
        onChange: setStateWidth
      }} />
      <Hr />
      {children}
    </ScAdjustWidth>
    <ScRight {...{
      style: {
        width: stateWidth
      }
    }}>
      {demo}
    </ScRight>
  </div>;
}
