import {
  HTMLAttributes
} from 'react';

export interface IPropsBeaconTip {
  tip: string | JSX.Element;
  tipAlign?: 'tl' | 'tr' | 'bl' | 'br' | 'lt' | 'lb' | 'rt' | 'rb';
  tipWidth?: number;
  buttonClose?: string;
  onClose?(): void;
}

// 继承 div props 主要是为了可以接收 className 和 style
export interface IPropsBeacon extends Omit<HTMLAttributes<HTMLDivElement>, 'onClick'>, Partial<IPropsBeaconTip> {}
