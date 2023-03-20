import React, {
  HTMLAttributes
} from 'react';
import styled from 'styled-components';

import {
  COLOR_FORM_CONTROL,
  CSS_FORM_CONTROL_BUTTON
} from '../../const';

const ScButtonA = styled.a`
  display: inline-block;
  text-align: center;
  ${CSS_FORM_CONTROL_BUTTON}
  
  &:link,
  &:link:visited,
  &:link:hover {
    text-decoration: none;
    color: ${COLOR_FORM_CONTROL.FGC};
  }
`;
const ScButton = styled.button`
  ${CSS_FORM_CONTROL_BUTTON}
`;

function getDefaultTarget(href: string): '_blank' | undefined {
  if (/^(?:https?:)?\/\//.test(href)) {
    return '_blank';
  }
}

interface IProps extends HTMLAttributes<HTMLElement> {
  disabled?: boolean;
  href?: string;
  target?: string;
}

export default function Button({
  disabled,
  href,
  target,
  ...props
}: IProps): JSX.Element {
  const resolvedHref = disabled ? undefined : href;
  
  return resolvedHref ? <ScButtonA {...props} href={resolvedHref} target={target ?? getDefaultTarget(resolvedHref)} /> : <ScButton {...props} disabled={disabled} />;
}
