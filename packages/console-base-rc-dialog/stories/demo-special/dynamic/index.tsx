/* eslint-disable no-console */
import React, {
  useCallback
} from 'react';

import {
  H1,
  Button
} from '@alicloud/demo-rc-elements';

import {
  DialogProps,
  EDialogSize,
  open,
  slide,
  slideUp
} from '../../../src';

import Content from './content';

function onResolve(resolved: any): void {
  console.info('[RESOLVED]', resolved);
}

function onReject(rejected: any): void {
  console.info('[REJECTED]', rejected);
}

const props: DialogProps = {
  title: ({
    input1,
    input2
  }): string => {
    if (input1 && input2) {
      return '输入了 input1 和 input2';
    }
    
    if (input1) {
      return '输入了 input1';
    }
    
    if (input2) {
      return '输入了 input2';
    }
    
    return '演示利用共享 data 对 title、button 进行微调的骚操作';
  },
  content: <Content />,
  buttons: ({
    input1,
    input2
  }) => {
    return [{
      label: 'input #1 + #2',
      disabled: !input1 || !input2
    }, {
      label: 'input #1',
      disabled: !input1
    }, {
      label: 'input #2',
      disabled: !input2
    }, {
      label: 'cancel'
    }];
  },
  size: EDialogSize.L
};

export default function Dynamic(): JSX.Element {
  const handleTestOpen = useCallback(() => {
    open(props).then(onResolve, onReject);
  }, []);
  const handleTestSlide = useCallback(() => {
    slide(props).then(onResolve, onReject);
  }, []);
  const handleTestSlideUp = useCallback(() => {
    slideUp(props).then(onResolve, onReject);
  }, []);
  
  return <>
    <H1>动态修改内容等</H1>
    <Button {...{
      onClick: handleTestOpen
    }}>open</Button>
    <Button {...{
      onClick: handleTestSlide
    }}>slide</Button>
    <Button {...{
      onClick: handleTestSlideUp
    }}>slideUp</Button>
  </>;
}
