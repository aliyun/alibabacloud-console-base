import {
  HTMLAttributes
} from 'react';

export interface IPropsPre extends HTMLAttributes<HTMLPreElement> {
  headnote?: string | JSX.Element;
  footnote?: string | JSX.Element;
}

export interface IPropsPreJson extends Omit<IPropsPre, 'children'> {
  o?: unknown;
}

export interface IPropsPrePromise extends Omit<IPropsPre, 'children'> {
  promise?: Promise<unknown> | null;
}

export interface IPropsList extends HTMLAttributes<HTMLOListElement> {
  ordered?: boolean;
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

export interface IPropsFlex100HBF {
  header?: string | JSX.Element;
  body?: string | JSX.Element;
  footer?: string | JSX.Element;
}

export type TPropsCheckboxGroup<T> = IPropsChoiceGroup<T, T[]>;

export type TPropsRadioGroup<T> = IPropsChoiceGroup<T, T>;
