import React from 'react';
import styled, {
  css
} from 'styled-components';

import {
  mixinTextPrimary,
  mixinTypoEllipsis
} from '@alicloud/console-base-theme';
import Icon from '@alicloud/console-base-rc-icon';
import Button, {
  ButtonTheme
} from '@alicloud/console-base-rc-button';

import {
  HEIGHT_HEADER,
  SPACING_SIDE
} from '../../../const';
import {
  useProps
} from '../../../model';

const cssCommon = css`
  padding: 0 ${SPACING_SIDE}px;
  height: ${HEIGHT_HEADER}px;
  line-height: ${HEIGHT_HEADER}px;
`;

const ScHeader = styled.header`
  overflow: hidden;
  font-size: 14px;
  font-weight: 600;
  ${mixinTextPrimary}
`;

const ScTitle = styled.div`
  padding: 0 ${SPACING_SIDE}px;
  ${cssCommon}
  ${mixinTypoEllipsis}
`;

const ScToUpperLevel = styled(Button)`
  display: block;
  ${cssCommon}
`;

const ScIcon = styled(Icon)`
  font-size: 20px;
`;

export default function UiHeader(): JSX.Element {
  const {
    title,
    upperHref
  } = useProps();
  
  return <ScHeader>
    {upperHref ? <ScToUpperLevel {...{
      label: <ScIcon type="angle-left" />,
      theme: ButtonTheme.TEXT_TERTIARY,
      textAlign: 'center',
      href: upperHref
    }} /> : <ScTitle title={typeof title === 'string' ? title : undefined}>{title}</ScTitle>}
  </ScHeader>;
}