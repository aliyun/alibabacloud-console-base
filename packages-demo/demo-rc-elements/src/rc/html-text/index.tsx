import React, {
  HTMLAttributes
} from 'react';
import styled from 'styled-components';

import {
  CSS_INLINE_ELEMENTS_INSIDE
} from '../../const';

const ScSpan = styled.span`
  ${CSS_INLINE_ELEMENTS_INSIDE}
`;

interface IProps extends Omit<HTMLAttributes<HTMLSpanElement>, 'children'> {
  text: string;
}

/**
 * 将字符串以 HTML 的形式展示，方便需要展示一些带 HTML 的内容的场景
 */
export default function HtmlText({
  text,
  ...props
}: IProps): JSX.Element {
  return /</.test(text) ? <ScSpan {...props} dangerouslySetInnerHTML={{ // eslint-disable-line react/no-danger
    __html: text
  }} /> : <span {...props}>{text}</span>;
}
