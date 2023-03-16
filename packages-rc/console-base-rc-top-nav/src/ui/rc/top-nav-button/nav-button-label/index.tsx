import React, {
  isValidElement
} from 'react';
import styled from 'styled-components';

import {
  mixinTextEmphasis,
  mixinBgBrand
} from '@alicloud/console-base-theme';
import Icon from '@alicloud/console-base-rc-icon';

import {
  ModelPropsButton
} from '../../../../model';

interface IProps {
  label: ModelPropsButton['label'];
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
  if (isValidElement(label)) {
    return label;
  }
  
  if (typeof label === 'string') {
    return <>{label}</>;
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
      jsxLabel = <ScIconWrap>{isValidElement(icon) ? icon : <Icon type={icon} />}</ScIconWrap>;
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
