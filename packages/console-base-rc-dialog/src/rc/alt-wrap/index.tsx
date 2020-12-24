import React from 'react';
import styled, {
  css
} from 'styled-components';

import Icon from '@alicloud/console-base-rc-icon';
import {
  COLOR
} from '@alicloud/console-base-theme';

import {
  TStringOrJSX
} from '../../types';

interface IProps {
  type?: 'alert' | 'confirm';
  title?: TStringOrJSX;
  content?: TStringOrJSX;
}

const ICON_SIZE = 20;
const SPACING = 12;

const ScWrap = styled.div`
  position: relative;
  margin-top: 16px;
  padding-top: 2px;
  min-height: ${ICON_SIZE + SPACING * 2}px;
`;

const ScIcon = styled(Icon)`
  position: absolute;
  top: 4px;
  left: 0;
  font-size: ${ICON_SIZE}px;
  ${props => (props.type === 'question-fill' ? css`
    color: ${COLOR.TEXT_CAPTION};
    color: var(--cb-color-text-caption, ${COLOR.TEXT_CAPTION});
  ` : css`
    color: ${COLOR.TEXT_WARN};
    color: var(--cb-color-text-warn, ${COLOR.TEXT_WARN});
  `)}
  
  &:before {
    display: block;
  }
`;

const ScMessage = styled.div`
  padding: 0 ${SPACING}px 0 ${ICON_SIZE + SPACING}px;
  line-height: 1.6;
  white-space: normal;
  word-wrap: break-word;
`;

const ScTitle = styled.h5`
  margin: 0 0 8px 0;
  padding: 0;
  font-size: 16px;
  color: ${COLOR.TEXT_TITLE};
`;

const ScContent = styled.div`
  margin-top: 4px;
`;

/**
 * alert / confirm 的包裹
 */
export default function AltWrap({
  type,
  title,
  content
}: IProps): JSX.Element {
  return <ScWrap>
    <ScIcon type={type === 'confirm' ? 'question-fill' : 'alert-fill'} />
    <ScMessage>
      {title ? <ScTitle>{title}</ScTitle> : null}
      <ScContent>{content}</ScContent>
    </ScMessage>
  </ScWrap>;
}
