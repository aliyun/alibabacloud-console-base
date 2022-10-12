import {
  INavItemPropsBase
} from '../types';

export default function isItemInteractive(o: INavItemPropsBase): boolean {
  return !!o.href || Object.keys(o).some(v => /^on[A-Z]/.test(v));
}