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
} from '../../../../enum';
import intl from '../../../../intl';

interface IIconProps {
  iconType: EIconType;
  isSmallICon?: boolean;
}

interface IErrorDivProps extends FlexProps {
  noBackground?: boolean;
  isSmallICon?: boolean;
  widthPercent?: number;
}
interface IProps extends IErrorDivProps {
  iconType: EIconType;
  message: string;
  showU2FRetryButton?: boolean;
  onRetryClick?: () => void;
}

const CssDivCommon = css`
  margin-bottom: 16px;
  padding: 8px 12px;
`;

const CssDivTip = css`
  margin-bottom: 8px;
  margin-left: 4px;
`;

const ScMessageDiv = styled.div`
  width: 90%;
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
  iconType,
  noBackground,
  isSmallICon = false,
  message,
  showU2FRetryButton,
  onRetryClick
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
          onClick: onRetryClick
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
