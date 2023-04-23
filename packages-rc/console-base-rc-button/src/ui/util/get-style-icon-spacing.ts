import {
  TIconSpacing
} from '../../model';

export default function getStyleIconSpacing(iconSpacing?: TIconSpacing): number {
  switch (iconSpacing) {
    case 'no':
      return 0;
    case 'small':
      return 4;
    default:
      return 8;
  }
}
