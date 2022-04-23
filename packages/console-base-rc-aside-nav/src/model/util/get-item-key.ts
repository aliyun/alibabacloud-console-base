import {
  INavItemPropsBase
} from '../types';

export default function getItemKey(o: INavItemPropsBase): string | undefined {
  return o.key ?? o.href;
}