import {
  TPage
} from '../types';

export default function generatePageList(page: number, pages: number, limit: number): TPage[] {
  const arr: TPage[] = [];
  
  if (pages <= limit) {
    for (let i = 1; i <= pages; i++) {
      arr.push(i);
    }
    
    return arr;
  }
  
  arr.push(1);
  
  // 除去第一页，最后一页以及当前页，剩下的页数
  const othersCount = limit - 3;
  const halfCount = Math.round(othersCount / 2);
  let start;
  let end;
  
  start = page - halfCount;
  end = page + halfCount;
  
  if (start <= 1) {
    start = 2;
    end = start + othersCount;
  }
  
  if (start > 2) {
    arr.push('...');
  }
  
  if (end >= pages - 1) {
    end = pages - 1;
    start = pages - 1 - othersCount;
  }
  
  for (let j = start; j <= end; j++) {
    arr.push(j);
  }
  
  if (end < pages - 1) {
    arr.push('...');
  }
  
  arr.push(pages);
  
  return arr;
}