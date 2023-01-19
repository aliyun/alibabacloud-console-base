import {
  HTMLAttributes
} from 'react';

export interface ISelectItem<T = string> {
  label?: string | JSX.Element;
  value: T;
  key?: string | number;
}

export interface IInputSelectProps<T = string> extends Omit<HTMLAttributes<HTMLDivElement>, 'value' | 'defaultValue' | 'onChange'> {
  dataSource: ISelectItem<T>[];
  placeholder?: string;
  value?: T;
  defaultValue?: T;
  dropdownVisible?: boolean;
  defaultDropdownVisible?: boolean;
  onChange?(value: T | undefined): void;
  onDropdownVisibleChange?(visible: boolean): void;
}