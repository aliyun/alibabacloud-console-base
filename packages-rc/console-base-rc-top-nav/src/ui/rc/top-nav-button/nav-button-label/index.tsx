import React, {
  isValidElement
} from 'react';
import styled from 'styled-components';

import {
  mixinTextEmphasis,
  mixinBgBrand
} from '@alicloud/console-base-theme';

import {
  TopNavButtonProps
} from '../../../../model';

interface IProps {
  label: TopNavButtonProps['label'];
}

const ScIconWrap = styled.span`
  i {
    font-size: 16px;
  }
`;

const ScIndicatorDot = styled.span`
  position: absolute;
  top: 12px;
  right: 8px;
  border-radius: 2px;
  width: 4px;
  height: 4px;
  ${mixinBgBrand}
`;

const ScIndicatorNumber = styled.strong`
  position: absolute;
  top: 4px;
  right: 0;
  line-height: 1.5;
  font-size: 12px;
  font-weight: 600;
  transform: scale(0.8);
  ${mixinTextEmphasis}
`;

/**
 * 让 button.label 可以纯配置化
 */
export default function NavButtonLabel({
  label
}: IProps): JSX.Element {
  if (typeof label === 'string') {
    return <>{label}</>;
  }
  
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  if (isValidElement<any>(label)) { // TODO TS5 isValidElement 问题 https://github.com/microsoft/TypeScript/issues/53178
    return label;
  }
  
  if (label) {
    const {
      icon,
      html,
      text,
      count = 0,
      countAsDot
    } = label;
    let jsxLabel: JSX.Element;
    
    if (icon) {
      jsxLabel = <ScIconWrap>{icon}</ScIconWrap>;
    } else if (html) {
      jsxLabel = <span dangerouslySetInnerHTML={{ // eslint-disable-line react/no-danger
        __html: html
      }} />;
    } else {
      jsxLabel = <>{text}</>;
    }
    
    if (html) {
      return <span dangerouslySetInnerHTML={{ // eslint-disable-line react/no-danger
        __html: html
      }} />;
    }
    
    return count > 0 ? <>
      {jsxLabel}
      {countAsDot ? <ScIndicatorDot /> : <ScIndicatorNumber>{count > 99 ? '99+' : count}</ScIndicatorNumber>}
    </> : jsxLabel;
  }
  
  return <>?</>;
}
