import React from 'react';
import styled, {
  FlattenSimpleInterpolation
} from 'styled-components';

import Icon, {
  IconType
} from '@alicloud/console-base-rc-icon';
import {
  mixinTypoLineWrap,
  mixinTextPrimary,
  mixinTextTertiary,
  mixinTextSecondary,
  mixinTextWarning, mixinTextSuccess, mixinTextError
} from '@alicloud/console-base-theme';

import {
  TStringOrJSX
} from '../../types';

type TType = 'alert' | 'success' | 'error' | 'confirm';

interface IProps {
  type?: TType;
  title?: TStringOrJSX;
  content?: TStringOrJSX;
}

function getIconType(type?: TType): IconType {
  switch (type) {
    case 'confirm':
      return 'question-fill';
    case 'success':
      return 'check-circle-fill';
    case 'error':
      return 'x-circle-fill';
    default:
      return 'alert-fill';
  }
}

function getIconColorMixin(iconType: IconType): FlattenSimpleInterpolation {
  switch (iconType) {
    case 'alert-fill':
      return mixinTextWarning;
    case 'check-circle-fill':
      return mixinTextSuccess;
    case 'x-circle-fill':
      return mixinTextError;
    default:
      return mixinTextTertiary;
  }
}

const ICON_SIZE = 20;
const SPACING = 12;

const ScAltWrap = styled.div`
  position: relative;
  margin-top: 16px;
  padding: 0 ${SPACING * 2}px 0 ${ICON_SIZE + SPACING}px;
  min-height: ${ICON_SIZE + SPACING * 2}px;
`;

const ScIcon = styled(Icon)`
  position: absolute;
  top: 2px;
  left: 0;
  font-size: ${ICON_SIZE}px;
  ${props => getIconColorMixin(props.type)}
  
  &:before {
    display: block;
  }
`;

const ScTitle = styled.h5`
  margin: 0 0 8px 0;
  padding: 0;
  font-size: 16px;
  line-height: 24px;
  ${mixinTextPrimary}
  ${mixinTypoLineWrap}
`;

const ScContent = styled.div`
  font-size: 14px;
  line-height: 1.5;
  ${mixinTextSecondary}
  ${mixinTypoLineWrap}
`;

/**
 * alert / confirm 的包裹
 */
export default function AltWrap({
  type,
  title,
  content
}: IProps): JSX.Element {
  return <ScAltWrap>
    <ScIcon type={getIconType(type)} />
    {title ? <ScTitle>{title}</ScTitle> : null}
    <ScContent>{content}</ScContent>
  </ScAltWrap>;
}
