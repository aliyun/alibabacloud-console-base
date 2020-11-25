import {
  HTMLAttributes
} from 'react';

export interface IPropsList extends HTMLAttributes<HTMLOListElement> {
  ordered?: boolean;
  // @deprecated use children
  items?: (string | JSX.Element)[];
}

export interface IChoiceItem<T> {
  value: T;
  label: string | JSX.Element;
}

export interface IPropsChoiceGroup<T, V = T> {
  label?: string | JSX.Element;
  items: IChoiceItem<T>[];
  value?: V;
  defaultValue?: V;
  onChange?(value: V): void;
}

export type TPropsCheckboxGroup<T> = IPropsChoiceGroup<T, T[]>;

export type TPropsRadioGroup<T> = IPropsChoiceGroup<T, T>;
