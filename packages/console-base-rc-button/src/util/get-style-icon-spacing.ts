import {
  IModelProps
} from '../model';

export default function getStyleIconSpacing(props: Partial<IModelProps>): number {
  switch (props.iconSpacing) {
    case 'no':
      return 0;
    case 'small':
      return 4;
    default:
      return 8;
  }
}