import React, {
  useEffect
} from 'react';

import {
  setRegionProps,
  mergeRegionProps
} from '@alicloud/console-base-messenger-region';

import {
  IPropsMessengerRegion
} from '../../types';
import {
  slsCreated
} from '../../sls';
import MessengerRegionPortal from '../messenger-region-portal';
import MessengerRegionEvents from '../messenger-region-events';

export default function MessengerRegion({
  portal,
  regionId,
  regionIdDefault,
  regions,
  resourceCount,
  legacyRegionIds,
  visible = true, // 使用此组件意味着 visible 必须受控
  disabled,
  global,
  noGroup,
  onChange
}: IPropsMessengerRegion): JSX.Element {
  useEffect(() => setRegionProps({
    regionId,
    regionIdDefault,
    regions,
    resourceCount,
    legacyRegionIds,
    visible,
    disabled,
    global,
    noGroup
  }), [regionId, regionIdDefault, regions, resourceCount, legacyRegionIds, visible, disabled, global, noGroup]);
  
  useEffect(() => {
    slsCreated(); // 初始化记录日志
    
    return () => mergeRegionProps({ // 卸载当前组件，隐藏
      visible: false
    });
  }, []);
  
  return <>
    {portal ? <MessengerRegionPortal /> : null}
    {onChange ? <MessengerRegionEvents {...{
      onChange
    }} /> : null}
  </>;
}