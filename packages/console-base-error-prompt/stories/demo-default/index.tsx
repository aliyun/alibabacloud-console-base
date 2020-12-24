import React, {
  useState,
  useCallback
} from 'react';

import {
  H1,
  H2,
  CheckboxGroup,
  Button
} from '@alicloud/demo-rc-elements';

import {
  ErrorDetailedInfo
} from '../../src';

import {
  createErrorWithDetails,
  ERRORS,
  alertError
} from './_common';

export default function DemoDefault(): JSX.Element {
  const [stateErrors, setStateErrors] = useState<ErrorDetailedInfo[]>([]);
  
  const handleClear = useCallback(() => setStateErrors([]), [setStateErrors]);
  const handleAlertErrors = useCallback(() => stateErrors.forEach(v => alertError(v)), [stateErrors]);
  
  return <>
    <H1>选择错误，模拟单个或多个错误的场景</H1>
    <CheckboxGroup<ErrorDetailedInfo> {...{
      items: ERRORS.map(v => ({
        label: v.message || v.toString(),
        value: v
      })),
      value: stateErrors,
      onChange: setStateErrors
    }} />
    <div>
      <Button {...{
        children: 'alertError',
        onClick: handleAlertErrors
      }} />
      <Button {...{
        children: 'clear',
        onClick: handleClear
      }} />
    </div>
    <H2>其他场景</H2>
    <Button {...{
      children: 'alertError(string)',
      onClick: () => alertError('zheshi yige zifuchuan niky zhemeyong meiwenti')
    }} />
    <Button {...{
      children: 'alertError(object)',
      onClick: () => alertError({
        message: '请登录',
        requestId: '1234567890',
        url: 'some URL',
        URL: 'some URL 2',
        method: 'get',
        code: 'I_FUCKING_NOT_SIGNED_IN',
        params: {
          a: '锄禾日当午',
          A: '彩虹若等我',
          ao: {
            en: 'NO'
          }
        },
        body: {
          b: '汗滴禾下土',
          B: '后端好系统',
          bo: {
            en: 'NB'
          }
        }
      })
    }} />
    <Button {...{
      children: 'alertError(JSX)',
      onClick: () => alertError(<H2>laozi shi yiduan JSX dan ni buyao jingchang zheme yong</H2>)
    }} />
    <Button {...{
      children: 'alertError(Error)',
      onClick: () => alertError(new Error())
    }} />
    <Button {...{
      children: 'alertError(ErrorWithDetails)',
      onClick: () => alertError(createErrorWithDetails())
    }} />
  </>;
}
