import React from 'react';

import {
  useRefInput,
  usePropsForInputElement
} from '../../../model';
import {
  ScInputWrapper,
  ScInputReal
} from '../../sc';

export default function TheInput(): JSX.Element {
  const propsForInputElement = usePropsForInputElement();
  const refInput = useRefInput();
  
  return <ScInputWrapper>
    <ScInputReal ref={refInput} {...propsForInputElement} />
  </ScInputWrapper>;
}
