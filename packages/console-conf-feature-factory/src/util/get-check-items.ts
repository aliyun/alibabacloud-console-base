import _forEach from 'lodash/forEach';

import CONF_LOCALE from '@alicloud/console-base-conf-locale';

import {
  ICheckItem,
  IFeatureCheckAttributes,
  IFeatureItem
} from '../types';

import convertCustomAttr from './convert-custom-attr';

export default function getCheckItems(featureConf: IFeatureItem, attributes: IFeatureCheckAttributes): ICheckItem[] {
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
  
  // 自动添加对 locale 的判断
  pushItemByCustom(CONF_LOCALE.LOCALE, '$locale'); // 在 Viper 中约定的自定义属性为 $locale
  
  return checkItems;
}