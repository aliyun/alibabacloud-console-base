import {
  IModelProps
} from '../model';

import isBorderless from './is-borderless';

export default function getStyleBorderRadius(props: Partial<IModelProps>): string {
  if (isBorderless(props) || !props.borderRadius) {
    return '0';
  }
  
  return props.borderRadius === 'full' ? '100px' : '2px';
}