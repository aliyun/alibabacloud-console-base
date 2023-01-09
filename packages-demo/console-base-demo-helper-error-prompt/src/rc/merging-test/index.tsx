/* eslint-disable no-console */
import React, {
  useCallback
} from 'react';

import {
  H1,
  List,
  Button
} from '@alicloud/demo-rc-elements';

import {
  IProps
} from '../../types';
import {
  createError,
  createErrorNeedLogin,
  createErrorTokenExpired
} from '../../util';

export default function MergingTest({
  onPrompt
}: IProps): JSX.Element {
  const handleTestSame = useCallback(() => {
    const err = createError({
      code: 'WhatEver',
      message: 'whatever message'
    });
    
    // 虽然这里只出一个 dialog 的内容，但 console 11 22 33 都有
    onPrompt([err, err, err]);
  }, [onPrompt]);
  const handleTestNeedLogin = useCallback(() => {
    onPrompt([createErrorNeedLogin(), createErrorNeedLogin(), createErrorNeedLogin()]);
  }, [onPrompt]);
  const handleTestTokenExpired = useCallback(() => {
    onPrompt([createErrorTokenExpired(), createErrorTokenExpired(), createErrorTokenExpired()]);
  }, [onPrompt]);
  
  return <>
    <H1>合并测试</H1>
    <List>
      <>等价的错误将无条件合并</>
      <>未登录和 Token 失效，在非详细模式（非开发模式）下合并</>
    </List>
    <Button onClick={handleTestSame}>same x3</Button>
    <Button onClick={handleTestNeedLogin}>未登录 x3</Button>
    <Button onClick={handleTestTokenExpired}>Token 失效 x3</Button>
  </>;
}