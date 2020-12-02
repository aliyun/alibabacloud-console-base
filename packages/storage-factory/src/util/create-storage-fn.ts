import {
  TDataWhole,
  TFnStorage
} from '../types';

export default function createStorageFn(wholeDataKey: string, theStorage: Storage): TFnStorage {
  if (!wholeDataKey) {
    throw new Error('[@alicloud/storage-factory] you have to give a wholeDataKey');
  }
  
  function getWholeData(): TDataWhole {
    try {
      return JSON.parse(theStorage.getItem(wholeDataKey)) || {};
    } catch (ex) {
      return {};
    }
  }
  
  return function(key: string, val?: unknown) {
    const wholeData = getWholeData();
    
    try {
      if (key === undefined) {
        return wholeData;
      }
      
      if (val === undefined) {
        return wholeData[key];
      }
      
      wholeData[key] = val;
      
      if (val === null) {
        delete wholeData[key];
      }
      
      theStorage.setItem(wholeDataKey, JSON.stringify(wholeData));
    } catch (ex) {
      // ignore
    }
  } as TFnStorage;
}
