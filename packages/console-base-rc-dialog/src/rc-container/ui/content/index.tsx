import React, {
  Ref,
  HTMLAttributes,
  forwardRef
} from 'react';
import styled from 'styled-components';

import {
  DIALOG
} from '@alicloud/console-base-styled-mixin';

import {
  IDialogProps
} from '../../../types';
import {
  usePropMode,
  useDialogContent,
  usePropClassNameContent,
  useDialogMaxContentHeight
} from '../../../model';

interface IProps extends HTMLAttributes<HTMLDivElement> {}

const ScContent = styled.div<Partial<IDialogProps>>`
  flex: 1;
  position: relative;
  padding: ${DIALOG.PADDING * 2 / 3}px ${DIALOG.PADDING}px;
  overflow: auto;
`;

function Content(props: IProps, ref: Ref<HTMLDivElement>): JSX.Element {
  const mode = usePropMode();
  const content = useDialogContent();
  const classNameOnBody = usePropClassNameContent();
  const maxHeight = useDialogMaxContentHeight();
  
  return <ScContent {...{
    ...props,
    style: maxHeight > 0 ? {
      maxHeight
    } : undefined,
    className: classNameOnBody,
    ref,
    mode
  }}>{content}</ScContent>;
}

export default forwardRef(Content);
