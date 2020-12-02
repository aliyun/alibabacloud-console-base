import { ETypeLine, REG_OL, REG_UL } from '../const';
export default function createLineGroup(type, items) {
  switch (type) {
    case ETypeLine.OL:
      return {
        type: type,
        items: items.map(function (v) {
          return v.replace(REG_OL, '');
        })
      };

    case ETypeLine.UL:
      return {
        type: type,
        items: items.map(function (v) {
          return v.replace(REG_UL, '');
        })
      };

    case ETypeLine.HR:
      return {
        type: type,
        items: []
      };

    default:
      return {
        type: type,
        items: items
      };
  }
}