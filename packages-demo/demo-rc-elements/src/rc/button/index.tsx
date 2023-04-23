import React, {
  ButtonHTMLAttributes
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

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  target?: string;
  children?: any;
}

export default function Button({
  disabled,
  href,
  target,
  children, // ...
  ...props
}: IProps): JSX.Element {
  const resolvedHref = disabled ? undefined : href;
  
  return resolvedHref ? <ScButtonA {...{
    ...props as ButtonHTMLAttributes<HTMLAnchorElement>,
    href: resolvedHref,
    target: target ?? getDefaultTarget(resolvedHref)
  }}>{children}</ScButtonA> : <ScButton {...props} disabled={disabled}>{children}</ScButton>;
}
