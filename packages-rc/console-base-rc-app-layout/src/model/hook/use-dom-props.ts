import {
  HTMLAttributes
} from 'react';

import {
  AsideNavProps
} from '@alicloud/console-base-rc-aside-nav';

import useModelProps from './_use-model-props';

export interface IModelProps extends HTMLAttributes<HTMLDivElement> {
  asideNavProps?: AsideNavProps;
}

export default function useDomProps(): HTMLAttributes<HTMLDivElement> {
  const {
    asideNavProps,
    children,
    ...props
  } = useModelProps();
  
  return props;
}
