import React from 'react';
import styled from 'styled-components';

import {
  CSS_INLINE_ELEMENTS_INSIDE
} from '../../const';

const ScSpan = styled.span`
  ${CSS_INLINE_ELEMENTS_INSIDE}
`;

interface IProps {
  text: string;
}

/**
 * 将字符串以 HTML 的形式展示，方便需要展示一些带 HTML 的内容的场景
 */
export default function HtmlText({
  text
}: IProps): JSX.Element {
  return /</.test(text) ? <ScSpan dangerouslySetInnerHTML={{ // eslint-disable-line react/no-danger
    __html: text
  }} /> : <span>{text}</span>;
}
