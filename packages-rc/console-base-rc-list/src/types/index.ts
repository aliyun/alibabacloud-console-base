import {
  Ref,
  HTMLAttributes
} from 'react';

export interface IListProps extends HTMLAttributes<Element> {
  ordered?: boolean;
}

export type TListRef = Ref<HTMLOListElement & HTMLUListElement>;