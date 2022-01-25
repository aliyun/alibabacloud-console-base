import {
  HTMLAttributes
} from 'react';

import {
  EAlertTheme
} from '../enum';

export interface IProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
  theme?: EAlertTheme;
  title?: string | JSX.Element;
  message?: string | JSX.Element;
  toast?: boolean;
  closable?: boolean;
  onClose?(): void;
}
