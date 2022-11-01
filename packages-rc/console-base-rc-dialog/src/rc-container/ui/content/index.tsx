import React, {
  Ref,
  HTMLAttributes,
  forwardRef
} from 'react';
import styled from 'styled-components';

import {
  SIZE
} from '@alicloud/console-base-theme';

import {
  IDialogProps
} from '../../../types';
import {
  useProps,
  useDialogMaxContentHeight
} from '../../../model';

interface IProps extends HTMLAttributes<HTMLDivElement> {}

const ScContent = styled.div<Partial<IDialogProps>>`
  flex: 1;
  position: relative;
  padding: ${SIZE.PADDING_X_DIALOG * 2 / 3}px ${SIZE.PADDING_X_DIALOG}px;
  overflow: auto;
`;

function Content(props: IProps, ref: Ref<HTMLDivElement>): JSX.Element {
  const {
    classNameOnBody,
    content
  } = useProps();
  const maxHeight = useDialogMaxContentHeight();
  
  return <ScContent {...{
    ...props,
    ref,
    style: maxHeight > 0 ? {
      maxHeight
    } : undefined,
    className: classNameOnBody
  }}>{content}</ScContent>;
}

export default forwardRef(Content);
