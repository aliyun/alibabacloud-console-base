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
  EIconType
} from '../../../../const';
import intl from '../../../../intl';

interface IIconProps {
  iconType: EIconType;
  isSmallICon?: boolean;
}

interface IErrorDivProps extends FlexProps {
  noBackground?: boolean;
  isSmallICon?: boolean;
}

interface IProps extends IErrorDivProps {
  iconType: EIconType;
  message: string;
  canU2FRetry?: boolean;
  onRetryClick?: () => void;
}

const CssDivCommon = css`
  padding: 8px 12px;
  margin-bottom: 16px;
`;

const CssDivTip = css`
  margin-left: 4px;
  margin-bottom: 8px;
`;

const ScNotice = styled(Flex)`
   ${CssDivCommon}
   ${mixinBgInfoTint}
   ${mixinTextInfo}
`;

const ScError = styled(Flex)<IErrorDivProps>`
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
      case EIconType.error:
        return mixinTextError;
      case EIconType.success:
        return mixinTextSuccess;
      case EIconType.warning:
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
  iconType,
  noBackground,
  isSmallICon = false,
  message,
  canU2FRetry,
  onRetryClick
}: IProps): JSX.Element {
  switch (iconType) {
    case EIconType.error:
      return <ScError noBackground={noBackground} align="center" justify="space-between">
        <div>
          <ScIcon type={EIconType.error} iconType={EIconType.error} isSmallICon={isSmallICon} />
          {message}
        </div>
        {/* 绑定/验证 U2F 场景，当 U2F 安全密钥获取失败时，有重试的按钮 */}
        {canU2FRetry ? <Button {...{
          theme: ButtonTheme.PRIMARY,
          size: ButtonSize.S,
          label: intl('op:retry'),
          onClick: onRetryClick
        }} /> : null}
      </ScError>;
    case EIconType.notice:
      return <ScNotice align="center">
        <ScIcon type={EIconType.notice} iconType={EIconType.notice} />
        {message}
      </ScNotice>;
    case EIconType.success:
      return <ScSuccess align="center">
        <ScIcon type={EIconType.success} iconType={EIconType.success} />
        {message}
      </ScSuccess>;
    default:
      return <ScWarning align="center">
        <ScIcon type={EIconType.warning} iconType={EIconType.warning} />
        {message}
      </ScWarning>;
  }
}
