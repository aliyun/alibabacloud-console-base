import {
  IModelProps
} from '../model';

export default function getStyleCursor(props: Partial<IModelProps>): string {
  if (props.disabled) {
    return 'not-allowed';
  }
  
  if (props.loading) {
    return 'default';
  }
  
  return props.cursor || 'pointer';
}