import {
  IEasyIconProps
} from '../../types';
import {
  renderEasyIcon
} from '../../util';

export default function EasyIcon({
  icon
}: IEasyIconProps): JSX.Element | null {
  return renderEasyIcon(icon);
}
