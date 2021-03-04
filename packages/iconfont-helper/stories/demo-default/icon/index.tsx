import React, {
  HTMLAttributes
} from 'react';
import styled from 'styled-components';

import {
  IconBase,
  injectIconFont
} from '../../../src';

enum EIconType {
  alibaba = 'e68a'
}

type TIconType = keyof typeof EIconType;

interface IPropsIcon extends HTMLAttributes<HTMLSpanElement> {
  type: TIconType;
}

const PROJECT = '2373906';
const HASH = 'qpoep7hwn3';

const fontFamily = injectIconFont(PROJECT, HASH);

function getCode(props: IPropsIcon): string {
  const code = EIconType[props.type];
  
  return code ? `\\${code}` : '';
}

const ScIcon = styled(IconBase)<IPropsIcon>`
  font-family: ${fontFamily} !important;
  
  &:before {
    content: '${props => getCode(props)}';
  }
`;

export default function Icon(props: IPropsIcon): JSX.Element {
  return <ScIcon {...props} />;
}
