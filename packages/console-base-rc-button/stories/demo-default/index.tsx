/* eslint-disable no-console */
import React, {
  useState
} from 'react';

import {
  H1,
  P
} from '@alicloud/demo-rc-elements';

import Button, {
  ButtonProps
} from '../../src';
import Knobs from '../knobs';

function onClick(): void {
  console.info('click shall NOT fire when loading or disabled');
}

export default function DemoDefault(): JSX.Element {
  const [stateProps, setStateProps] = useState<ButtonProps>({
    spm: ''
  });
  
  return <>
    <H1>Button 测试</H1>
    <P>请使用 knobs 进行调戏 <span role="img" aria-label="play">🙈</span></P>
    <Knobs onChange={setStateProps} />
    <div>text around <Button {...stateProps} onClick={onClick} /> button</div>
  </>;
}
