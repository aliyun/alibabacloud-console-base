/* eslint-disable no-console */
import React, {
  useState
} from 'react';

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
    <Knobs onChange={setStateProps} />
    <div>text around <Button {...stateProps} onClick={onClick} /> button</div>
  </>;
}
