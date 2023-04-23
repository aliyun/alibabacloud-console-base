import {
  IParsedDivider
} from '../types';

export default function createDividerItem(indexes: number[], indent: number): IParsedDivider {
  return {
    key: `divider-${indexes.join('-')}`,
    divider: true,
    indent
  };
}
