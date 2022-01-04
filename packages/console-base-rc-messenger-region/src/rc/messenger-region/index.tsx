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
  visible,
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
    visible,
    readOnly,
    noFlag,
    noGroup
  }), [regions, regionId, resourceCount, legacyRegionIds, visible, readOnly, noFlag, noGroup]);
  
  useEffect(() => { // 卸载当前组件，Region 隐藏
    return () => mergeRegionProps({
      visible: false
    });
  }, []);
  
  return <MessengerRegionEvents {...{
    onChange
  }} />;
}