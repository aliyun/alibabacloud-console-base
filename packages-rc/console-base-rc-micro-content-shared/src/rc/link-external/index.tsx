import React from 'react';
import styled from 'styled-components';

import Button, {
  ButtonTheme,
  ButtonProps
} from '@alicloud/console-base-rc-button';
import {
  DATA_CLICK_HIJACK_IGNORE
} from '@alicloud/dom-event-hijacker';

import intl from '../../intl';

interface IProps extends Omit<ButtonProps, 'size' | 'theme' | 'iconRight' | 'iconSpacing'> {
  href: string; // 必填
}

const ScLinkExternal = styled(Button)`
  i {
    transition: transform ease-in-out 250ms;
  }
  
  &:hover {
    i {
      transform: translateY(-2px);
    }
  }
`;

/**
 * 在外部打开按钮，有默认文案，不会被 event-hijacker 拦截
 */
export default function LinkExternal({
  spm = 'external',
  label = intl('op:view_more'),
  ...props
}: IProps): JSX.Element {
  return <ScLinkExternal {...{
    ...props,
    spm,
    label,
    theme: ButtonTheme.TEXT_PRIMARY,
    iconRight: 'external',
    iconSpacing: 'small',
    [DATA_CLICK_HIJACK_IGNORE]: ''
  }} />;
}
