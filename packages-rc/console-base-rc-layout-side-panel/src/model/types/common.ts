import {
  ReactElement
} from 'react';

import {
  ButtonProps
} from '@alicloud/console-base-rc-button';

export interface ISidePanelItemProps extends Omit<ButtonProps, 'label' | 'size' | 'theme' | 'iconLeft' | 'iconRight'> {
  key?: string | number;
  title: string;
  icon: string | ReactElement;
  tooltip?: string | ReactElement;
  /**
   * 徽标，数字展示数字，true 展示小红点
   */
  unread?: number | boolean;
  onActiveChange?(active: boolean): void;
}