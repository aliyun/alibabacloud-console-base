import React, {
  useState
} from 'react';

import CodeMirror from '../../src';

const JSON_STR = JSON.stringify({
  title: 'I Am a Title',
  arr: [1, '2', true, {
    boshit: 'is always right'
  }],
  poet: '丽丽一上床 意思有空日 业火十八禁 充分草于是 - 不要想歪了 - 离离原上草 一岁一枯荣 野火烧不尽 春风吹又生'
}, null, 2);

export default function DemoDefault(): JSX.Element {
  const [stateValue, setStateValue] = useState<string>(JSON_STR);
  
  return <CodeMirror {...{
    conf: {
      mode: 'application/json'
    },
    value: stateValue,
    onChange: setStateValue
  }} />;
}
