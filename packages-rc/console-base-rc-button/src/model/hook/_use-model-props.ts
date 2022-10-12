import {
  useMemo
} from 'react';

import {
  IPropsCustom,
  IPropsDom
} from '../types';
import {
  EButtonTheme
} from '../enum';

import useModelContext from './_use-model-context';

function getHrefTarget(href: string, target?: string): string | undefined {
  if (target) {
    return target;
  }
  
  try {
    const {
      host
    } = new URL(href, window.location.href);
    
    return host === window.location.host ? undefined : '_blank';
  } catch (err) {
    return undefined;
  }
}

function getTitle(title?: string | boolean, label?: unknown): string | undefined {
  if (!title) {
    return;
  }
  
  if (typeof title === 'string') {
    return title;
  }
  
  if (typeof label === 'string') { // title === true
    return label;
  }
}

export default function useModelProps(): [IPropsCustom, IPropsDom] {
  const {
    props
  } = useModelContext();
  
  return useMemo((): [IPropsCustom, IPropsDom] => {
    const {
      component,
      label,
      title,
      loading,
      iconLeft,
      iconRight,
      theme = EButtonTheme.TERTIARY,
      size,
      textAlign,
      cursor,
      borderRadius = true,
      noShadow,
      block,
      active,
      iconSpacing,
      spm,
      classNameForIconLeft,
      classNameForIconRight,
      ...rest
    } = props;
    const propsCustom: IPropsCustom = {
      component,
      label,
      title,
      loading,
      iconLeft,
      iconRight,
      theme,
      size,
      textAlign,
      cursor,
      borderRadius,
      noShadow,
      block,
      active,
      iconSpacing,
      classNameForIconLeft,
      classNameForIconRight
    };
    const propsDom: IPropsDom = {
      ...rest,
      title: getTitle(title, label)
    };
    
    // loading 或 disabled 状态下不能有点击和链接
    if (propsDom.disabled || loading) {
      delete propsDom.onClick;
      delete propsDom.href;
      delete propsDom.target;
    } else if (spm) {
      propsDom['data-spm-click'] = `gostr=/aliyun;locaid=d${spm}`;
    }
    
    if (propsDom.href) { // 保证有 href 且非 disabled 状态下一定是 a，以及外链默认 target blank
      propsDom.target = getHrefTarget(propsDom.href, propsDom.target);
      propsCustom.component = 'a';
    }
    
    return [propsCustom, propsDom];
  }, [props]);
}
