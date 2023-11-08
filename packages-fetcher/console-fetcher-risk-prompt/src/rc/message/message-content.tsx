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
  mixinBgWarningTint,
  mixinBorderSecondary
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
} from '../../enum';
import {
  TStringOrJsx
} from '../../types';
import {
  MOBILE_SCREEN_SIZE
} from '../../const';
import intl from '../../intl';

interface IScIconProps {
  ['data-icon-type']: EIconType;
  ['data-small-icon']?: boolean;
}

interface IScErrorProps extends FlexProps {
  ['data-no-bg']?: boolean;
  ['data-small-icon']?: boolean;
}

interface IMessageContentProps {
  noBg?: boolean;
  iconType: EIconType;
  message?: TStringOrJsx;
  isSmallIcon?: boolean;
  showU2FRetryButton?: boolean;
  onU2FErrorRetryClick?: () => void;
}

const CssDivCommon = css`
  margin-bottom: 12px;
  padding: 8px 12px;
`;

const CssDivTip = css`
  margin-bottom: 8px;
  margin-left: 4px;
`;

const ScMessageDiv = styled.div`
  width: 90%;

  @media (max-width: ${MOBILE_SCREEN_SIZE}px) {
    width: 80%;
  }
`;

const ScNotice = styled(Flex)`
  ${CssDivCommon}
  ${mixinBgInfoTint}
  ${mixinTextInfo}
`;

const ScLoading = styled(Flex)`
  font-weight: 600;
  ${CssDivCommon}
  ${mixinTextPrimary}
  ${mixinBorderSecondary}
`;

const ScError = styled(Flex)<IScErrorProps>`
  word-break: break-all;
  ${props => {
    if (props['data-no-bg']) {
      return CssDivTip;
    }

    return CssDivCommon;
  }}
  ${props => {
    if (props['data-no-bg']) {
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

const ScIcon = styled(Icon)<IScIconProps>`
  margin-right: 8px;
  ${props => {
    switch (props['data-icon-type']) {
      case EIconType.ERROR:
        return mixinTextError;
      case EIconType.SUCCESS:
        return mixinTextSuccess;
      case EIconType.WARNING:
        return mixinTextWarning;
      case EIconType.LOADING:
        return mixinTextPrimary;
      default:
        return mixinTextInfo;
    }
  }};
  ${props => {
    if (props['data-small-icon']) {
      return `font-size: ${SIZE.FONT_SIZE_BODY}px;`;
    }

    return `font-size: ${SIZE.FONT_SIZE_H6}px;`;
  }};
`;

// 通用的顶部提示 Message 组件
export default function MessageContent({
  noBg,
  message,
  iconType,
  isSmallIcon = false,
  showU2FRetryButton,
  onU2FErrorRetryClick
}: IMessageContentProps): JSX.Element {
  switch (iconType) {
    case EIconType.ERROR:
      return <ScError {...{
        align: 'center',
        justify: 'space-between',
        'data-no-bg': noBg
      }}>
        <ScMessageDiv>
          <ScIcon {...{
            type: EIconType.ERROR,
            'data-small-icon': isSmallIcon,
            'data-icon-type': EIconType.ERROR
          }} />
          {message}
        </ScMessageDiv>
        {/* 验证 U2F 场景，当 U2F 安全密钥获取失败时，有重试的按钮 */}
        {showU2FRetryButton && <Button {...{
          theme: ButtonTheme.TEXT_PRIMARY,
          size: ButtonSize.S,
          label: intl('op:retry'),
          onClick: onU2FErrorRetryClick
        }} />}
      </ScError>;
    case EIconType.NOTICE:
      return <ScNotice align="center">
        <ScIcon {...{
          type: EIconType.LOADING,
          'data-icon-type': EIconType.NOTICE
        }} />
        {message}
      </ScNotice>;
    case EIconType.SUCCESS:
      return <ScSuccess align="center">
        <ScIcon {...{
          type: EIconType.SUCCESS,
          'data-icon-type': EIconType.SUCCESS
        }} />
        {message}
      </ScSuccess>;
    case EIconType.LOADING:
      return <ScLoading align="center">
        <ScIcon {...{
          type: EIconType.LOADING,
          'data-icon-type': EIconType.LOADING
        }} />
        {message}
      </ScLoading>;
    default:
      return <ScWarning align="center">
        <ScIcon {...{
          type: EIconType.WARNING,
          'data-icon-type': EIconType.WARNING
        }} />
        {message}
      </ScWarning>;
  }
}

export type {
  IMessageContentProps
};
