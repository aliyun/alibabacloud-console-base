import React, {
  useEffect
} from 'react';

import {
  setRegionProps,
  mergeRegionProps
} from '@alicloud/console-base-messenger';

import {
  IPropsMessengerRegion
} from '../../types';
import {
  slsCreated
} from '../../sls';
import MessengerRegionEvents from '../messenger-region-events';

export default function MessengerRegion({
  regions,
  regionId,
  resourceCount,
  legacyRegionIds,
  global,
  visible = true, // 使用此组件意味着 visible 必须受控
  disabled,
  noFlag,
  noGroup,
  onChange
}: IPropsMessengerRegion): JSX.Element | null {
  useEffect(() => setRegionProps({
    regions,
    regionId,
    resourceCount,
    legacyRegionIds,
    global,
    visible,
    disabled,
    noFlag,
    noGroup
  }), [global, regions, regionId, resourceCount, legacyRegionIds, visible, disabled, noFlag, noGroup]);
  
  useEffect(() => {
    slsCreated(); // 初始化记录日志
    
    return () => mergeRegionProps({ // 卸载当前组件，隐藏
      visible: false
    });
  }, []);
  
  return onChange ? <MessengerRegionEvents {...{
    onChange
  }} /> : null;
}