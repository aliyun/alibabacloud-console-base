import {
  ILineGroup
} from '../types';
import {
  ETypeLine,
  REG_OL,
  REG_UL
} from '../const';

export default function createLineGroup(type: ETypeLine, items: string[]): ILineGroup {
  switch (type) {
    case ETypeLine.OL:
      return {
        type,
        items: items.map(v => v.replace(REG_OL, ''))
      };
    case ETypeLine.UL:
      return {
        type,
        items: items.map(v => v.replace(REG_UL, ''))
      };
    case ETypeLine.HR:
      return {
        type,
        items: []
      };
    default:
      return {
        type,
        items
      };
  }
}
