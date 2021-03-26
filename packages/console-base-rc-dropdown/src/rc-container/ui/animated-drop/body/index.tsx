import React from 'react';
import styled, {
  css
} from 'styled-components';

import {
  TBodyPadding
} from '../../../../types';
import {
  useProps
} from '../../../../model';

interface IPropsScDropBody {
  bodyPadding?: TBodyPadding;
}

const ScDropBody = styled.div<IPropsScDropBody>`
  ${props => {
    switch (props.bodyPadding) {
      case 'none':
        return null;
      case 'top':
        return css`
          padding-top: 8px;
        `;
      case 'bottom':
        return css`
          padding-bottom: 8px;
        `;
      default:
        return css`
          padding: 8px 0;
        `;
    }
  }};
`;

export default function Body(): JSX.Element {
  const {
    body,
    bodyPadding
  } = useProps();
  
  return <ScDropBody bodyPadding={bodyPadding}>{body}</ScDropBody>;
}
