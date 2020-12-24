import React, {
  useState,
  useCallback
} from 'react';

import {
  // pure styled stuff
  H1,
  H2,
  H3,
  H4,
  P,
  Hr,
  Button,
  InputText,
  InputTextarea,
  // extended
  Pre,
  PreJson,
  PrePromise,
  List,
  CheckboxGroup,
  RadioGroup,
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

function randomPromise(): Promise<unknown> {
  return new Promise((resolve, reject) => {
    const ram = Math.ceil(Math.random() * 2000);
    
    window.setTimeout(() => {
      if (ram % 2) {
        resolve(ram);
      } else {
        reject(new Error(`${ram} NOT odd`));
      }
    }, ram);
  });
}

export default function DemoDefault(): JSX.Element {
  const [statePromise, setStatePromise] = useState<Promise<unknown> | null>(null);
  
  const handleRandomPromise = useCallback(() => setStatePromise(randomPromise()), [setStatePromise]);
  
  return <>
    <H1>demo-rc-elements</H1>
    <H2>原生元素，仅加样式</H2>
    <H3>其他标题</H3>
    <H4>4 级标题</H4>
    <H3>P / Pre / Hr / Button / InputText / InputTextArea</H3>
    <P>一个 P，这里的 <strong>strong</strong>、<code>code</code>、<kbd>kbd</kbd>、<em>em</em> 会有些样式</P>
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
    <H3>Pre</H3>
    <Pre>一个 Pre</Pre>
    <H3>PreJson - 展示对象</H3>
    <PreJson o={TEST_JSON} />
    <H3>PrePromise - 展示 Promise</H3>
    <Button onClick={handleRandomPromise}>random promise</Button>
    <PrePromise promise={statePromise} />
    <H3>LongArticle - 为了撑高</H3>
    <LongArticle />
    <H3>Flex100HBF - 占满高度的「头-身-尾」组件</H3>
    <Flex100HBF />
  </>;
}
