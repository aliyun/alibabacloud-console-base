import React from 'react';

import {
  // pure styled stuff
  H1,
  H2,
  H3,
  H4,
  P,
  Pre,
  Hr,
  Button,
  InputText,
  InputTextarea,
  // extended
  List,
  CheckboxGroup,
  RadioGroup,
  CleanJson,
  Flex100HBF,
  LongArticle
} from '../../src';

const TEST_JSON = {
  str: 'hello world',
  num: 1234567,
  bool: false,
  fn() { return '12345'; },
  jsx: <span>FUCK</span>
};

export default function DemoDefault(): JSX.Element {
  return <>
    <H1>demo-rc-elements</H1>
    <H2>原生元素，仅加样式</H2>
    <H3>其他标题</H3>
    <H4>4 级标题</H4>
    <H3>P / Pre / Hr / Button / InputText / InputTextArea</H3>
    <P>一个 P，这里的 <strong>strong</strong>、<code>code</code>、<kbd>kbd</kbd>、<em>em</em> 会有些样式</P>
    <Pre>一个 Pre</Pre>
    <Hr />
    <Button>一个 Button</Button>
    <InputText placeholder="InputText" />
    <InputTextarea placeholder="InputTextarea" />
    <H2>非原生元素，为便于书写</H2>
    <H3>List</H3>
    <List>
      <>丽丽一上床</>
      <>意思有空日</>
      <>优化十八禁</>
      <>充分草于是</>
      <span>这里的 <strong>strong</strong>、<code>code</code>、<kbd>kbd</kbd>、<em>em</em> 会有些样式</span>
    </List>
    <List ordered>
      <>丽丽一上床</>
      <>意思有空日</>
      <>优化十八禁</>
      <>充分草于是</>
      <span>这里的 <strong>strong</strong>、<code>code</code>、<kbd>kbd</kbd>、<em>em</em> 会有些样式</span>
    </List>
    <H3>CheckboxGroup / RadioGroup</H3>
    <CheckboxGroup<number> {...{
      label: 'number',
      items: [{
        value: 1,
        label: 'check 1'
      }, {
        value: 2,
        label: 'check 2'
      }]
    }} />
    <RadioGroup<string> {...{
      label: 'string',
      items: [{
        value: 's1',
        label: 'check 1'
      }, {
        value: 's2',
        label: 'check 2'
      }]
    }} />
    <H2>非原生元素，特殊用途</H2>
    <H3>CleanJson - 展示对象用</H3>
    <CleanJson o={TEST_JSON} />
    <H3>LongArticle - 为了撑高</H3>
    <LongArticle />
    <H3>Flex100HBF - 占满高度的「头-身-尾」组件</H3>
    <Flex100HBF />
  </>;
}
