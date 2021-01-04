import React from 'react';
import styled from 'styled-components';

import {
  COLOR,
  mixinTextEmphasis
} from '@alicloud/console-base-theme';
import Icon from '@alicloud/console-base-rc-icon';

import {
  ITopNavButton
} from '../../../types';

interface IProps {
  label: ITopNavButton['label'];
}

const ScButtonIcon = styled(Icon)`
  font-size: 16px;
`;

const ScIndicatorDot = styled.span`
  position: absolute;
  top: 12px;
  right: 8px;
  border-radius: 2px;
  background: ${COLOR.TEXT_EMPHASIS};
  background: var(--cb-color-text-emphasis, ${COLOR.TEXT_EMPHASIS});
  width: 4px;
  height: 4px;
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
export default function ButtonLabel({
  label
}: IProps): JSX.Element {
  if (React.isValidElement(label)) {
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
      count,
      countAsDot
    } = label;
    let jsxLabel: JSX.Element;
    
    if (icon) {
      jsxLabel = <ScButtonIcon type={icon} />;
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
      {countAsDot ? <ScIndicatorDot /> : <ScIndicatorNumber>{count}</ScIndicatorNumber>}
    </> : jsxLabel;
  }
  
  return <>?</>;
}
