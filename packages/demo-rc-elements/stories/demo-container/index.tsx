import React from 'react';
import styled from 'styled-components';

import {
  Flex
} from '../../src';

const ScRed = styled.div`
  padding: 12px;
  border: 3px solid #933;
  background-color: #f00;
  color: #fff;
`;
const ScBlue = styled.div`
  padding: 12px;
  border: 3px solid #339;
  background-color: #00f;
  color: #fff;
`;

interface IPropsItem {
  theme: 'red' | 'blue';
  height?: number;
  value?: string;
}

function Item({
  theme,
  height = 200,
  value
}: IPropsItem): JSX.Element {
  return theme === 'red' ? <ScRed style={{
    height
  }}>{value}</ScRed> : <ScBlue style={{
    height
  }}>{value}</ScBlue>;
}

export default function DemoContainer(): JSX.Element {
  return <Flex ratio={[2, 1]}>
    <Item theme="red" height={200} value="Red" />
    <Item theme="blue" height={200} value="Blue" />
  </Flex>;
}
