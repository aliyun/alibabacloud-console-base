import React, {
  HTMLAttributes
} from 'react';
import styled from 'styled-components';

import {
  IconBase,
  injectIconFont
} from '../../../src';

enum EIconType {
  alibaba = 'e714' // eslint-disable-line @typescript-eslint/naming-convention
}

type TIconType = keyof typeof EIconType;

interface IPropsIcon extends HTMLAttributes<HTMLSpanElement> {
  type: TIconType;
}

const PROJECT = '3784563';
const HASH = '916esc4w7i';

const fontFamily = injectIconFont(PROJECT, HASH, {
  pathExtra: '/a'
});

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
