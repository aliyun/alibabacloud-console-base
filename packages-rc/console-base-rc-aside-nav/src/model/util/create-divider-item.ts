import {
  IParsedDivider
} from '../types';

export default function createDividerItem(index: number, indent: number): IParsedDivider {
  return {
    key: `divider-${index}`,
    divider: true,
    indent
  };
}
