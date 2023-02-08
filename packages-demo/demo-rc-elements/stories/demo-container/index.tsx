import React from 'react';
import styled from 'styled-components';

import {
  H1,
  H2,
  Flex,
  P,
  Blockquote,
  Alert,
  List
} from '../../src';
import Shared from '../_shared';

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

const jsxInlineElements = <>在 block 元素中，<strong>strong</strong>、<code>code</code>、<kbd>kbd</kbd>、<em>em</em> 等，都有样式。</>;

export default function DemoContainer(): JSX.Element {
  return <>
    <Shared />
    <H1>P</H1>
    <P>{jsxInlineElements}</P>
    <H1>Blockquote</H1>
    <Blockquote>{jsxInlineElements}</Blockquote>
    <H1>List</H1>
    <H2>ordered: false - 默认</H2>
    <List>
      <>丽丽一上床</>
      <>意思有空日</>
      <>优化十八禁</>
      <>充分草于是</>
      {jsxInlineElements}
    </List>
    <H2>ordered: true</H2>
    <List ordered>
      <>丽丽一上床</>
      <>意思有空日</>
      <>优化十八禁</>
      <>充分草于是</>
      {jsxInlineElements}
    </List>
    <H1>Alert</H1>
    <Alert>{jsxInlineElements}</Alert>
    <Alert type="help" title="Alert Help">{jsxInlineElements}</Alert>
    <Alert type="info" title="Alert Info">{jsxInlineElements}</Alert>
    <Alert type="success" title="Alert Success">{jsxInlineElements}</Alert>
    <Alert type="warning" title="Alert Warning">{jsxInlineElements}</Alert>
    <Alert type="error" title="Alert Error">{jsxInlineElements}</Alert>
    <H1>Flex</H1>
    <Flex ratio={[2, 1]}>
      <Item theme="red" height={200} value="Red" />
      <Item theme="blue" height={200} value="Blue" />
    </Flex>
  </>;
}
