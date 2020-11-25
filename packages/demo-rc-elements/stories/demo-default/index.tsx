import React from 'react';

import {
  H1,
  H2,
  H3,
  P,
  Pre,
  List,
  Hr,
  Button,
  InputText,
  InputTextarea,
  CheckboxGroup,
  RadioGroup
} from '../../src';

export default function DemoDefault(): JSX.Element {
  return <>
    <H1>一级标题</H1>
    <H2>二级标题</H2>
    <H3>三级标题</H3>
    <P>一个 P，这里的 <strong>strong</strong>、<code>code</code>、<kbd>kbd</kbd>、<em>em</em> 会有些样式</P>
    <Pre>一个 Pre</Pre>
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
    <Hr />
    <Button>一个 Button</Button>
    <InputText placeholder="InputText" />
    <InputTextarea placeholder="InputTextarea" />
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
  </>;
}
