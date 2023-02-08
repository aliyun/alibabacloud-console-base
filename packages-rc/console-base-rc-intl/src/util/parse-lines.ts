import {
  ILineGroup
} from '../types';

import determineLineType from './determin-line-type';
import createLineGroup from './create-line-group';

/**
 * 将纯文本数组转换成渲染所需的数组
 */
export default function parseLines(arr: string[]): ILineGroup[] {
  const results: ILineGroup[] = [];
  let lastIndex = 0;
  let lastType = determineLineType(arr[0]!); // eslint-disable-line @typescript-eslint/no-non-null-assertion
  
  arr.forEach((v, i) => {
    const typeOfV = determineLineType(v);
    
    if (typeOfV !== lastType) { // 发现新的类型，则之前的自成一组
      results.push(createLineGroup(lastType, arr.slice(lastIndex, i)));
      
      lastType = typeOfV;
      lastIndex = i;
    }
  });
  
  results.push(createLineGroup(lastType, arr.slice(lastIndex, arr.length))); // 最末一组
  
  return results;
}
