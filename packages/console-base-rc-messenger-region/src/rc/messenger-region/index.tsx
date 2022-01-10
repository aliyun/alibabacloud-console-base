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
import MessengerRegionEvents from '../messenger-region-events';

export default function MessengerRegion({
  regions,
  regionId,
  resourceCount,
  legacyRegionIds,
  global,
  visible = true, // 使用此组件意味着 visible 必须受控
  readOnly,
  noFlag,
  noGroup,
  onChange
}: IPropsMessengerRegion): JSX.Element {
  useEffect(() => setRegionProps({
    regions,
    regionId,
    resourceCount,
    legacyRegionIds,
    global,
    visible,
    readOnly,
    noFlag,
    noGroup
  }), [global, regions, regionId, resourceCount, legacyRegionIds, visible, readOnly, noFlag, noGroup]);
  
  useEffect(() => { // 卸载当前组件，Region 隐藏
    return () => mergeRegionProps({
      visible: false
    });
  }, []);
  
  return <MessengerRegionEvents {...{
    onChange
  }} />;
}