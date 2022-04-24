import {
  INavItemPropsBase
} from '../types';

export default function getItemKey(o: INavItemPropsBase): string {
  return o.key || o.href || (typeof o.label === 'string' ? o.label : '');
}