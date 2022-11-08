import React from 'react';
import styled, {
  css
} from 'styled-components';

import {
  SIZE,
  mixinTextError,
  mixinTextSuccess,
  mixinTextInfo,
  mixinTextPrimary,
  mixinTextWarning,
  mixinBgErrorTint,
  mixinBgInfoTint,
  mixinBgSuccessTint,
  mixinBgWarningTint
} from '@alicloud/console-base-theme';
import Icon from '@alicloud/console-base-rc-icon';
import Flex, {
  FlexProps
} from '@alicloud/console-base-rc-flex';
import Button, {
  ButtonTheme,
  ButtonSize
} from '@alicloud/console-base-rc-button';

import {
  EIconType,
  ALIYUN_APP_VERSION
} from '../../../../../../const';
import intl from '../../../../../../intl';

interface IIconProps {
  iconType: EIconType;
  isSmallICon?: boolean;
}

interface IErrorDivProps extends FlexProps {
  noBackground?: boolean;
  isSmallICon?: boolean;
}

interface IErrorMessageDivProps {
  widthPercentage?: number;
}

interface IProps extends IErrorDivProps, IErrorMessageDivProps {
  message?: string;
  iconType: EIconType;
  showU2FRetryButton?: boolean;
  onU2FErrorRetryClick?: () => void;
}

const u2fRetryMessageWidthPercentage = ALIYUN_APP_VERSION ? 80 : 90;
const CssDivCommon = css`
  padding: 8px 12px;
  margin-bottom: 16px;
`;

const CssDivTip = css`
  margin-left: 4px;
  margin-bottom: 8px;
`;

const ScMessageDiv = styled.div<IErrorMessageDivProps>`
  width: ${props => props.widthPercentage ?? u2fRetryMessageWidthPercentage}%;
`;

const ScNotice = styled(Flex)`
  ${CssDivCommon}
  ${mixinBgInfoTint}
  ${mixinTextInfo}
`;

const ScError = styled(Flex)<IErrorDivProps>`
  word-break: break-all;
  ${props => {
    if (props.noBackground) {
      return CssDivTip;
    }

    return CssDivCommon;
  }}
  ${props => {
    if (props.noBackground) {
      return '';
    }

    return mixinBgErrorTint;
  }}
  ${mixinTextError}
`;

const ScSuccess = styled(Flex)`
  ${CssDivCommon}
  ${mixinBgSuccessTint}
  ${mixinTextSuccess}
`;

const ScWarning = styled(Flex)`
  ${CssDivCommon}
  ${mixinBgWarningTint}
  ${mixinTextPrimary}
`;

const ScIcon = styled(Icon)<IIconProps>`
  margin-right: 8px;
  ${props => {
    switch (props.iconType) {
      case EIconType.ERROR:
        return mixinTextError;
      case EIconType.SUCCESS:
        return mixinTextSuccess;
      case EIconType.WARNING:
        return mixinTextWarning;
      default:
        return mixinTextInfo;
    }
  }};
  ${props => {
    if (props.isSmallICon) {
      return `font-size: ${SIZE.FONT_SIZE_BODY}px;`;
    }

    return `font-size: ${SIZE.FONT_SIZE_H6}px;`;
  }};
`;

// 通用的顶部提示 Message 组件
export default function Message({
  message,
  iconType,
  noBackground,
  isSmallICon = false,
  showU2FRetryButton,
  onU2FErrorRetryClick
}: IProps): JSX.Element {
  switch (iconType) {
    case EIconType.ERROR:
      return <ScError noBackground={noBackground} align="center" justify="space-between">
        <ScMessageDiv>
          <ScIcon type={EIconType.ERROR} iconType={EIconType.ERROR} isSmallICon={isSmallICon} />
          {message}
        </ScMessageDiv>
        {/* 绑定/验证 U2F 场景，当 U2F 安全密钥获取失败时，有重试的按钮 */}
        {showU2FRetryButton ? <Button {...{
          theme: ButtonTheme.TEXT_PRIMARY,
          size: ButtonSize.S,
          label: intl('op:retry'),
          onClick: onU2FErrorRetryClick
        }} /> : null}
      </ScError>;
    case EIconType.NOTICE:
      return <ScNotice align="center">
        <ScIcon type={EIconType.NOTICE} iconType={EIconType.NOTICE} />
        {message}
      </ScNotice>;
    case EIconType.SUCCESS:
      return <ScSuccess align="center">
        <ScIcon type={EIconType.SUCCESS} iconType={EIconType.SUCCESS} />
        {message}
      </ScSuccess>;
    default:
      return <ScWarning align="center">
        <ScIcon type={EIconType.WARNING} iconType={EIconType.WARNING} />
        {message}
      </ScWarning>;
  }
}
