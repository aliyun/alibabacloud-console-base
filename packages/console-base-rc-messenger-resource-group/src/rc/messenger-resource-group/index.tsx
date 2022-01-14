import React, {
  useEffect
} from 'react';

import {
  setResourceGroupProps,
  mergeResourceGroupProps
} from '@alicloud/console-base-messenger';

import {
  IPropsMessengerResourceGroup
} from '../../types';
import {
  slsCreated
} from '../../sls';
import MessengerResourceGroupEvents from '../messenger-resource-group-events';

export default function MessengerResourceGroup({
  resourceGroupId,
  resourceCount,
  visible = true, // 使用此组件意味着 visible 必须受控
  disabled,
  noDefault,
  onChange
}: IPropsMessengerResourceGroup): JSX.Element | null {
  useEffect(() => setResourceGroupProps({
    resourceGroupId,
    resourceCount,
    visible,
    disabled,
    noDefault
  }), [visible, disabled, noDefault, resourceGroupId, resourceCount]);
  
  useEffect(() => {
    slsCreated(); // 初始化记录日志
    
    return () => mergeResourceGroupProps({ // 卸载当前组件，隐藏
      visible: false
    });
  }, []);
  
  return onChange ? <MessengerResourceGroupEvents {...{
    onChange
  }} /> : null;
}