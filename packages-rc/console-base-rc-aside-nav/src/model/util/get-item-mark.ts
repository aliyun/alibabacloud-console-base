import {
  INavItemPropsBase
} from '../types';

export default function getItemMark(o: INavItemPropsBase): INavItemPropsBase['mark'] | undefined {
  if (!o.mark && o.href && (o.target === '_blank' || /^(?:https?:)?\/\//.test(o.href))) {
    return 'external';
  }
  
  return o.mark;
}