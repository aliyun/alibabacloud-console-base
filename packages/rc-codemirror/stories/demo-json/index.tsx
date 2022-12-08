import React, {
  useState
} from 'react';

import CodeMirror from '../../src';

const TEXT = JSON.stringify({
  title: 'I Am a Title',
  arr: [1, '2', true, {
    boshit: 'is always right'
  }],
  poet: '离离原上草 一岁一枯荣 野火烧不尽 春风吹又生'
}, null, 2);

export default function DemoJson(): JSX.Element {
  const [stateValue, setStateValue] = useState<string>(TEXT);
  
  return <CodeMirror {...{
    conf: {
      mode: 'application/json'
    },
    value: stateValue,
    onChange: setStateValue
  }} />;
}
