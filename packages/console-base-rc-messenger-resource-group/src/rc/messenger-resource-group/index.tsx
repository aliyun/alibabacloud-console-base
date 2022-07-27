import React, {
  useEffect
} from 'react';

import {
  setResourceGroupProps,
  mergeResourceGroupProps
} from '@alicloud/console-base-messenger-resource-group';

import {
  IPropsMessengerResourceGroup
} from '../../types';
import {
  slsCreated
} from '../../sls';
import MessengerResourceGroupPortal from '../messenger-resource-group-portal';
import MessengerResourceGroupEvents from '../messenger-resource-group-events';

export default function MessengerResourceGroup({
  portal,
  resourceGroupId,
  resourceCount,
  visible = true, // 使用此组件意味着 visible 必须受控
  disabled,
  noDefault,
  onChange
}: IPropsMessengerResourceGroup): JSX.Element {
  useEffect(() => setResourceGroupProps({
    resourceGroupId,
    resourceCount,
    visible,
    disabled,
    noDefault
  }), [resourceGroupId, resourceCount, visible, disabled, noDefault]);
  
  useEffect(() => {
    slsCreated(); // 初始化记录日志
    
    return () => mergeResourceGroupProps({ // 卸载当前组件，隐藏
      visible: false
    });
  }, []);
  
  return <>
    {portal ? <MessengerResourceGroupPortal /> : null}
    {onChange ? <MessengerResourceGroupEvents {...{
      onChange
    }} /> : null}
  </>;
}