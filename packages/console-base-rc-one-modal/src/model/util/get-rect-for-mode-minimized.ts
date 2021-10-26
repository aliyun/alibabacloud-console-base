import {
  IModelState,
  IRndStateRect
} from '../types';

export default function getRectForModeMinimized({
  x2,
  y2
}: IModelState, affix?: string | Element | null): IRndStateRect {
  let width = 40;
  let height = 40;
  let posX = x2;
  let posY = y2;
  
  try {
    let affixEl: Element | null | undefined;
    
    if (typeof affix === 'string') {
      affixEl = document.querySelector(affix);
    } else {
      affixEl = affix;
    }
    
    const rect = affixEl?.getBoundingClientRect();
    
    if (rect) {
      width = rect.width;
      height = rect.height;
      posX = rect.x;
      posY = rect.y;
    }
  } catch (err) {
    // ignore
  }
  
  return {
    w: width,
    h: height,
    x: posX,
    y: posY
  };
}