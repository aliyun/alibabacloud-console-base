import _forEach from 'lodash/forEach';

import {
  ICheckItem,
  IFeatureItem
} from '../types';

import convertCustomAttr from './convert-custom-attr';
import buildCheckAttributes from './build-check-attributes';

export default function getCheckItems(featureConf: IFeatureItem, arg?: string | Record<string, string>, defaultCheckAttributes?: Record<string, string>): ICheckItem[] {
  const attributes = buildCheckAttributes(arg, defaultCheckAttributes);
  const {
    attribute: {
      regions = [],
      customAttrs = {}
    } = {}
  } = featureConf;
  const checkItems: ICheckItem[] = [];
  
  function pushItem(value: string, mixedList: string[]): void {
    checkItems.push({
      value,
      mixedList
    });
  }
  
  function pushItemByCustom(value: string, k: string): void {
    const mixedList = convertCustomAttr(customAttrs[k]);
    
    if (mixedList) {
      pushItem(value, mixedList);
    }
  }
  
  _forEach(attributes, (v, k) => {
    if (!v) {
      return;
    }
    
    switch (k) {
      case 'region': // region 还是判断 regions
        pushItem(v, regions);
        
        break;
      default:
        pushItemByCustom(v, k);
        
        break;
    }
  });
  
  return checkItems;
}