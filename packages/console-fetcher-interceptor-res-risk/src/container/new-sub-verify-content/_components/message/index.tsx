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
import aliyunAppVersion from '../../../../util/aliyun-app-version';

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
  iconType: EIconType;
  message: string;
  showU2fRetryButton?: boolean;
  onRetryClick?: () => void;
}

const u2fRetryMessageWidthPercent = aliyunAppVersion ? 80 : 90;

const CssDivCommon = css`
  margin-bottom: 16px;
  padding: 8px 12px;
  word-break: break-word;
`;

const CssDivTip = css`
  margin-bottom: 8px;
  margin-left: 4px;
  word-break: break-word;
`;

const ScErrorMessageDiv = styled.div<IErrorMessageDivProps>`
  width: ${props => props.widthPercentage ?? u2fRetryMessageWidthPercent}%;
`;

const ScNotice = styled(Flex)`
  ${CssDivCommon}
  ${mixinBgInfoTint}
  ${mixinTextInfo}
`;

const ScError = styled(Flex)<IErrorDivProps>`
  word-break: break-all;
  ${mixinTextError}
  ${props => (props.noBackground ? CssDivTip : CssDivCommon)}
  ${props => (props.noBackground ? null : mixinBgErrorTint)}
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
  font-size: ${props => (props.isSmallICon ? SIZE.FONT_SIZE_BODY : SIZE.FONT_SIZE_H6)}px;
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
  }}
`;

// 通用的顶部提示 Message 组件
export default function Message({
  message,
  iconType,
  noBackground,
  widthPercentage,
  showU2fRetryButton,
  isSmallICon = false,
  onRetryClick
}: IProps): JSX.Element {
  switch (iconType) {
    case EIconType.ERROR:
      return <ScError noBackground={noBackground} align="center" justify="space-between">
        <ScErrorMessageDiv widthPercentage={widthPercentage}>
          <ScIcon type={EIconType.ERROR} iconType={EIconType.ERROR} isSmallICon={isSmallICon} />
          {message}
        </ScErrorMessageDiv>
        {showU2fRetryButton ? <Button {...{ // 绑定/验证 U2F 场景，当 U2F 安全密钥获取失败时，有重试的按钮
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
