import {
  HTMLAttributes,
  InputHTMLAttributes,
  TextareaHTMLAttributes,
  ButtonHTMLAttributes,
  ChangeEvent
} from 'react';

import {
  CodeMirrorProps
} from '@alicloud/rc-codemirror';

export * from './alert';
export * from './table';

export interface IPropsCodeViewer extends CodeMirrorProps {
  type?: 'json' | 'js' | 'ts' | 'html' | 'css' | 'less' | 'markdown' | 'text';
  children?: string;
}

export interface IPropsCodeViewerSimple extends Omit<IPropsCodeViewer, 'type'> {}

export interface IPropsPreJson extends Omit<IPropsCodeViewerSimple, 'children'> {
  o?: unknown;
}

export interface IPropsPrePromise extends Omit<IPropsCodeViewerSimple, 'children'> {
  promise?: Promise<unknown> | null;
}

export interface IPropsList extends HTMLAttributes<Element> {
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

export interface IPropsFlex100Hbf {
  header?: string | JSX.Element;
  body?: string | JSX.Element;
  footer?: string | JSX.Element;
}

export type TPropsCheckboxGroup<T> = IPropsChoiceGroup<T, T[]>;

export type TPropsRadioGroup<T> = IPropsChoiceGroup<T, T>;

export interface IPropsInputText extends Omit<InputHTMLAttributes<HTMLInputElement>, 'children' | 'type' | 'onChange'> {
  block?: boolean;
  onChange?(value: string, e: ChangeEvent<HTMLInputElement>): void;
}

export interface IPropsInputTextarea extends Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'children' | 'onChange'> {
  onChange?(value: string, e: ChangeEvent<HTMLTextAreaElement>): void;
}

export interface IPropsInputNumber extends Omit<InputHTMLAttributes<HTMLInputElement>, 'children' | 'type' | 'value' | 'defaultValue' | 'onChange'> {
  value?: number;
  defaultValue?: number;
  onChange?(value: number | undefined, e: ChangeEvent<HTMLInputElement>): void;
}

export interface IPropsInputSwitch extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children' | 'value' | 'defaultValue' | 'aria-checked' | 'role' | 'onClick' | 'onChange'> {
  label?: string | JSX.Element;
  value?: boolean;
  defaultValue?: boolean;
  onChange?(value: boolean): void;
}

export interface IPropsInputJsonObject<T> extends Omit<CodeMirrorProps, 'conf' | 'value' | 'onChange'> {
  value?: T;
  arrayMode?: boolean; // 默认从传入的 value 算
  onChange?(value: T): void;
}