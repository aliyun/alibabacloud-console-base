import {
  ButtonProps
} from '@alicloud/console-base-rc-button';

export interface ISidePanelItemButtonProps extends Omit<ButtonProps, 'size' | 'theme' | 'title'> {
  title?: string;
}