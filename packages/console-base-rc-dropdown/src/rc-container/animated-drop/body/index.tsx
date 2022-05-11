import React from 'react';
import styled from 'styled-components';

import {
  getCssPadding
} from '../../../util';
import {
  ModelProps,
  useProps
} from '../../../model';

interface IScProps {
  padding?: ModelProps['bodyPadding'];
}

const ScBody = styled.div<IScProps>`
  ${props => getCssPadding(props.padding)}
`;

export default function Body(): JSX.Element {
  const {
    body,
    bodyPadding
  } = useProps();
  
  return <ScBody padding={bodyPadding}>{body}</ScBody>;
}
