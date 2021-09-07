import React, {
  FormHTMLAttributes,
  FormEvent
} from 'react';

import {
  IFormItem
} from './_types';
import FormItem from './item';

interface IProps extends FormHTMLAttributes<HTMLFormElement> {
  items: IFormItem[];
}

function onSubmit(e: FormEvent<HTMLFormElement>): void {
  e.preventDefault();
}

export default function Form({
  items = [],
  ...props
}: IProps): JSX.Element {
  return <form {...{
    onSubmit,
    ...props
  }}>
    {items.map((v, i) => <FormItem {...v} key={v.key || `${v.label}-${i}`} />)}
  </form>;
}